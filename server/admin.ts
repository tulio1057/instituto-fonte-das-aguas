// ============================================================================
// ADMIN API — Instituto Fonte das Águas
// ============================================================================
// Rotas de autenticação e gerenciamento de conteúdo via content.json
//
// Variáveis de ambiente necessárias:
//   ADMIN_PASSWORD  — senha do painel (ex: "minhasenha123")
//   ADMIN_SECRET    — segredo para assinar o JWT (ex: string longa aleatória)
//
// Endpoints:
//   POST /api/login          — autentica e devolve token JWT
//   GET  /api/content        — retorna content.json (público)
//   POST /api/content        — sobrescreve content.json (requer token)
// ============================================================================

import { Router, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const router = Router();

// ---------------------------------------------------------------------------
// Localização do content.json
// ---------------------------------------------------------------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// O arquivo fica na raiz do projeto, um nível acima de /server
const CONTENT_PATH = path.resolve(__dirname, "..", "content.json");

// ---------------------------------------------------------------------------
// Helpers de token simples (HMAC-SHA256, sem dependência externa)
// O formato é: base64(payload).base64(signature)
// Não é JWT padrão, mas é seguro para este caso de uso.
// ---------------------------------------------------------------------------

function getSecret(): string {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    console.warn(
      "[admin] ADMIN_SECRET não definido — usando valor padrão inseguro. " +
      "Defina ADMIN_SECRET no arquivo .env antes de ir para produção."
    );
    return "default-insecure-secret-change-me";
  }
  return secret;
}

function createToken(payload: object): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto
    .createHmac("sha256", getSecret())
    .update(data)
    .digest("base64url");
  return `${data}.${sig}`;
}

function verifyToken(token: string): object | null {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return null;
    const expected = crypto
      .createHmac("sha256", getSecret())
      .update(data)
      .digest("base64url");
    // Comparação segura contra timing attacks
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
      return null;
    }
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    // Verifica expiração (exp em segundos, igual ao padrão JWT)
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Middleware de autenticação
// ---------------------------------------------------------------------------

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido." });
  }
  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
  next();
}

// ---------------------------------------------------------------------------
// Helpers de leitura/escrita do content.json
// ---------------------------------------------------------------------------

function readContent(): object {
  if (!fs.existsSync(CONTENT_PATH)) {
    // Se o arquivo não existir, cria um objeto vazio como fallback
    console.warn("[admin] content.json não encontrado em", CONTENT_PATH);
    return {};
  }
  const raw = fs.readFileSync(CONTENT_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeContent(data: object): void {
  // Escreve em arquivo temporário primeiro, depois renomeia (atômico)
  const tmp = CONTENT_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tmp, CONTENT_PATH);
}

// Validação mínima da estrutura
function validateContent(data: unknown): data is object {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return false;
  }
  // Verifica que as chaves obrigatórias existem
  const required = ["instituto", "numerosImpacto", "diretoria", "eventosAnuais", "projetos"];
  return required.every((k) => k in (data as Record<string, unknown>));
}

// Sanitiza strings: remove tags HTML e limita comprimento
function sanitizeString(value: unknown, maxLen = 2000): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")  // remove tags HTML
    .slice(0, maxLen)
    .trim();
}

function sanitizeContent(data: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(
    JSON.stringify(data, (_key, value) => {
      if (typeof value === "string") return sanitizeString(value);
      return value;
    })
  );
}

// ---------------------------------------------------------------------------
// POST /api/login
// ---------------------------------------------------------------------------

router.post("/login", (req: Request, res: Response) => {
  const { password } = req.body as { password?: string };

  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "Senha não fornecida." });
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("[admin] ADMIN_PASSWORD não definido no ambiente!");
    return res.status(500).json({ error: "Servidor mal configurado." });
  }

  // Comparação segura contra timing attacks
  const inputBuf = Buffer.from(password.padEnd(adminPassword.length));
  const expectedBuf = Buffer.from(adminPassword.padEnd(password.length));

  let match = false;
  try {
    match = crypto.timingSafeEqual(inputBuf, expectedBuf) && password.length === adminPassword.length;
  } catch {
    match = false;
  }

  if (!match) {
    // Pequeno delay para dificultar brute-force
    setTimeout(() => {
      res.status(401).json({ error: "Senha incorreta." });
    }, 500);
    return;
  }

  // Token válido por 8 horas
  const token = createToken({
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60,
  });

  res.json({ token });
});

// ---------------------------------------------------------------------------
// GET /api/content  (público — o site usa para carregar dados)
// ---------------------------------------------------------------------------

router.get("/content", (_req: Request, res: Response) => {
  try {
    const content = readContent();
    res.json(content);
  } catch (err) {
    console.error("[admin] Erro ao ler content.json:", err);
    res.status(500).json({ error: "Erro ao carregar conteúdo." });
  }
});

// ---------------------------------------------------------------------------
// POST /api/content  (protegido — só o painel admin usa)
// ---------------------------------------------------------------------------

router.post("/content", requireAuth, (req: Request, res: Response) => {
  const body = req.body as unknown;

  if (!validateContent(body)) {
    return res.status(400).json({
      error: "Estrutura de dados inválida. Verifique os campos obrigatórios.",
    });
  }

  try {
    const sanitized = sanitizeContent(body as Record<string, unknown>);
    writeContent(sanitized);
    res.json({ ok: true, message: "Conteúdo salvo com sucesso!" });
  } catch (err) {
    console.error("[admin] Erro ao salvar content.json:", err);
    res.status(500).json({ error: "Erro ao salvar conteúdo." });
  }
});

export default router;

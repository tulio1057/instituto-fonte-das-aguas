// ============================================================================
// ADMIN API — Instituto Fonte das Águas
// Node.js 24 / Express 5 compatible
// ============================================================================
import { Router, Request, Response, NextFunction } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const router = Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.resolve(__dirname, "..", "content.json");
const POSTS_PATH = path.resolve(__dirname, "..", "posts.json");

function getSecret(): string {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    console.warn("[admin] ADMIN_SECRET não definido — usando valor padrão inseguro.");
    return "default-insecure-secret-change-me";
  }
  return secret;
}

function createToken(payload: object): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
  return `${data}.${sig}`;
}

function verifyToken(token: string): object | null {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return null;
    const expected = crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
    // Node 24: timingSafeEqual exige buffers do mesmo tamanho — garantido pelo base64url
    const sigBuf = Buffer.from(sig, "base64url");
    const expectedBuf = Buffer.from(expected, "base64url");
    if (sigBuf.length !== expectedBuf.length) return null;
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return null;
    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as Record<string, unknown>;
    if (typeof payload["exp"] === "number" && Date.now() / 1000 > payload["exp"]) return null;
    return payload;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Middleware de autenticação — Express 5: retorno void, sem "return res.json()"
// ---------------------------------------------------------------------------
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token não fornecido." });
    return;
  }
  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: "Token inválido ou expirado." });
    return;
  }
  next();
}

function readContent(): object {
  if (!fs.existsSync(CONTENT_PATH)) {
    console.warn("[admin] content.json não encontrado em", CONTENT_PATH);
    return {};
  }
  const raw = fs.readFileSync(CONTENT_PATH, "utf-8");
  return JSON.parse(raw) as object;
}

function writeContent(data: object): void {
  const tmp = CONTENT_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tmp, CONTENT_PATH);
}

// Valida campos obrigatórios; novos campos (capacitacoes, simposio) são opcionais
function validateContent(data: unknown): data is object {
  if (typeof data !== "object" || data === null || Array.isArray(data)) return false;
  const required = ["instituto", "numerosImpacto", "diretoria", "eventosAnuais", "projetos"];
  return required.every((k) => k in (data as Record<string, unknown>));
}

// Sanitiza strings mas permite Base64 (até 5MB por campo) e não remove data: URIs
function sanitizeString(value: unknown, maxLen = 5_000_000): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .slice(0, maxLen)
    .trim();
}

function sanitizeContent(data: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(
    JSON.stringify(data, (_key, value: unknown) => {
      if (typeof value === "string") return sanitizeString(value);
      return value;
    })
  ) as Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Posts do Blog — arquivo separado (posts.json) para não inchar o content.json
// principal com texto/imagens que crescem ao longo do tempo.
// ---------------------------------------------------------------------------
function readPosts(): unknown[] {
  if (!fs.existsSync(POSTS_PATH)) {
    console.warn("[admin] posts.json não encontrado em", POSTS_PATH);
    return [];
  }
  try {
    const raw = fs.readFileSync(POSTS_PATH, "utf-8");
    const data = JSON.parse(raw) as unknown;
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("[admin] Erro ao ler posts.json:", err);
    return [];
  }
}

function writePosts(data: unknown[]): void {
  const tmp = POSTS_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tmp, POSTS_PATH);
}

function validatePosts(data: unknown): data is Record<string, unknown>[] {
  if (!Array.isArray(data)) return false;
  const required = ["id", "slug", "titulo", "conteudo"];
  return data.every(
    (p) => typeof p === "object" && p !== null && required.every((k) => k in (p as Record<string, unknown>))
  );
}

function sanitizePosts(data: Record<string, unknown>[]): Record<string, unknown>[] {
  return JSON.parse(
    JSON.stringify(data, (_key, value: unknown) => {
      if (typeof value === "string") return sanitizeString(value);
      return value;
    })
  ) as Record<string, unknown>[];
}

// ---------------------------------------------------------------------------
// Rotas — Express 5: handlers retornam void; response é chamado e depois return
// ---------------------------------------------------------------------------

router.post("/login", (req: Request, res: Response): void => {
  const { password } = req.body as { password?: string };
  if (!password || typeof password !== "string") {
    res.status(400).json({ error: "Senha não fornecida." });
    return;
  }
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("[admin] ADMIN_PASSWORD não definido no ambiente!");
    res.status(500).json({ error: "Servidor mal configurado." });
    return;
  }

  // Buffers de mesmo comprimento para timingSafeEqual — Node 24 rejeita tamanhos diferentes
  const maxLen = Math.max(password.length, adminPassword.length);
  const inputBuf = Buffer.from(password.padEnd(maxLen));
  const expectedBuf = Buffer.from(adminPassword.padEnd(maxLen));

  let match = false;
  try {
    match =
      crypto.timingSafeEqual(inputBuf, expectedBuf) &&
      password.length === adminPassword.length;
  } catch {
    match = false;
  }

  if (!match) {
    setTimeout(() => res.status(401).json({ error: "Senha incorreta." }), 500);
    return;
  }

  const token = createToken({ role: "admin", exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60 });
  res.json({ token });
});

router.get("/content", (_req: Request, res: Response): void => {
  try {
    const content = readContent();
    res.json(content);
  } catch (err) {
    console.error("[admin] Erro ao ler content.json:", err);
    res.status(500).json({ error: "Erro ao carregar conteúdo." });
  }
});

router.post("/content", requireAuth, (req: Request, res: Response): void => {
  const body = req.body as unknown;
  if (!validateContent(body)) {
    res.status(400).json({ error: "Estrutura de dados inválida. Verifique os campos obrigatórios." });
    return;
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

// ---------------------------------------------------------------------------
// Rotas — Blog
// ---------------------------------------------------------------------------

// Pública: retorna todos os posts (o front-end filtra os publicados para o
// blog público; o painel admin usa a lista completa, incluindo rascunhos).
router.get("/posts", (_req: Request, res: Response): void => {
  try {
    const posts = readPosts();
    res.json(posts);
  } catch (err) {
    console.error("[admin] Erro ao listar posts:", err);
    res.status(500).json({ error: "Erro ao carregar posts." });
  }
});

// Protegida: salva a lista completa de posts (mesmo padrão de "salvar tudo de
// uma vez" já usado em /content — simples e consistente com o restante do site).
router.post("/posts", requireAuth, (req: Request, res: Response): void => {
  const body = req.body as unknown;
  if (!validatePosts(body)) {
    res.status(400).json({ error: "Estrutura de dados inválida. Cada post precisa de id, slug, titulo e conteudo." });
    return;
  }
  try {
    const sanitized = sanitizePosts(body);
    writePosts(sanitized);
    res.json({ ok: true, message: "Posts salvos com sucesso!" });
  } catch (err) {
    console.error("[admin] Erro ao salvar posts.json:", err);
    res.status(500).json({ error: "Erro ao salvar posts." });
  }
});

export default router;

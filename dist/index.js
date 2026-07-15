// server/index.ts
import express from "express";
import { createServer } from "http";
import path2 from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";

// server/admin.ts
import { Router } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
var router = Router();
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var CONTENT_PATH = path.resolve(__dirname, "..", "content.json");
var POSTS_PATH = path.resolve(__dirname, "..", "posts.json");
function getSecret() {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    console.warn("[admin] ADMIN_SECRET n\xE3o definido \u2014 usando valor padr\xE3o inseguro.");
    return "default-insecure-secret-change-me";
  }
  return secret;
}
function createToken(payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
  return `${data}.${sig}`;
}
function verifyToken(token) {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return null;
    const expected = crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
    const sigBuf = Buffer.from(sig, "base64url");
    const expectedBuf = Buffer.from(expected, "base64url");
    if (sigBuf.length !== expectedBuf.length) return null;
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return null;
    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    if (typeof payload["exp"] === "number" && Date.now() / 1e3 > payload["exp"]) return null;
    return payload;
  } catch {
    return null;
  }
}
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token n\xE3o fornecido." });
    return;
  }
  const token = authHeader.slice(7);
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: "Token inv\xE1lido ou expirado." });
    return;
  }
  next();
}
function readContent() {
  if (!fs.existsSync(CONTENT_PATH)) {
    console.warn("[admin] content.json n\xE3o encontrado em", CONTENT_PATH);
    return {};
  }
  const raw = fs.readFileSync(CONTENT_PATH, "utf-8");
  return JSON.parse(raw);
}
function writeContent(data) {
  const tmp = CONTENT_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tmp, CONTENT_PATH);
}
function validateContent(data) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) return false;
  const required = ["instituto", "numerosImpacto", "diretoria", "eventosAnuais", "projetos"];
  return required.every((k) => k in data);
}
function sanitizeString(value, maxLen = 5e6) {
  if (typeof value !== "string") return "";
  return value.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").slice(0, maxLen).trim();
}
function sanitizeContent(data) {
  return JSON.parse(
    JSON.stringify(data, (_key, value) => {
      if (typeof value === "string") return sanitizeString(value);
      return value;
    })
  );
}
function readPosts() {
  if (!fs.existsSync(POSTS_PATH)) {
    console.warn("[admin] posts.json n\xE3o encontrado em", POSTS_PATH);
    return [];
  }
  try {
    const raw = fs.readFileSync(POSTS_PATH, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("[admin] Erro ao ler posts.json:", err);
    return [];
  }
}
function writePosts(data) {
  const tmp = POSTS_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf-8");
  fs.renameSync(tmp, POSTS_PATH);
}
function validatePosts(data) {
  if (!Array.isArray(data)) return false;
  const required = ["id", "slug", "titulo", "conteudo"];
  return data.every(
    (p) => typeof p === "object" && p !== null && required.every((k) => k in p)
  );
}
function sanitizePosts(data) {
  return JSON.parse(
    JSON.stringify(data, (_key, value) => {
      if (typeof value === "string") return sanitizeString(value);
      return value;
    })
  );
}
router.post("/login", (req, res) => {
  const { password } = req.body;
  if (!password || typeof password !== "string") {
    res.status(400).json({ error: "Senha n\xE3o fornecida." });
    return;
  }
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("[admin] ADMIN_PASSWORD n\xE3o definido no ambiente!");
    res.status(500).json({ error: "Servidor mal configurado." });
    return;
  }
  const maxLen = Math.max(password.length, adminPassword.length);
  const inputBuf = Buffer.from(password.padEnd(maxLen));
  const expectedBuf = Buffer.from(adminPassword.padEnd(maxLen));
  let match = false;
  try {
    match = crypto.timingSafeEqual(inputBuf, expectedBuf) && password.length === adminPassword.length;
  } catch {
    match = false;
  }
  if (!match) {
    setTimeout(() => res.status(401).json({ error: "Senha incorreta." }), 500);
    return;
  }
  const token = createToken({ role: "admin", exp: Math.floor(Date.now() / 1e3) + 8 * 60 * 60 });
  res.json({ token });
});
router.get("/content", (_req, res) => {
  try {
    const content = readContent();
    res.json(content);
  } catch (err) {
    console.error("[admin] Erro ao ler content.json:", err);
    res.status(500).json({ error: "Erro ao carregar conte\xFAdo." });
  }
});
router.post("/content", requireAuth, (req, res) => {
  const body = req.body;
  if (!validateContent(body)) {
    res.status(400).json({ error: "Estrutura de dados inv\xE1lida. Verifique os campos obrigat\xF3rios." });
    return;
  }
  try {
    const sanitized = sanitizeContent(body);
    writeContent(sanitized);
    res.json({ ok: true, message: "Conte\xFAdo salvo com sucesso!" });
  } catch (err) {
    console.error("[admin] Erro ao salvar content.json:", err);
    res.status(500).json({ error: "Erro ao salvar conte\xFAdo." });
  }
});
router.get("/posts", (_req, res) => {
  try {
    const posts = readPosts();
    res.json(posts);
  } catch (err) {
    console.error("[admin] Erro ao listar posts:", err);
    res.status(500).json({ error: "Erro ao carregar posts." });
  }
});
router.post("/posts", requireAuth, (req, res) => {
  const body = req.body;
  if (!validatePosts(body)) {
    res.status(400).json({ error: "Estrutura de dados inv\xE1lida. Cada post precisa de id, slug, titulo e conteudo." });
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
var admin_default = router;

// server/index.ts
var __filename = fileURLToPath2(import.meta.url);
var __dirname2 = path2.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "20mb" }));
  app.use("/api", admin_default);
  if (process.env.NODE_ENV === "production") {
    const staticPath = path2.resolve(__dirname2, "public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path2.join(staticPath, "index.html"));
    });
  }
  const port = Number(process.env.PORT || 5e3);
  server.listen(port, () => {
    console.log(`[server] API rodando em http://localhost:${port}/`);
    console.log(`[server] Painel admin: http://localhost:3000/admin (via Vite proxy)`);
  });
}
startServer().catch(console.error);

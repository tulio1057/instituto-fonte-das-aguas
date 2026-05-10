import express from "express";
import { createServer } from "http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import adminRouter from "./admin.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies (obrigatório para as rotas de admin)
  app.use(express.json({ limit: "20mb" }));

  // Rotas da API de admin
  app.use("/api", adminRouter);

  // Em produção: serve o build do Vite
  if (process.env.NODE_ENV === "production") {
    const staticPath = path.resolve(__dirname, "public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  }

  const port = Number(process.env.PORT || 5000);

  server.listen(port, () => {
    console.log(`[server] API rodando em http://localhost:${port}/`);
    console.log(`[server] Painel admin: http://localhost:3000/admin (via Vite proxy)`);
  });
}

startServer().catch(console.error);

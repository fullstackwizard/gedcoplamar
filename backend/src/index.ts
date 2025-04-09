import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config(); // Carrega as variáveis do .env

const app = express();
app.use(cors()); // Permite conexões de outros domínios
app.use(express.json()); // Permite receber JSON nas requisições

app.use("/api", routes); // Todas as rotas começam com /api

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./database/data-source";
import authRoutes from "./routes/authRoutes";

dotenv.config(); // Carrega as variáveis do .env

const app = express();
app.use(cors()); // Permite conexões de outros domínios
app.use(express.json()); // Permite receber JSON nas requisições

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado ✅");
    app.use("/api/auth", authRoutes);

    app.listen(5000, () => {
      console.log("Servidor rodando na porta 5000 🚀");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco", err);
  });

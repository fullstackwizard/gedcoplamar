# 📂 GEDCoplamar

Sistema simples de gerenciamento eletrônico de documentos (GED), desenvolvido para uso interno da Coplamar.

---

## 🚀 Stack Utilizada

- **Frontend:** Next.js (React + TypeScript)
- **Backend:** Node.js + Express + TypeScript
- **Banco de Dados:** MySQL
- **ORM:** Prisma (futuramente)
- **Autenticação:** JWT (futuramente)
- **Gerenciamento de Estado:** Redux Toolkit ou Context API
- **Ambiente:** Docker + Docker Compose
- **Versionamento:** Git + GitHub

---

## 🧪 Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## 🛠️ Como rodar o projeto com Docker

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/gedcoplamar.git
cd gedcoplamar

cp backend/.env.example backend/.env

docker-compose up --build
Esse comando vai iniciar:
Backend em http://localhost:3001
Banco de dados MySQL na porta 3306



gedcoplamar/
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── .env / .env.example
├── frontend/ (em breve)
├── docker-compose.yml
└── README.md

npm run dev     # roda o servidor com ts-node-dev

👨‍💻 Autor
Desenvolvido por Flávio Ribeiro
```

---

docker compose run backend npm install dotenv
docker compose exec backend npm install cors
dentro do cd Backend

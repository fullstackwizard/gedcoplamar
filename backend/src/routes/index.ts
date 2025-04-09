import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API GEDCoplamar rodando teste! 🧾" });
});

export default router;

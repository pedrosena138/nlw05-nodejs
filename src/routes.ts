import { Router } from "express";

const router = Router();
router.get("/online", (req, res) => {
  const date = new Date();
  return res.status(200).json(date);
});

export default router;

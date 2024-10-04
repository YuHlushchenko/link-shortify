// src/routes/userRoutes.ts
import { Router } from "express";
import User from "../models/User";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "Користувача створено" });
  } catch (error) {
    res.status(500).json({ error: "Помилка створення користувача" });
  }
});

export default router;

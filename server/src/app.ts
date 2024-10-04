// src/app.ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Підключення до MongoDB
mongoose
  .connect(process.env.MONGO_URI || "", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Підключено до MongoDB");
  })
  .catch((error) => {
    console.error("Помилка підключення до MongoDB:", error);
  });

// Middleware для обробки JSON
app.use(express.json());
app.use("/api/users", userRoutes);

// Прості маршрути
app.get("/", (req, res) => {
  res.send("Сервер працює!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});

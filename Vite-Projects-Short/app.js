import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend API!" });
});


export default app;
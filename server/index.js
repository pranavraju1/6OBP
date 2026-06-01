import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import todoRoutes from "./routes/todo.js"



const app = express();


// middleware

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173"
    })
)



app.use("/api/todos", todoRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));




app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

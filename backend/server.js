import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

import taskRoute from "./routes/task.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoute);

// Connect to DB

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT | 9001;

app.get("/", (req, res) => {
  res.send("Hello this is the home page of the server.");
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}.`);
});

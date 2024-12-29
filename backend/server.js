const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // for parsing json request

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to MONGO Database."))
  .catch((error) => {
    console.log(error);
  });

const Task = mongoose.model("Task", {
  title: String,
  description: String,
});

const PORT = process.env.PORT || 8888;

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Post new task
app.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  await newTask.save();
  res.json(newTask);
});

// Update a task

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updateTask = await Task.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  res.json(updateTask);
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: "Deleted." });
});

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}.`);
});

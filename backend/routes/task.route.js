import express from "express";
import Tasks from "../models/task.model.js";
import Router from "express";

// Create a new task
Router.post("/", async (req, res) => {
  try {
    const newTask = new Tasks(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all tasks
Router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a task
Router.put("/:id", async (req, res) => {
  try {
    const updateTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Task
Router.delete("/:id", async (req, res) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default Router;

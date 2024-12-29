import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  // Fetch task from backend

  useEffect(() => {
    axios
      .get("http://localhost:8888/tasks")
      .then((response) => {
        response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Add new task to the tasks list
  const addTask = async (title, description) => {
    const response = await axios.post("http://localhost:8888/tasks", {
      title,
      description,
    });
    setTasks([...tasks, response.data]);
  };

  // Delete a task from the list
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8888/tasks/:${id}`);
    setTasks(
      tasks.filter((task) => {
        task.id !== id;
      })
    );
  };

  // Start editing a task by setting its ID
  const startEditingTask = (id) => {
    setEditTaskId(id);
  };

  // Update a task's title and description
  const updateTask = async (id, title, description) => {
    const response = await axios.put(`http://localhost:8888/tasks/${id}`, {
      title,
      description,
    });
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null); // Reset edit mode after updating
  };

  // Find the task to edit based on its ID
  const taskToEdit = tasks.find((task) => task.id === editTaskId);
  return (
    <>
      <TaskForm addTask={addTask} task={taskToEdit} updateTask={updateTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        startEditingTask={startEditingTask}
      />
    </>
  );
};

export default App;

import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;

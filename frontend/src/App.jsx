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

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;

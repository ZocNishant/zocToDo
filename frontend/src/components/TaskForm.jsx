import { useState, useEffect } from "react";

const TaskForm = ({ addTask, task, updateTask }) => {
  // Track the state for form data
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  // Track the form data to handle changes
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // When a task is passed (editing mode), fill the form fields with task data
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    // If task exists (editing mode), update it
    if (task) {
      updateTask(task.id, title, description);
    } else {
      addTask(title, description);
    }

    if (!title || !description) {
      alert("Both title and description should be providied.");
    }
    // Reset form data after submission
    setTitle("");
    setDescription("");
    setFormData({ title: "", description: "" });
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {task ? "Edit Task" : "Add Task"}
      </h2>
      <form onSubmit={handleSubmission}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Title of the Task:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Task Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {task ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;

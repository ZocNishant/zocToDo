import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    addTask(formData.title, formData.description);

    // Check if both fields are filled
    if (!formData.title || !formData.description) {
      alert("Both title and Description should be entered.");
      return;
    }

    // Reset form data after submission
    setFormData({ title: "", description: "" });
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Todos</h2>
      <form onSubmit={handleSubmission}>
        {/* Title input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Title of the Task:
          </label>
          <input
            value={formData.title}
            onChange={handleChange}
            name="title"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        {/* Description textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Task Description:
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            rows="4"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;

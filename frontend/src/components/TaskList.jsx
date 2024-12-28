const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-center mb-4">Task List</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
            <h4 className="font-semibold text-lg">{task.title}</h4>
            <p>{task.description}</p>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

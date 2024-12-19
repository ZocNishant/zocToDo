import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;

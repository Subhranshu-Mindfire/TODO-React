import { useState } from "react";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddClick = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isEditing: false,
    };
    addTask(newTask);
    setTaskName('');
  };

  return (
    <div className="d-flex gap-3">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
        className="form-control"
      />
      <button onClick={handleAddClick} className="btn btn-primary">Add</button>
    </div>
  );
}
export default AddTask

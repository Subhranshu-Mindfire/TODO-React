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
    <div className="d-flex gap-3 w-25">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
        className="form-control fs-3 px-3"
      />
      <button onClick={handleAddClick} className="btn btn-primary px-3 py-2 fs-4">Add</button>
    </div>
  );
}
export default AddTask

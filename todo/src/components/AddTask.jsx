import { useState } from "react";
import { toast } from 'react-toastify';
function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddClick = () => {
    if (taskName.length == 0) {
      console.log("Hii")
      toast.error('Task Can Not Be Empty', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
    }
    else{
      const newTask = {
        id: Date.now(),
        name: taskName,
        isEditing: false,
      };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <div className="d-flex gap-3 w-25">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task"
        className="form-control fs-4 px-3"
      />
      <button onClick={handleAddClick} className="btn btn-lg btn-primary px-3">Add</button>
    </div>
  );
}
export default AddTask

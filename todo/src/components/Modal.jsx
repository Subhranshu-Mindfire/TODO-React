import React, { useState } from 'react';
import "./modal.css"

function Modal({ task, closeModal, saveEdit, cancelEdit }) {
  const [taskName, setTaskName] = useState(task.name);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };


  const handleSaveClick = () => {
    if (taskName.trim()) {
      saveEdit(task.id, taskName);
      closeModal();
    }
  };

  const handleCancelClick = () => {
    cancelEdit();
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content w-25">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={handleInputChange}
          placeholder="Enter new task name"
          className='form-control mt-4'

        />
        <div className="d-flex justify-content-end mt-3 gap-2">
          <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
          <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

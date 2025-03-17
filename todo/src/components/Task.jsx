import React, { useState } from 'react';
import Modal from './Modal';
function Task({ task, editTask, deleteTask, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);


  const handleToggleCompletion = () => {
    toggleCompletion(task.id);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (id, newName) => {
    const updatedTask = { ...task, name: newName };
    editTask(id, updatedTask);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className='d-flex justify-content-center'>
      {isEditing && (
        <Modal
          task={task}
          closeModal={handleCloseModal}
          saveEdit={handleSaveEdit}
          cancelEdit={handleCancelEdit}
        />
      )}

      <div className='row align-items-center w-25'>
        
        <div className="fs-2 col-md-6"
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'gray' : 'black',
          }}>
          {task.name}
        </div>
        <div onClick={handleToggleCompletion} className="fs-3 col-md-2">
          {task.completed ? <i className="fa-solid fa-circle-check" style={{ color: "greenyellow" }}></i> : <i className="fa-solid fa-circle-check" style={{ color: "gray" }}></i>}
        </div>
        <div onClick={handleEditClick} className='btn border-0 fs-3 col-md-2'><i className="fa-solid fa-pen" style={{ color: " #FFD43B" }}></i></div>
        <div onClick={handleDeleteClick} className='btn border-0 fs-3 col-md-2'> <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i></div>
      </div>
    </div>
  );
}

export default Task;

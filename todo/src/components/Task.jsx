import React, { useState } from 'react';
function Task({ task, editTask, deleteTask, toggleCompletion,setTasks }) {
  const [newName, setNewName] = useState(task.name);

  const handleToggleCompletion = () => {
    toggleCompletion(task.id);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleEditClick = (id) => {
    const updatedTask = { ...task, name: newName, isEditing: false };
    editTask(id, updatedTask);
  };

  const handleToggleEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? {...task, isEditing: !task.isEditing} : task))
    );
  };

  return (
    <div className='d-flex justify-content-center'>
      {task.isEditing ?
        <div className='d-flex align-items-center w-50 bg-light shadow p-2 rounded-3 mt-3 g-3'>
          <div className="fs-2 w-100">
            <input type="text" className="form-control fs-2" value={newName}
            onChange={(e)=> setNewName(e.target.value) }
          placeholder="Enter new task name" />
          </div>
          <div onClick={()=>handleEditClick(task.id)} className='btn btn-lg btn-outline-primary mx-2'>Save</div>
          <div onClick={(e)=>handleToggleEdit(task.id)} className=' btn btn-lg btn-outline-secondary text-center'> Cancel</div>
        </div> :
        <div className='row align-items-center w-50 bg-light shadow p-2 rounded-3 mt-3 px-3'>
          <div className="fs-2 col-md-9"
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black',
            }}>
            {task.name}
          </div>

          <div onClick={handleToggleCompletion} className="btn fs-3 col-md-1">
            {task.completed ? <i className="fa-solid fa-circle-check" style={{ color: "greenyellow" }}></i> : <i className="fa-solid fa-circle-check" style={{ color: "gray" }}></i>}
          </div>
          <div onClick={(e)=>handleToggleEdit(task.id)} className='btn border-0 fs-3 col-md-1'><i className="fa-solid fa-pen" style={{ color: " #FFD43B" }}></i></div>
          <div onClick={handleDeleteClick} className='btn border-0 fs-3 col-md-1'> <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i></div>
        </div>
      }
    </div>
  );
}

export default Task;

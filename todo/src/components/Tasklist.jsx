import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { ToastContainer, toast } from 'react-toastify';


function Tasklist() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    toast.success('Task Added Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success('Task Deleted Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };

  const editTask = (id, updatedTask) => {
    console.log(id, updatedTask)
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
    toast.success('Task Edited Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  };

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <h1 className='mt-5 pt-5 text-center'>Todo List</h1>
        <div className='d-flex justify-content-center fs-4 mt-5'>
          <AddTask addTask={addTask}/>
        </div>
        <div className='mt-5'>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleCompletion={toggleCompletion}
              setTasks={setTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasklist;

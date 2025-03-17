import Tasklist from "./components/Tasklist";
import { ToastContainer } from 'react-toastify';


import React from 'react'

const App = () => {
  return (
    <>
      <ToastContainer/>
      <Tasklist></Tasklist>
    </>
  )
}

export default App
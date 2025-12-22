import React from 'react'
import Register from './Register' 
import Login from './Login';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
  

      <Routes> 

<Route path="/" element={<Register />} />

<Route path='/login' element={<Login/>}/>

<Route path="/register" element={<Register />} />


      </Routes>


   


    </div>
  )
}

export default App 
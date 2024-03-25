import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assests/scss/app.scss";
import Register from './component/userRole/Register';
import Login from './component/userRole/Login';
import AdminPanel from './component/Admin/AdminPanel';




function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Register />} />
    <Route path='/admin' element={<AdminPanel />} />
    <Route path='/login' element={<Login />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App


import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from '../Dashboard/Dashboard';
// import Read from '../CurdOperation/ReadData';

function AdminPanel() {
  const [show , setShow] = useState(true);

  return (
    <>
    <Header setShow = {setShow}/>
    <div className='panel_container'>
    {<Sidebar show = {show}/>}     
    <div className='admin_content'>
    <Dashboard />
    </div>
    </div>
    </>
  )
}

export default AdminPanel
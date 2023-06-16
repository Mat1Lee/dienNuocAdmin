import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Setting() {
  return (
    <div className='setting'>
      <Sidebar/>
      <div className="settingContainer">
        <Navbar/>
        
      </div>
    </div>
  )
}

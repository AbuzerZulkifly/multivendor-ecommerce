import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeaderPanel from './AdminHeaderPanel.jsx'
import AdminSideMenu from './AdminSideMenu.jsx'

const AdminAreaLayout = () => {

  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='flex min-h-screen w-full'>
      {/* Sidemenu */}
      <AdminSideMenu  open={openSideBar} setOpen={setOpenSideBar} />
      <div className="flex flex-1 flex-col">
        {/* admin Header */}
        <AdminHeaderPanel setOpen={setOpenSideBar}/>
        <main className='flex-1 flex bg-gray-400 p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminAreaLayout
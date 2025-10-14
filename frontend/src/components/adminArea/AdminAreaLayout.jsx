import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeaderPanel from './AdminHeaderPanel.jsx'
import AdminSideMenu from './AdminSideMenu.jsx'

const AdminAreaLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
      {/* Sidemenu */}
      <AdminSideMenu />
      <div className="flex flex-1 flex-col">
        {/* admin Header */}
        <AdminHeaderPanel />
        <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminAreaLayout
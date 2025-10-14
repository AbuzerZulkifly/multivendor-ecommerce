import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingAreaHeader from './ShoppingAreaHeader.jsx'


const ShoppingAreaLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden min-h-screen'>
      {/* common header */}
      <ShoppingAreaHeader />
      <main className="flex flex-col w-full">
          <Outlet />
      </main>
    </div>
  )
}

export default ShoppingAreaLayout
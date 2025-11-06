import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingAreaHeader from './ShoppingAreaHeader.jsx'
import ShoppingAreaSideMenu from './ShoppingAreaSideMenu.jsx'


const ShoppingAreaLayout = () => {
  return (
    <div className='flex flex-col overflow-hidden h-screen bg-gray-300'>
      {/* <ShoppingAreaSideMenu /> */}
      {/* common header */}
      <ShoppingAreaHeader />
      <main className="flex flex-col w-full">
          <Outlet />
      </main>
    </div>
  )
}

export default ShoppingAreaLayout
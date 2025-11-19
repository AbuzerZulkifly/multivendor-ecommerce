import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {ShoppingAreaHeader} from './ShoppingAreaHeader.jsx'
import ShoppingAreaFooter from './ShoppingAreaFooter.jsx'


const ShoppingAreaLayout = () => {
  
  return (
    <div className='flex flex-col min-h-screen bg-gray-300'>
      {/* <ShoppingAreaSideMenu /> */}
      {/* common header */}
      <div>
      <ShoppingAreaHeader />
      </div>
      
      <main className="flex-1 overflow-auto w-full">
          <Outlet />
      </main>
      {/* always render footer */}
      <div className='md:hidden'>
        <ShoppingAreaFooter />
      </div>
      
    </div>
  )
}

export default ShoppingAreaLayout
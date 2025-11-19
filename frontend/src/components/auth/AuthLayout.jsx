import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LuShoppingBasket } from 'react-icons/lu'
import Login from '@/pages/auth/Login.jsx'
const AuthLayout = ({shopName}) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      
      <div >
        <div className='mb-6 flex justify-center'>
          <h1 className='md:text-3xl text-2xl font-semibold flex gap-2'>
            Welcome to <span className='text-green-500 flex'>{shopName}
              <LuShoppingBasket color='blue' />
              </span>  
          </h1>
        </div>
      
    
      <div className='border-2 border-green-400 rounded-xl md:p-4 p-2'>
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default AuthLayout
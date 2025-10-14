import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const AuthLayout = ({shopName}) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      
      <div >
        <div className='mb-6'>
          <h1 className='md:text-4xl text-2xl font-semibold'>Welcome to <span className='text-green-500'>{shopName}</span> </h1>
        </div>
      
    
      <div className='border-2 border-green-400 rounded-xl md:p-4 p-2'>
        <Outlet />
      </div>
    </div>
    </div>
  )
}

export default AuthLayout
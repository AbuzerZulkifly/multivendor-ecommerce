import React from 'react'
import { LucideMenu, LucideLogOut } from 'lucide-react' 


const AdminHeaderPanel = ({setOpen}) => {
  return (
    <header className='flex items-center bg-blue-200 justify-between xxsm:py-4.5 xxsm:px-3 md:px-5 md:py-6'>
      <button onClick={()=> setOpen(true)} className="lg:hidden xxsm:block">
        <LucideMenu />
        <span className="sr-only">Toggle Menu</span>
      </button>

      <div className='flex flex-1 justify-end'>
          <LucideLogOut
            className='text-gray-500 hover:text-red-400 cursor-pointer' 
            
          />
      </div>
    </header>
  )
}

export default AdminHeaderPanel
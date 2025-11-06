import React, { use } from 'react'
import { LucideMenu, LucideLogOut } from 'lucide-react' 
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/store/authSlice.js'
import toast from 'react-hot-toast'

const AdminHeaderPanel = ({setOpen}) => {
  
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser()).then((data) => {
      if(data?.payload?.success){
        toast.success(data?.payload?.message)
      }
    })
  }

  return (
    <header className='flex items-center bg-gray-300 justify-between xxsm:py-4.5 xxsm:px-3 md:px-5 md:py-6'>
      <button onClick={()=> setOpen(true)} className="lg:hidden xxsm:block">
        <LucideMenu />
        <span className="sr-only">Toggle Menu</span>
      </button>

      <div className='flex flex-1 justify-end'>
          <button
            onClick={handleLogout}
          >
          <LucideLogOut
            className='text-gray-500 hover:text-red-400 cursor-pointer' 
            
          />
          </button>
      </div>
    </header>
  )
}

export default AdminHeaderPanel
import React, {Fragment} from 'react'
import { ChartNoAxesCombinedIcon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { adminSideMenuItems } from '@/config/index.js'
import { cn } from '@/lib/utils.js'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { current } from '@reduxjs/toolkit'

const AdminSideMenu = ({ open, setOpen}) => {

  const currentPageLocation = useLocation();
  const navigate = useNavigate();

  const handleRouteOnCLick = (route) => {
    navigate(route)
  }

  const SideMenuItems = ({setOpen}) => {
    return (
      <div className='flex flex-col gap-10 '>
          {
            adminSideMenuItems.map((items) => (
              <button 
               key={items.id}
               setOpen={setOpen} 
               onClick={()=> {
                handleRouteOnCLick(items.path)
                setOpen ? setOpen(false) : null
              }
                
               }
               className={cn(
                'flex items-center md:text-2xl text-xl lg:font-semibold gap-3 border-b w-full',
                `${currentPageLocation.pathname.includes(items.path) ? "text-blue-500" : "hover:text-green-500" }`
                )}>
               <items.icon /> <span>{items.title}</span>
              </button>
            ))
          }
        </div>
    )
  }

  return (
    <Fragment>
      <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen} >
            <SheetContent side='left' className={`w-64`}>
              <div className="flex flex-col h-full bg-blue-100">
                <SheetHeader className={" bg-black"}>
                  <SheetTitle>
                    <div className="flex text-center cursor-pointer gap-10 text-xl items-center font-semibold">
                    <ChartNoAxesCombinedIcon/>
                    <h1 className='text-white'>Admin Panel</h1>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full px-3.5 mt-10">
                <SideMenuItems />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      <aside className=' w-46 bg-gray-300 sticky top-[64px] hidden lg:block'>
        <div onClick={()=> navigate('/admin/dashboard')} className="flex px-6 py-5.5 cursor-pointer justify-center  gap-3 text-xl md:text-2xl font-semibold">
          <h1 className=''>Admin Panel</h1>
        </div>
      <div className='mt-10 px-6'>
        <SideMenuItems />
      </div>
      </aside>
    </Fragment>
  )
}

export default AdminSideMenu
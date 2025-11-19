import React from 'react'
import {LucideMenu, } from 'lucide-react'
import { LuShoppingCart, LuSearch, LuShoppingBasket, LuLogOut, LuUser } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button.jsx'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Input } from '../ui/input.jsx'
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from '../ui/sheet.jsx'
import { useSelector } from 'react-redux'

import { logoutUser } from '@/store/authSlice.js'
import { useDispatch } from 'react-redux'

export const HeaderRightSideContent = () => {
  

  const {isAuthenticated, user} = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogoutUser = () => {
        dispatch(logoutUser()).then((data) => {
      if(data?.payload?.success){
        toast.success(data?.payload?.message)
      }
    })
  }
    return (
          <div className='flex items-center md:gap-8 md:pe-5 justify-between md:pt-0 pt-1.5  '>
            <button className='text-4xl text-green-500 hover:scale-[1.1] transition-all duration-300'>
              <LuShoppingCart />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback><span className='capitalize font-semibold'>{user?.username[0]}</span></AvatarFallback>
               </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {user?.username}
                  
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={()=> navigate('/shop/account')}
                >
                  <LuUser /> View Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                onClick={handleLogoutUser}
                >
                  <button >
                    <LuLogOut /> 
                  </button>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
    )
  }
  
export const ShoppingAreaHeader = () => {


  return (
    <header className='sticky z-40 w-full bg-blue-200 md:py-3.5 md:px-4 py-2'>
      
      <div className='flex md:flex-row xxsm:flex-col h-20 items-center md:justify-between  px-4 md:px-6'>
      
      <div className='flex items-center xxsm:mb-2 justify-between'>
        <Link to={'/shop/home'} className='flex items-center justify-center'>
          <h1 className='flex items-center hover:scale-[1.05] transition-all duration-300'>
          <span className='md:text-2xl lg:text-4xl xxsm:text-xl font-bold text-blue-500'>Door</span>
          <span className='md:text-xl lg:text-3xl xxsm:text-lg font-extrabold text-green-500'>Step </span>
          <LuShoppingBasket className='md:text-2xl lg:text-4xl text-blue-500 xxsm:text-2xl' />
          </h1>
        </Link>

      </div>

        <div className='xxsm:w-full md:w-1/2 relative'>
          <Input type="text" placeholder="Search products..." className=" bg-white" />
           <button className='absolute top-1.5 right-1  text-2xl'>
            <LuSearch />
           </button>            
        </div>

        <div>
        {
         <div className='hidden md:block'>
          <HeaderRightSideContent />
         </div> 
        }
        </div>
      </div>
    </header>
  )
}

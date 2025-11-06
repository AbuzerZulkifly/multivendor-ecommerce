import React from 'react'

const ShoppingAreaSideMenu = () => {
  return (
    <div>
      <aside className=' w-54 bg-gray-300 sticky top-[64px] hidden lg:block'>
        <div onClick={()=> navigate('/admin/dashboard')} className="flex px-6 py-5.5 cursor-pointer justify-center  gap-3 text-xl md:text-2xl font-semibold">
          <h1 className=''></h1>
        </div>
      <div className='mt-10 px-6'>
        </div>
      </aside>
    </div>
  )
}

export default ShoppingAreaSideMenu
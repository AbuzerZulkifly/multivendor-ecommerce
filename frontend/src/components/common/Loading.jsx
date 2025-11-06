import React from 'react'

const Loading = () => {
  return (
    <div className=' min-h-screen flex flex-col gap-5 justify-center items-center px-1'>
      <span className='loader'></span>
      <p className='md:text-xl xxsm:text-sm text-red-500 font-semibold'>Loading Please Wait!</p>
    </div>
  )
}

export default Loading
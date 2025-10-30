import React from 'react'

const Loading = () => {
  return (
    <div className=' min-h-screen bg-green-300 flex flex-col gap-5 justify-center items-center'>
      <span className='loader'></span>
      <p className='text-xl text-red-500 font-semibold'>Please Check Your Internet Connection</p>
    </div>
  )
}

export default Loading
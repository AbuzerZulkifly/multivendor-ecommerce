import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginFormControl } from '@/config/index.js'
import Form from '@/components/common/Form.jsx'

const intitalValue = {
  email: "",
  password: ""
} 

const Login = () => {

  const [formData, setFormData] = useState(intitalValue)

  const onSubmit = () => {

  }

  return (
    <div className='mx-auto w-full max-w-md md:space-y-4 space-y-2'>
         <div className="text-center">
           <h1 className='text-2xl md:text-4xl font-semibold text-green-500 md:mb-8 mb-4'>Login</h1>
         </div>
         <Form 
           formControl={loginFormControl}
           buttonText={"Start Shopping"}
           formData={formData}
           setFormData={setFormData}
           onSubmit={onSubmit}
         />
           <p className='text-center'>
             Dont have an account? <a href="/auth/signup" className='text-blue-500 '>Create One Here</a>
           </p>

        <div  className="flex items-center md:gap-3 gap-1">
          <hr className=" w-full border-black " />
          <h1 className='text-xl'>OR</h1>
          <hr className=" w-full border-black" />
        </div>
       </div>
  )
}

export default Login
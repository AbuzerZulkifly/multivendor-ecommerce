import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupFormControl } from '@/config/index.js'
import Form from '@/components/common/Form.jsx'
import { useDispatch } from 'react-redux'
import { signupUser } from '@/store/authSlice.js'
import toast from 'react-hot-toast'

const intitalState = {
  username: '',
  email: '',
  password: '',
}

const Signup = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    
     dispatch(signupUser(formData)).then((data) => {          
     console.log(data);
     
        if(data?.payload?.success)
        { 
          navigate('/auth/login')
          toast.success(data?.payload?.message)
        } 
        
        else {
          toast.error(data?.payload?.message)
        }
    }
  )
  }

  const [formData, setFormData] = useState(intitalState)
  return (
    <div className='mx-auto w-full max-w-md md:space-y-4 space-y-2'>
      <div className="text-center">
        <h1 className='text-2xl md:text-4xl font-semibold text-green-500 md:mb-8 mb-4'>Create a New Account</h1>
      </div>
      <Form 
        formControl={signupFormControl}
        buttonText={"Create Your Account"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
        <p className='text-center'>
          Already have an account? <a href="/auth/login" className='text-blue-500 '>Login Here</a>
        </p>
    </div>
  )
}

export default Signup
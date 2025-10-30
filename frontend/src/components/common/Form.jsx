import React, { useState } from 'react'
import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx'
import { Textarea } from '../ui/textarea.jsx'
import { Button } from '../ui/button.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select.jsx'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const Form = ({formControl, formData, setFormData, onSubmit, buttonText}) => {

  // const value = formData[items.name] || ''
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-6'>
      {formControl.map((items)=> (
        <div className='flex flex-col gap-3' key={items.name}>
          <Label>
            {items.label}
          </Label>

          {
          items.componentType === "Input" && items.type === "password" && (
            <>
          <div className='relative'>
            <Input
              type={items.type === "password" ? showPassword ? 'text' : 'password' : items.type}
              name={items.name}
              className={`${items.type === "password" ? "": ""}`}
              placeholder={items.placeholder}
              required={items.required}
              value={formData[items.name] || ""}
              onChange={(e) => setFormData({
                ...formData,
                [items.name]: e.target.value
              })}
            />
              <button
              className='absolute right-1.5 top-2'
              >
              {showPassword ? (
                
                <FaRegEye 
                color='green'                
                  size={22}
                  onClick={()=> togglePasswordVisibility()}
                />
              ):
              (
                <FaRegEyeSlash
                 color='red' 
                size={22} 
                 onClick={()=> togglePasswordVisibility()}
                />
              )}
            </button>          
        <p className='text-blue-500 mt-1 text-right'><a href="">Forgot Password?</a></p>
          </div>

          </>
          )
        }
        {
        items.componentType === "Input" && items.type !== "password"   && (
          <div className='flex'>
            <Input
              autoCapitalize = {items.capitalise}
              type={items.type}
              name={items.name}
              placeholder={items.placeholder}
              required={items.required}
              value={formData[items.name] || ""}
              onChange={(e) => setFormData({
                ...formData,
                [items.name]: e.target.value
              })}
            /> 
            </div> 
        )}
          {
            items.componentType === "select" && (
           <div className='flex flex-row'>{
              <Input
                    type={items.type}
                    name={items.name}
                    placeholder={items.placeholder}
                    required={items.required}
                    value={formData[items.name] || ""}
                    onChange={(e) => setFormData({
                      ...formData,
                      [items.name]: e.target.value
                      })}
            />}
              </div>
            )
          }
          
          {
          items.componentType === "Textarea" &&(
            <Textarea
              name={items.name}
              placeholder={items.placeholder}
              required={items.required}
              id={items.id}
              value={formData[items.name] || ""}
              onChange={(e) => setFormData({
                ...formData,
                [items.name]: e.target.value
              })}
            />
          )
          }
          {items.componentType === "Select" &&(
            <div className='flex flex-row'>
            <Select
              onValueChange={(value) => setFormData({
                ...formData,
                [items.name]: value
              })} 
              value={formData[items.name] || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder={items.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {
                  items.options && 
                  items.options.length > 0 ?
                  items.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}

                    </SelectItem>
                  )): null
                }
              </SelectContent>
            </Select>
            </div>
          )
          }
        </div>
      ))}
      <Button type="submit">{buttonText || "Submit"}</Button>
      
    </form>
  )
}

export default Form
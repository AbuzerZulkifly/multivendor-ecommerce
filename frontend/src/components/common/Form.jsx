import React from 'react'
import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx'
import { Textarea } from '../ui/textarea.jsx'
import { Button } from '../ui/button.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select.jsx'

const Form = ({formControl, formData, setFormData, onSubmit, buttonText}) => {

  // const value = formData[items.name] || ''

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-3'>
      {formControl.map((items)=> (
        <div className='flex flex-col gap-5' key={items.name}>
          <Label>
            {items.label}
          </Label>
          {
          items.componentType === "Input" &&(
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
            />
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
          )
          }
        </div>
      ))}
      <Button type="submit">{buttonText || "Submit"}</Button>
    </form>
  )
}

export default Form
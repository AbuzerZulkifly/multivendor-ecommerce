import React, { useRef, useEffect, useState } from 'react'
import { Input } from '../ui/input.jsx'
import { UploadCloudIcon, FileIcon, XIcon } from 'lucide-react'
import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'


const ImageUpload = ({imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl, id ,src, onChange, width, height}) => {

  const inputRef = useRef(null)

  const handleImageFileChange = (event) => {
    console.log(event.target.files);
    const selectedImageFile = event.target.files?.[0]
    if (selectedImageFile) setImageFile(selectedImageFile)
    
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleOnDrop = (event) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0];

    if(droppedFile) setImageFile(droppedFile)
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    if(inputRef.current){
      inputRef.current.value = ""
    }
  }
     async function uploadImageToCloudinary(){

        const data = new FormData();
        data.append('my_file', imageFile)
        const response = await axios.post(API_PATHS.IMAGE.IMAGE_UPLOAD, data)
        console.log(response, 'response');

        if(response.data?.success){
           setUploadedImageUrl(response.data.results.url)            
          }
    }
          useEffect(()=> {
            if(imageFile !== null) uploadImageToCloudinary()
          }, [imageFile])

  return (
    <div className='w-full max-w-md mx-auto'>      
      <div className='' onDrag={handleDragOver} onDrop={handleOnDrop}>
       <div className='flex justify-center'>
        <Input
        hidden
        id={id}
        type="file"
        ref={inputRef}
        onChange={onChange}
        />
        {!imageFile ?
          <label className='flex border gap-3 justify-center items-center rounded py-5 cursor-pointer mb-2 px-4' htmlFor={id}>
              <UploadCloudIcon className='md:h-10 md:w-10 h-6 w-6 text-muted-foreground' />
          </label>
           : 
          
           <div className='flex flex-col items-center relative'>
            <div className=''>
            <img src={src}
            
            width={width} height={height} alt="" />
            </div>
            <XIcon 
              className='w-5 h-5 text-white bg-red-600 rounded-full absolute -right-2 -top-2'
              onClick={handleRemoveImage}
            />
            </div>
         
      }</div>
      </div>
    </div>
  )
}

export default ImageUpload
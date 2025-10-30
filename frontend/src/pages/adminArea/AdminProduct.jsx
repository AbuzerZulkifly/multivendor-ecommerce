import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import CreateModal from '@/components/common/CreateModal.jsx'
import { addNewProductFormElements, addNewBrandElements } from '@/config/index.js'
import AddProduct from '@/components/adminArea/AddProducts.jsx'
import Form from '@/components/common/Form.jsx'
import ImageUpload from '@/components/adminArea/ImageUpload.jsx'
import toast from 'react-hot-toast'
import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct, getAllProduct, addNewBrand } from '@/store/admin/index.js'
import {} from 'react-router-dom'

const intitalProductFormData = {
  image: { img1: null, img2: null, img3: null, img4: null },
  title: '',
  keyword: '',
  description: '',
  brand: '',
  category: '',
  price: '',
  discount_price: '',
  stock: '',
  minimum_purchase: '',
}

const initialBrandFormData = {
  brandImage: null,
  name: ""
}

const AdminProduct = () => {
    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [openAddBrandModal, setOpenAddBrandModal] = useState(false);

    const [formData, setFormData] = useState(intitalProductFormData)
    const [images, setImages] = useState({ img1: null, img2: null, img3: null, img4: null, img5:null })
    const [uploadedImageUrl, setUploadedImageUrl ] = useState({img1: '', img2: '', img3: '', img4: '', img5:''})    

    
    const [brandFormData, setBrandFormData] = useState(initialBrandFormData)
    const [brandImageFile, setBrandImageFile] = useState(null)
    const [uploadedBrandImageUrl, setUploadedBrandImageUrl ] = useState('')

    const [imageLoadingState, setImageLoadingState] = useState(false)

    const {productList} = useSelector(state=>state.adminProduct)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getAllProduct())
    }, [dispatch])

    const onSubmit = (e) => {

      e.preventDefault();
        const imageUrls = Object.values(uploadedImageUrl).filter(Boolean)
        const payload = {
            ...formData,
            image: imageUrls // backend should accept array of image urls
          }
      dispatch(addNewProduct(payload)).then((data)=>{
        console.log(data);
        if (images.img1 === null) {
            toast.error("Please upload the 1st image")
            return
        }
          if(data?.payload?.success){
            dispatch(getAllProduct())
            setImages({img1: null, img2: null, img3 :null, img4 :null, img5 :null,})
            setFormData(intitalProductFormData)
            toast.success(data?.payload?.message)
            setOpenAddProductModal(false)
          }
          else {
            toast.error("Failed to add Product")
          }
      })
      
    }

    const onSubmitBrand = (e) => {
      e.preventDefault()
      dispatch(addNewBrand({...brandFormData, image:uploadedBrandImageUrl})).then((data)=> {
        
        if(data?.payload?.success)
        { 
         
          toast.success(data?.payload?.message)
          setOpenAddBrandModal(false)
          setBrandImageFile(null)
          setBrandFormData(initialBrandFormData)
        } 
        
        else {
          if(brandFormData.name.length < 3) {
            toast.error("Brand Name must be at least 3 characters long")
            return
          }
          toast.error("This Brand Name already Exists")
        }
      })
}
    return (
    <Fragment>
        <div className='flex justify-end w-full gap-5'>
          <Button
            onClick={()=> setOpenAddProductModal(true)}
          >
            Add Product
          </Button>
          <CreateModal title={"Add New Product"} isOpen={openAddProductModal} onClose={()=> setOpenAddProductModal(false)}>
            
              <h1 className='mb-2'>Upload atleast one image (1st Image will be the displayed one) </h1>
            <div className='md:flex md:items-center mb-2 md:justify-center grid grid-cols-2 gap-4'>
        {Object.keys(images).map((key) => (
                
                <ImageUpload
                  key={key}
                  id={`images${key}`}
                  imageFile={images[key]}
                  setImageFile={(file) => setImages(prev => ({ ...prev, [key]: file }))}
                  uploadedImageUrl={uploadedImageUrl[key]} 
                  setUploadedImageUrl={(url) => setUploadedImageUrl(prev => ({ ...prev, [key]: url }))}
                  onChange={e => setImages(prev => ({ ...prev, [key]: e.target.files[0] }))}
                  src={images[key] ? URL.createObjectURL(images[key]) : null}
                  
                  width={110}
                  height={110}
                />
              ))}
              </div>
              <AddProduct 
                formControl={addNewProductFormElements}
                formData={formData}
                setFormData={setFormData}
                buttonText={"Add New Product"}
                onSubmit={onSubmit}
              />
          </CreateModal>


          <Button
          onClick={()=> setOpenAddBrandModal(true)}
          >Add Brand</Button>
          <CreateModal title={"Add New Brand"} isOpen={openAddBrandModal} onClose={()=> setOpenAddBrandModal(false)}>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col items-center '>
                
              </div>
                <ImageUpload 
                  id={`brandImage`}
                   imageFile={brandImageFile} 
                   setImageFile={setBrandImageFile} 
                   uploadedImageUrl={uploadedBrandImageUrl} 
                  setUploadedImageUrl={setUploadedBrandImageUrl}
                  src={brandImageFile ? URL.createObjectURL(brandImageFile) : null}
                  onChange={e => setBrandImageFile(e.target.files[0])}
                  width={350}
                  height={350}
                   />
              <Form 
              formControl={addNewBrandElements}
                formData={brandFormData}
                setFormData={setBrandFormData}
                buttonText={"Add New Brand"}
                onSubmit={onSubmitBrand}
              />
              </div>
          </CreateModal>
        </div>
    </Fragment>
  )
}

export default AdminProduct
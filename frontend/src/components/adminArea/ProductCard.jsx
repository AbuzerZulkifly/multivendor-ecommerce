import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils.js'
import { LucideEdit, LucideTrash, LucideTrash2 } from 'lucide-react'

const ProductCard = ({product, setFormData, setOpenAddProductModal, setCurrentEditedId, setUploadedImageUrl, setImages, handleDeleteProduct
}) => {
  return (
    <Card className={cn
      ('p-2 hover:scale-[1.03] hover:outline-8 hover:border-blue-400 transition-all duration-300',
        `${product?.stock < 1 ? "bg-red-300 border-0" : ""}`
      )
    }>
      <div className='flex flex-col justify-center capitalize'>
          <div className='flex items-center justify-between pointer mb-2'>
            <button
              onClick={()=> {
                console.log(product);
                
                setOpenAddProductModal(true)
                setCurrentEditedId(product._id)
                setFormData({
                  title: product.title,
                  brand: product.brand,
                  keyword: product.keyword,
                  condition: product.condition,
                  category: product.category,
                  price: product.price,
                  discount_price: product.discount_price || '',
                  stock: product.stock,
                  description: product.description,
                })
                              
                    setUploadedImageUrl({
                    img1: product.image[0] || '',
                    img2: product.image[1] || '',
                    img3: product.image[2] || '',
                    img4: product.image[3] || '',
                  });

                  // Clear image file objects
                  setImages({
                    img1:  null,
                    img2: null,
                    img3: null,
                    img4: null,
                });
              }}
            >
              <span><LucideEdit color='blue' /></span>
            </button>  
            
            <button
              onClick={()=> {
               let confirmation = window.confirm("Are you sure you want to delete this product?")
              
               if(confirmation){ 
               handleDeleteProduct(product._id)
              }
            
              
              }}
            >
              <span><LucideTrash2 color='red' /></span>
            </button>

          </div>
        <div className='flex justify-center items-center mb-2'>
          <span className='font-semibold text-xl'>{product?.brand}</span>
        </div>
        <img
        className='product-card-image mb-3'
        src={product? product?.image[0] || product?.image[1] || product?.image[2] || product?.image[3] || product?.image[4] : <LuImageOff /> } alt={product?.title} />
       
        <div className='font-semibold flex flex-col gap-3'>
          <p className=''>{product?.title} </p>          
          <div className='flex flex-col gap-1'>
            <div className="flex gap-2">
              <span>
                LKR {
                     product?.discount_price ? (product?.price - product?.discount_price) : product?.price
                    }/=
              </span>
              <span>
                  {
                product?.discount_price ?  (
                <p className='text-gray-500 flex gap-2 items-center'>
                  (<span className='line-through'>{product?.discount_price}</span>
                  <span>{(product?.discount_price / product?.price * 100).toFixed(2)}% Off</span>)                
                </p>
              ) : (<span className='text-gray-500'>No Discount</span>)
              }
              </span>
            </div>

            <div className='mt-2 flex justify-between'>
              <span>
              {
                product?.stock > 0 ? `In Stock: ${product?.stock}` : "Out of Stock"
              }
              </span>
              <span>
                {
                  product?.minimum_purchase > 0 ? `Min Purchase - ${product?.minimum_purchase}` : ""
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
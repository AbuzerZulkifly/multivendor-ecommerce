import React from 'react'
import { Card } from '../ui/card.jsx'
import { Button } from '../ui/button.jsx'

const ShoppingProductCard = ({product}) => {

  return (
    <Card className="w-full flex flex-col justify-between border-0 hover:scale-[1.02] p-0 pb-2 transition-all duration-300">
      
      <div className='relative'>
        <div className='absolute z-10 -top-3 -left-1.5   '>
          {product?.stock <= 10 ? 
          (<span className=' bg-red-300 px-1.5 py-0.5 rounded-sm font-medium'>
            {`Only ${product?.stock} Available`}
          </span>) : null}
        </div>
        {/* <div className='absolute z-10 -top-3 right-1'>
            {
              ((product?.discount_price / product?.price) * 100) >= 50 ?
              (
                <span className='bg-green-300 px-1.5 py-0.5 rounded-sm font-medium'>
                <span>{((product?.discount_price / product?.price) * 100).toFixed(2)}% Off</span>
                </span>
              ): null
            }
        </div> */}
        <img className='product-card-image' src={product?.image[0]} alt={product?.title} />
        <h1 className=' font-semibold text-center text-lg mt-1'>
          {product?.brand}
        </h1>
        <div className='mt-3.5 flex flex-col gap-1 px-2 text-sm'>
        <h1 className=' font-semibold'>
          <span>
            {product?.title}
          </span>  
          <span className='ps-1 capitalize text-gray-600'>
            ({product?.condition})
          </span>
        </h1>
        <h2>

        </h2>
        <h2>
          <span className='font-semibold'>Rs. </span>
          <span className='font-medium'>{(product?.price - product?.discount_price).toLocaleString('en-US')}/=
           <span className='text-gray-600'>{product?.minimum_purchase ? " Per Unit" : ""}</span> 
          </span>
          <span className='text-gray-600 font-medium ps-2'>{
            product?.discount_price ?
          `${((product?.discount_price / product?.price) * 100 ).toFixed(2)} % Off` : ""
          }</span>
        </h2>
      </div>
      </div>  
      <div className='flex justify-center mt-1 w-full px-2'>
        <Button className=' px-4 py-0.5 w-full font-medium rounded-sm'>
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

export default ShoppingProductCard
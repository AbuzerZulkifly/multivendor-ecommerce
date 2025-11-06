import React, { Fragment, use, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct,  getAllBrand} from '@/store/admin/index.js'
import ProductCard from '@/components/adminArea/ProductCard.jsx'

const ShoppingProductListing = () => {

  const dispatch = useDispatch()

  useEffect(()=> {
   dispatch(getAllProduct())
  }, [dispatch])
    const {productList} = useSelector(state=>state.adminProduct)
  
    return (
    <div>
              {
          productList && productList.length > 0 ? (
            <div className='mt-10 grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
              {productList.map((product)=> (
                <ProductCard
                  product={product}
                  
                 />
              ))}   
            </div>
          ) : (
            <h1 className='text-center mt-20 text-2xl'>No Products Added Yet</h1>
          )
        }
    </div>
  )
}

export default ShoppingProductListing
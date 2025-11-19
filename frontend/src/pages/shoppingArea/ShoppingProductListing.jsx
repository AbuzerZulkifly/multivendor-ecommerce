import React, { Fragment,  useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFilteredProducts } from '@/store/shopping/shoppingProductsSlice.js'
import ShoppingProductCard from '@/components/shoppingArea/ShoppingProductCard.jsx'
import FilterProductSection from '@/components/common/FilterProductSection.jsx'
import { shoppingFilterItems } from '@/config/index.js'
import { LuArrowRight } from 'react-icons/lu'
import { cn } from '@/lib/utils.js'

const ShoppingProductListing = () => {

  const dispatch = useDispatch()

  const [filter, setFilter] = useState({});
  const [sortByRatings, setSortByRatings] = useState(null);
  const [sortBySelling, setSortBySelling] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const [openFilterSection, setOpenFilterSection] = useState(false)
  
  const handleSortByRatings = (value) => {
    setSortByRatings(value);
    console.log(value);    
  }
  const handleSortBySelling = (value) => {
    setSortBySelling(value);
    console.log(value);    
  }
  const handleSortByPrice = (value) => {
    setSortByPrice(value);
    console.log(value);    
  }
  
  const handleFilter = (getSectionId, getCurrentOption) => {
    console.log(getSectionId, getCurrentOption);

       setFilter(prev => {
    const current = Array.isArray(prev[getSectionId]) ? [...prev[getSectionId]] : []
    const idx = current.indexOf(getCurrentOption)
    if (idx === -1) current.push(getCurrentOption)
    else current.splice(idx, 1)
    return { ...prev, [getSectionId]: current }
  })
  }
  console.log(filter);
  
  const FilterSection = () => {
    return (
      
        <div className=''>
          <button 
            onClick={()=>setOpenFilterSection(true)}
            className={`px-8 bg-green-100 rounded-r-lg ${openFilterSection ? "hidden" : "block"}
            font-semibold`}>
              <span className='flex items-center gap-2 py-1'>
                Filter & Sort by <LuArrowRight />
              </span>
            </button>
        <FilterProductSection
            sortByPrice={sortByPrice}
            handleSortByPrice={handleSortByPrice}

            sortByRatings={sortByRatings}
            handleSortByRatings={handleSortByRatings}

            sortBySelling={sortBySelling}
            handleSortBySelling={handleSortBySelling}
            onClose={() =>
              setOpenFilterSection(false)
            }
            isOpen={openFilterSection}
            formControl={shoppingFilterItems}
            
            handleFilter={handleFilter}
            filter={filter}
          />
        </div>

    )
  }
  
  const {productList, isLoading} = useSelector(state=>state.shoppingProduct)
  useEffect(()=> {
   dispatch(fetchAllFilteredProducts())
  }, [dispatch])
  
  
    return (
    <div className={`${openFilterSection ? "flex" : ""} pb-2`}>
      <FilterSection 
      />
   {
    isLoading ? 
    <div className="flex gap-3 justify-center items-center min-h-screen">
      <span className="loader"></span>
      <span>Loading Please Wait</span>
    </div> 
    :
    <div className={cn(
      `mt-5 px-2.5 grid gap-x-3 gap-y-6 grid-cols-2 ${openFilterSection ? "md:grid-cols-3  lg:grid-cols-5" : "md:grid-cols-4  lg:grid-cols-6"} `,
    )}>
      {
        productList.map((product) => (
          <ShoppingProductCard 
            product={product}
          />
        ))
      }
    </div>}
</div>
  )
}

export default ShoppingProductListing
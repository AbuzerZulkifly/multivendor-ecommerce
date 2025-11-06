import React, { useState } from 'react'
import FilterProductSection from '@/components/common/FilterProductSection.jsx'
import { shoppingFilterItems } from '@/config/index.js'
import { LuArrowRight } from 'react-icons/lu'
import Form from '@/components/common/Form.jsx'

const ShoppinHome = () => {

  const [openFilterSection, setOpenFilterSection] = useState(false)

  const handleFilterChange = (filterType, value) => {
    console.log("Filter Changed:", filterType, value);
    // Implement filter logic here
  }

  return (
    <div className='h-screen md:grid md:grid-cols-2'>
      {/* Filter Section */}
      <div className=''>
        <div className=''>
          <button 
            onClick={()=>setOpenFilterSection(true)}
            className={`px-8 bg-green-100 rounded-r-lg ${openFilterSection ? "hidden" : "block"}
            font-semibold`}>
              <span className='flex items-center gap-2 py-1'>
                Filter <LuArrowRight />
              </span>
            </button>
            ss
        </div>
          <FilterProductSection
            
            onClose={() =>
              setOpenFilterSection(false)
            }
            isOpen={openFilterSection}
            formControl={shoppingFilterItems}
          >
              <span>Price</span>
              <span>Rating</span>
              <span>Selling</span>
              <span>Brand</span>
              <span>Category</span>
              <span>Condition</span>
          </FilterProductSection>


      </div>

      {/* Products Section */}
      <div>
s
      </div>
    </div>
  )
}

export default ShoppinHome
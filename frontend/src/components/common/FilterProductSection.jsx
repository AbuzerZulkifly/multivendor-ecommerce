import React, {useState, useEffect} from 'react'
import { LuX } from 'react-icons/lu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.jsx";
import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'
import { shoppingFilterItems } from '@/config/index.js';
import { Label } from '../ui/label.jsx';
const FilterProductSection = ({
  isOpen, 
  onClose, }) => {
  if(!isOpen) return null

  const [brands, setBrands] = useState([])

  const getBrandNames = async() => {
    try {
      const respose = await axios.get(API_PATHS.ADMIN.BRAND.GET, {})
      
        setBrands(respose.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

   useEffect(() => {
    getBrandNames();
    return () => {}
  }, []);


  return (
  <aside className=' w-54 bg-gray-200 absolute md:top-23 top-27'>
    <div className='flex flex-col  py-1.5 gap-5'>
      <div>
        <h1 className='flex justify-end pe-2 text-xl'>
          <LuX
            className='hover:text-red-500 hover:cursor-pointer'
            onClick={onClose}
          />
        </h1>
        <h1 className='text-xl font-semibold ps-2'>Filter Out Products</h1>
      </div>
      <div className='flex flex-col gap-2'>
        {
          shoppingFilterItems.map((filter) => (
           <div className='flex flex-col gap-1.5 border-b py-2.5 ps-4 border-black'>
           <label className={""}>
              {filter.label}
           </label>
            <Select
              key={filter.name}
              onValueChange={() => { 
                filter.name 
              }}
              className="mb-3 border "
            >
            <SelectTrigger className="">
              <SelectValue placeholder={`Select ${filter.label}`} />
            </SelectTrigger>
            <SelectContent>
                {
                  filter.name !== "brand" ? (
                
                  filter.options && filter.options.length > 0 ? 
                    filter.options.map((options)=>( 
                    <SelectItem key={options.id} value={options.id}>        
                      {options.label}
                    </SelectItem>
                    ))
                   : null) :
                   (
                    brands && brands.length > 0 ? 
                    brands.map((brand)=> (
                      <SelectItem key={brand._id} value={brand._id}>        
                        {brand.name}
                      </SelectItem>
                    )) : null
                   )
                } 

            </SelectContent>
            </Select>
         </div> ))
        }
      </div>
    </div>
    </aside>
  )
}

export default FilterProductSection
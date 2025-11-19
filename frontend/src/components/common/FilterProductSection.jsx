import React, {useState, useEffect} from 'react'
import { LuX, LuArrowDown } from 'react-icons/lu'

import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'
import { shoppingFilterItems,shoppingSortOptions } from '@/config/index.js';
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button.jsx';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from '../ui/input.jsx';

const FilterProductSection = ({
  isOpen, 
  onClose,
  filter, handleFilter,
  sortByRatings, handleSortByRatings,
  sortBySelling, handleSortBySelling,
  sortByPrice, handleSortByPrice
}) => {
  if(!isOpen) return null

  const [brands, setBrands] = useState([])

  const getBrandNames = async() => {
    try {
      const respose = await axios.get(API_PATHS.ADMIN.BRAND.GET, {})
      
        setBrands(respose.data)
      
    } catch (error) {
      
    }
  }

   useEffect(() => {
    getBrandNames();
    return () => {}
  }, []);

  

  return (
  <aside className=' w-[190px] h-full bg-gray-200 xxsm:absolute xxsm:z-20 md:static md:100 md:top-26 top-24'>
    <div className='flex flex-col py-1.5 gap-5'>
      <div>
        <h1 className='flex justify-end pe-2 text-xl'>
          <LuX
            className='hover:text-red-500 hover:cursor-pointer'
            onClick={onClose}
          />
        </h1>
        <h1 className='text-xl font-semibold ps-2'>Filter Out Products</h1>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='ps-2'>Filter By</h1>
        {
          shoppingFilterItems.map((Items) => 
            <div className=' ps-3' key={Items.label}>
            <DropdownMenu className="border-b border-black">
              <DropdownMenuTrigger asChild>
                <button className='rounded-sm border border-black px-2    flex gap-1 items-center'>
                  <span>{Items.label}</span>
                  <span> <LuArrowDown /></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
              onSelect={(e) => e.preventDefault()}
              >
                {
                  Items.label !== "Brand" ?
                  Items.options.map((options) => (
                    <DropdownMenuItem
                     className='flex gap-3 items-center' key={options.id} 
                     onSelect={(e) => e.preventDefault()}     
                    
                    >
                       <Checkbox                  
                       value = {Items.id}
                       checked={filter[Items.label]?.includes(options.id)}
                       onCheckedChange={()=> handleFilter(Items.label, options.id)}
                       onClick={(e) => e.stopPropagation()}
                       className={"border-2 border-black"} 
               
                       />
                        {options.label}
                        
                    </DropdownMenuItem>
                  )): (
                    brands && brands.length > 0 ?
                    brands.map((brand)=> (
                      <DropdownMenuItem className='flex gap-3 items-center' key={brand._id} >
                      <Checkbox
                       checked={filter[Items.label]?.includes(brand._id)}
                       onCheckedChange={()=> handleFilter(Items.label, brand.name)}
                       onSelect={(e) => e.preventDefault()} 
                          className={"border-2 border-black"} /> {brand.name}
                      </DropdownMenuItem>
                    )) : null
                  )
                }
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          )
        }
          <hr />
        <h1 className='mb-2 ps-2'>Sort By</h1>
        {
           shoppingSortOptions.map((items) => (
             <div className='mb-3 ps-3'>
            <DropdownMenu key={items.label}>
              <DropdownMenuTrigger asChild>
                <button className='border border-black px-2 rounded-sm flex gap-1 items-center'>
                  <span>{items.label}</span>
                  <span> <LuArrowDown /></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>

              <DropdownMenuRadioGroup value={sortByRatings} onValueChange={handleSortByRatings}>
                { items.label === "Ratings" &&(
                items.options.map((options) => (
                  <DropdownMenuRadioItem value={options.id} key={options.id}>
                    {options.label}
                  </DropdownMenuRadioItem>
                )))
                }
              </DropdownMenuRadioGroup>

              <DropdownMenuRadioGroup value={sortBySelling} onValueChange={handleSortBySelling}>
                { items.label === "Selling" &&(
                items.options.map((options) => (
                  <DropdownMenuRadioItem value={options.id} key={options.id}>
                    {options.label}
                  </DropdownMenuRadioItem>
                )))
                }
              </DropdownMenuRadioGroup>

              <DropdownMenuRadioGroup value={sortByPrice} onValueChange={handleSortByPrice}>
                { items.label === "Price" &&(
                items.options.map((options) => (
                  <DropdownMenuRadioItem value={options.id} key={options.id}>
                    {options.label}
                  </DropdownMenuRadioItem>
                )))
                }
              </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
            
          ))
        }
      </div>
    </div>
    </aside>
  )
}

export default FilterProductSection


      // <div className='flex flex-col gap-2'>
      //   {
      //     shoppingFilterItems.map((filter) => (
      //      <div key={filter.name} className='ps-3 gap-1.5 border-b py-2  border-black'>
      //       {/* <Select
      //         key={filter.name}
      //         onValueChange={() => { 
      //           filter.name 
      //         }}
      //         className="mb-3 border "
      //       >
      //       <SelectTrigger className="">
      //         <SelectValue placeholder={`Select ${filter.label}`} />
      //       </SelectTrigger>
      //       <SelectContent>
      //           {
      //             filter.name !== "brand" ? (
                
      //             filter.options && filter.options.length > 0 ? 
      //               filter.options.map((options)=>( 
      //               <SelectItem key={options.id} value={options.id}>        
      //                 {options.label}
      //               </SelectItem>
      //               ))
      //              : null) :
      //              (
      //               brands && brands.length > 0 ? 
      //               brands.map((brand)=> (
      //                 <SelectItem key={brand._id} value={brand._id}>        
      //                   {brand.name}
      //                 </SelectItem>
      //               )) : null
      //              )
      //           } 

      //       </SelectContent>
      //       </Select> */}
      //       <DropdownMenu className='ps-7'>
      //         <DropdownMenuTrigger asChild>
      //           <button>
      //             {filter.label}
      //           </button>
      //         </DropdownMenuTrigger>
      //         {filter.name === "brand" || filter.name === "category" ?(
      //         <DropdownMenuContent className={""}>
      //           {
      //             filter.name !== "brand" ? (
                
      //             filter.options && filter.options.length > 0 ? 
      //               filter.options.map((options)=>( 
      //               <div key={options.id} >        
      //                 <Checkbox /> {options.label}
      //               </div>
      //               ))
      //              : null) :
      //              (
      //               brands && brands.length > 0 ? 
      //               brands.map((brand)=> (
      //                 <div className='' key={brand._id} value={brand._id}>        
      //                  <Checkbox />  {brand.name}
      //                 </div>
      //               )) : null
      //              )
      //           }
      //         </DropdownMenuContent>
      //         ) :
      //         (
                
      //         <DropdownMenuContent className={""}>
      //           {
                
      //             filter.options && filter.options.length > 0 ? 
      //               filter.options.map((options)=>( 
                        
      //               <RadioGroup key={options.id} defaultValue={options[0]}>
      //                 <div className="flex items-center gap-3">
      //                   <RadioGroupItem value={options.label} id={options._id} />
      //                   <Label htmlFor="r1">{options.label}</Label>
      //                 </div>
      //              </RadioGroup>
 
      //               ))
      //              : null 
      //           }
      //         </DropdownMenuContent>
      //         )
      //         }
      //       </DropdownMenu>
      //    </div> ))
      //   }
      // </div>
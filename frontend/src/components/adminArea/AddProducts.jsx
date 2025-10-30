import React, { useState, useEffect } from "react";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import { Button } from "../ui/button.jsx";
import axios from "axios";
import { API_PATHS } from "@/utils/apiPaths.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.jsx";

import { getAllBrand } from "@/store/admin/index.js";

const AddProduct = ({
  formControl,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {

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
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        {/* Single Input */}
        <div className="flex flex-col gap-4">
          {formControl.map((items) => (
            <>
              {(items.type === "text" || items.type === "") &&
                items.componentType === "Input" && (
                  <div className="flex flex-col gap-2" key={items.name}>
                    <label htmlFor="">{items.label}</label>
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
                  </div>
                )}
                 {
                  items.componentType === "Textarea" &&(
                  <div className="flex flex-col gap-2" key={items.name}>
                    <label htmlFor="">{items.label}</label>
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
                  </div>
                          )
                          } 
            </>
          ))}
        </div>
        <hr />
        {/* Grid Input */}
                <div className="flex md:flex-row xxsm:flex-col md:justify-between gap-3">
          {formControl.map((items) => (
            <>
              {items.componentType === "Select" && (
                <>
                  <div className="flex flex-col gap-2" key={items.name}>
                    <span>{items.label}</span>
                    { items.name !== "brand" ?
                    <Select 
                     className="w-72"
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          [items.name]: value,
                        })
                      }
                      value={formData[items.name] || ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={items.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {items.options && items.options.length > 0
                          ? items.options.map((option) => (
                              <SelectItem key={option.id} value={option.id}>
                                {option.label}
                              </SelectItem>
                            ))
                          : null}
                      </SelectContent>
                    </Select>
                    :


                     <Select 
                        onValueChange={(brands) =>
                        setFormData({
                          ...formData,
                          [items.name]: brands,
                        })
                      }
                      value={formData[items.name] || ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={items.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {brands && brands.length > 0 && brands.map((setBrands) =>(
                            <SelectItem key={setBrands._id} value={setBrands._id}>
                              {setBrands.name}   
                            </SelectItem>
                        ))}
                        
                      </SelectContent>
                    </Select>}

                  </div>
                </>
              )}
            </>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-x-3 gap-y-5">
          {formControl.map((items) => (
            <>
              {items.type === "number" &&
                (items.componentType === "Input" ||
                  items.componentType === "Select") && (
                  <>
                    <div className="flex flex-col gap-2" key={items.name}>
                      <span>{items.label}</span>
                      <Input
                        type={items.type}
                        name={items.name}
                        required={items.required}
                        placeholder={items.placeholder}
                        value={formData[items.name] || ""}
                         onChange={(e) => setFormData({
                            ...formData, [items.name]: e.target.value
                          })}
                      />
                    </div>
                  </>
                )}
            </>
          ))}
        </div>
        
      </div>

      <div></div>
      <Button type="submit">{buttonText || "Submit"}</Button>
    </form>
  );
};

export default AddProduct;

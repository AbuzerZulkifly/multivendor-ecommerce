import { API_PATHS } from "@/utils/apiPaths.js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: []
}

export const addNewProduct = createAsyncThunk('admin/products/addproduct', async(formData, image) => {
  const response = await axios.post(API_PATHS.ADMIN.PRODUCTS.ADD, formData, image, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response?.data
})


export const getAllProduct = createAsyncThunk('/products/getallproduct', 
  async() => {
  const response = await axios.get(API_PATHS.ADMIN.PRODUCTS.GET)
  return response?.data
})


export const updateProduct = createAsyncThunk('/products/updateproduct', async({id, formData, image}) => {
  const response = await axios.put(API_PATHS.ADMIN.PRODUCTS.UPDATE(id), formData, image, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response?.data
})


export const deleteProduct = createAsyncThunk('/products/deleteproduct', async(id) => {
  const response = await axios.delete(API_PATHS.ADMIN.PRODUCTS.DELETE(id))
  return response?.data
})


export const addNewBrand = createAsyncThunk('/admin/products/brand', async (brandFormData, image) => {
  const response = await axios.post(API_PATHS.ADMIN.BRAND.ADD, brandFormData, image, {
     headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data
})

export const getAllBrand = createAsyncThunk('/products/getAllBrand', 
  async() => {
  const response = await axios.get(API_PATHS.ADMIN.BRAND.GET)
  return response?.data
})

const adminProductSlice = createSlice({
  name: 'adminProductSice',
  initialState,
  reducers: {},
  extraReducers : (builder)=> {
    builder.addCase(getAllProduct.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(getAllProduct.fulfilled, (state, action)=>{
      state.isLoading = false,
      state.productList = action.payload.data
    })
    .addCase(getAllProduct.rejected, (state, action)=>{
      state.isLoading = false,
      state.productList = []
    })
  }
});

export default adminProductSlice.reducer
import { API_PATHS } from "@/utils/apiPaths.js";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: []
}

export const fetchAllFilteredProducts = createAsyncThunk("shopping/getallfilteredproducts",
  async()=> {
    const response = await axios.get(API_PATHS.SHOPPING_PRODUCT_LISTING.GET)
    return response?.data
    
  }
) 


const shoppingProductSlice = createSlice({
  name: "shoppingProductsSlice",
  initialState,
  reducers: {},
  extraReducers : (builder) => {

    builder.addCase(fetchAllFilteredProducts.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(fetchAllFilteredProducts.fulfilled, (state, action)=>{
      state.isLoading = false,
      state.productList = action.payload.data
    })
    .addCase(fetchAllFilteredProducts.rejected, (state, action)=>{
      state.isLoading = false,
      state.productList = []
    })
  }
})

export default shoppingProductSlice.reducer
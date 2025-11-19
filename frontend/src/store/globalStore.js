import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import adminProductSlice from './admin/index.js'
import shoppingProductsSlice from "./shopping/shoppingProductsSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: adminProductSlice,
    shoppingProduct: shoppingProductsSlice
  }
});

export default store;
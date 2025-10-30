import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import adminProductSlice from './admin/index.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProduct: adminProductSlice
  }
});

export default store;
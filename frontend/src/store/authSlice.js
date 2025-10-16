import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
}
export const signupUser = createAsyncThunk('/auth/signup', async (formData) => {
  const response = await axios.post(API_PATHS.AUTH.SIGNUP, formData, {
    withCredentials: true
  });
  return response.data
})


export const loginUser = createAsyncThunk('/auth/login', async (formData) => {
  const response = await axios.post(API_PATHS.AUTH.LOGIN, formData, {
    withCredentials: true
  });
  return response.data
})

export const checkUserAuth = createAsyncThunk('/auth/authorised', async () => {
  const response = await axios.get(API_PATHS.AUTH.CHECKAUTH, {
      withCredentials: true,
    headers: {
      "Cache-Control" : "no-store, no-cache, must-revalidate, proxy-revalidate ",
    }
  });
  return response.data
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser:(state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
    }
  },
    extraReducers: (builder) => {
      builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.success ? action.payload.user: null
        state.isAuthenticated = action.payload.success ? true : false
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    })
      .addCase(checkUserAuth.pending, (state) => {
        state.isLoading = true
      })
      .addCase(checkUserAuth.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.success ? action.payload.user: null
        state.isAuthenticated = action.payload.success ? true : false
      })
      .addCase(checkUserAuth.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    })
  },
});



export const {setUser} = authSlice.actions
export default authSlice.reducer
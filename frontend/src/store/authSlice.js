import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { API_PATHS } from '@/utils/apiPaths.js'

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser:(state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
    },
    extraReducers: (builder) => {
      builder.addCase(signupUser.pending, (state) => {
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
  },
}});

export const signupUser = createAsyncThunk('/auth/signup', async (formData) => {
  const response = await axios.post(API_PATHS.AUTH.SIGNUP, formData, {
    withCredentials: true
  });
  return response.data
})

export const {setUser} = authSlice.actions
export default authSlice.reducer
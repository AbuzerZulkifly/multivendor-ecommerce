import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
// AUTH RELATED PAGES
import AuthLayout from './components/auth/AuthLayout.jsx'
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'

// ADMIN RELATED PAGES
import AdminAreaLayout from './components/adminArea/AdminAreaLayout.jsx'
import AdminDashboard from './pages/adminArea/AdminDashboard.jsx'
import AdminFeatures from './pages/adminArea/AdminFeatures.jsx'
import AdminOrders from './pages/adminArea/AdminOrders.jsx'
import AdminProduct from './pages/adminArea/AdminProduct.jsx'

// Shopping Related Pages
import ShoppingAreaLayout from './components/shoppingArea/ShoppingAreaLayout.jsx'
import ShoppingProductListing from './pages/shoppingArea/ShoppingProductListing.jsx'
import ShoppinHome  from './pages/shoppingArea/ShoppinHome.jsx'
import ShoppingCheckout from './pages/shoppingArea/ShoppingCheckout.jsx'
import ShoppingAccount from './pages/shoppingArea/ShoppingAccount.jsx'

import CheckAuth from './components/common/CheckAuth.jsx'
import NotFound from './pages/NotFound.jsx'
import NoAccess from './pages/NoAccess.jsx'
import Loading from './components/common/Loading.jsx'
import { checkUserAuth } from './store/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const {user, isAuthenticated, isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(checkUserAuth())
  }, [dispatch]);

  if(isLoading) return <><Loading /></>
  return (
<div className='flex flex-col overflow-hidden'>
    
    <Routes>
      <Route path="/" element={
        <CheckAuth
          isAuthenticated={isAuthenticated}
          user={user}
        >
          <AuthLayout shopName="DoorStep" />
        </CheckAuth>
      }>
        <Route path="login" element={<Login />} />
        
      </Route>    


      <Route path="/auth" element={
        <CheckAuth
          isAuthenticated={isAuthenticated}
          user={user}
        >
          <AuthLayout shopName="DoorStep" />
        </CheckAuth>
      }>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/admin" element={
        <CheckAuth
          isAuthenticated={isAuthenticated}
          user={user}
        >
          <AdminAreaLayout />
        </CheckAuth>
      }>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="features" element={<AdminFeatures />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="products" element={<AdminProduct />} />
      </Route>

      <Route path="/shop" element={
        <CheckAuth
          isAuthenticated={isAuthenticated}
          user={user}
        >
          <ShoppingAreaLayout />
        </CheckAuth>
      }>
        <Route path="productlisting" element={<ShoppingProductListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="home" element={<ShoppinHome />} />
        <Route path="account" element={<ShoppingAccount />} />
      </Route>

    <Route path="*" element={<NotFound />} />
    <Route path="noaccess" element={<NoAccess />} />
    
    </Routes>
    <Toaster 
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '10px',
          fontSize: '13px',
          color: '#fff',
          backgroundColor: '#713200',
        },
      }}
    />
</div>
  )
}

export default App

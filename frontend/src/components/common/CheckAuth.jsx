import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, userInfo, children }) => {
  const currentPageLocation = useLocation();

  if (!isAuthenticated && !(
      currentPageLocation.pathname.includes("/login") ||
      currentPageLocation.pathname.includes("/signup")
    )
  ) {
    return <Navigate to='/auth/login' />
  }

  if (isAuthenticated && (currentPageLocation.pathname.includes("auth"))) 
      {
        if(userInfo?.role === "admin") {
          return <Navigate to='/admin/dashboard' />
        } 
        else{
          return <Navigate to='/shop/home' />
        }
      }
  if(isAuthenticated && userInfo?.role !== "admin" && currentPageLocation.pathname.includes('admin')) {
    return <Navigate to='/noaccess' />
  }


  return <div>{children}</div>;
};

export default CheckAuth;

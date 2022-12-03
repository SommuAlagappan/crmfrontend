import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'



function ProtectedRoutes() {
  return (
    window.localStorage.length>0?<Outlet/> : <Login/>
    
  )
}






export default ProtectedRoutes

console.log(window.localStorage.length>0)
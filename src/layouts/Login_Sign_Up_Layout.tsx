import React from 'react'
import { Outlet } from 'react-router-dom'

const Login_Sign_Up_Layout = () => {
  return (
    <>
      <div className='bg-red-500'>Login or Sign up Page</div>
      <Outlet />
    </>
  )
}

export default Login_Sign_Up_Layout
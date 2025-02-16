import React from 'react'
import { Outlet } from 'react-router-dom'

const Login_Sign_up = () => {
  return (
    <>
      <div>Login or Sign up Page</div>
      <Outlet />
    </>
  )
}

export default Login_Sign_up
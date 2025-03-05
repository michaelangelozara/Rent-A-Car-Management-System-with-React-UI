import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'

const Login = () => {
  const loadedData = useLoaderData();

  return (
    <>
      <div>Login Component </div>
    </>
  )
}

export const loginLoader = async () => {
  // always check if the user is logged in or not
  // if the user is logged in then redirect to the list of cars
}

export default Login
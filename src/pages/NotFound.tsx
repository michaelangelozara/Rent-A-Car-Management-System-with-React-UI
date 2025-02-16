import React from 'react'
import NotFoundIcon from "../assets/NotFoundIcon.png";

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-full h-screen flex flex-col justify-center items-center space-y-5'>
        <img className='size-30 md:size-40 lg:size-50' src={NotFoundIcon} alt="Not Found" />
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Oh ohhh, Sorry Page Not Found!</h1>
      </div>
    </div>
  )
}

export default NotFound
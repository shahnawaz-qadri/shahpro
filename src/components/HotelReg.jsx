import React, { useState } from 'react'
import { assets } from '../assets/assets'

const HotelReg = () => {
  const [isOpen, setIsOpen]= useState(true);
  if (!isOpen) return null;
  return (
    <div className='flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-100 bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt="reg-Image" className='w-1/2 rounded-xl hidden md:block'/>
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
        {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'>
         <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' /> 
         </button>
         <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>  
         <div className='w-full mt-4'>
          <label htmlFor="name" className='font-medium text-gray-500 '>
Your Name
          </label>
          <input type="text" placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
         </div>
         <div className='w-full mt-4'>
          <label htmlFor="name" className='font-medium text-gray-500 '>
Your Address
          </label>
          <input type="text" placeholder='Type Here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
         </div>
         <div className='w-full mt-4'>
          <label htmlFor="name" className='font-medium text-gray-500 '>
Mobile Number
          </label>
          <input type="text" placeholder='+91' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
         </div>
         <div className='border rounded-lg mt-8'>
          <button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Register Here</button>
         </div>
         
        </div>
      </form>
    </div>
  )
}

export default HotelReg

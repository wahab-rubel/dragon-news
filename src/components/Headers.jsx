import React from 'react'
import logo from '../assets/logo.png'
import moment from 'moment'
function Headers() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-4'>
     <div className='logo'>
     <img className='w-[300px]' src={logo} alt="logo" />
     </div>
     <h2 className='font-poppins'>Journalism Without Fear or Favour</h2>
     <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Headers

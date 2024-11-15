import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function AuthLayout() {
  return (
    <div className='font-poppins'>
      <header className='py-3 w-11/12 mx-auto'>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout

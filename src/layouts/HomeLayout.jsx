import React from 'react'
import Headers from '../components/Headers'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftNavbar from '../components/layouts-component/LeftNavbar'
import RightNav from '../components/layouts-component/RightNav'
import { Outlet } from 'react-router-dom'


function HomeLayout() {
  return (
    <div  className='font-poppins'>
     <header>
      <Headers></Headers>
      <section className='w-11/12 mx-auto'>
       <LatestNews></LatestNews>
      </section>
     </header>
     <nav className='w-11/12 mx-auto'>
     <Navbar></Navbar>
     </nav>
     <main className='w-11/12 mx-auto pt-6 grid md:grid-cols-12 gap-3'>
     <aside className='left col-span-3'>
     <LeftNavbar></LeftNavbar>
     </aside>
     <section className='col-span-6'>
      <Outlet></Outlet>
      </section>
      <section>
      <aside className='right col-span-3'>
      <RightNav></RightNav>
     </aside>
      </section>
     </main>
    
    </div>
  )
}

export default HomeLayout

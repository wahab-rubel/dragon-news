import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function LatestNews() {
  return (
    <div className='flex items-center bg-white gap-2'>
      <p className='bg-[#D72050] px-4 py-1 text-white'>Latest news</p>
      <Marquee pauseOnHover={true} speed={100} className='space-x-10 text-black p-2'>
       <Link to='/news'>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, assumenda! Eligendi ducimus aperiam aut iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eos mollitia vero nulla, ipsam eaque!
       </Link>
      </Marquee>
    </div>
  )
}

export default LatestNews

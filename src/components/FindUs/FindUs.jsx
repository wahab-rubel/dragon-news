import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


function FindUs() {
  return (
    <div>
      <h2 className='*:w-full font-semibold mb-3'>Login with</h2>
      <div className="join flex join-vertical *:bg-base-100">
    <button className="btn join-item justify-start">
    <FaFacebook></FaFacebook> FaceBook
   </button>
   <button className="btn join-item justify-start">
    <FaInstagram></FaInstagram> Instagram
   </button>
   <button className="btn join-item justify-start">
    <FaTwitter></FaTwitter> Twitter
   </button>
   </div>
   </div>
  )
}

export default FindUs

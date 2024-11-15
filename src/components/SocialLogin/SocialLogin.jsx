import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SocialLogin() {
  return (
    <div>
      <h2 className='font-semibold mb-3'>Login with</h2>
      <div className='*:w-full space-y-4'>
       <button className='btn'>
        <FcGoogle></FcGoogle> Login with Google
       </button>
       <button className='btn'>
        <FaGithub></FaGithub> Login with Github
       </button>
      </div>
    </div>
  )
}

export default SocialLogin

import React from 'react'
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';

function RightNav() {
  return (
    <div className='space-y-4'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  )
}

export default RightNav;

import React from 'react'
import { assets } from '../assets/assets'

const Overview = () => {
  return (
    <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32' style={{backgroundColor:'#f6f9fc'}}>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div style={{ maxWidth:'20rem' }}>
          <img src={assets.logo} alt="logo" className="invert opacity-80" />
          <p style={{ fontSize: '18px', marginTop: '10px', wordWrap: 'break-word', lineHeight: '1.5',color:'gray' }}>
            Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
          </p>
           <div style={{ marginTop: '16px',gap:'15px',flexDirection:'row' ,display:'flex',}}>
          <img src={assets.instagramIcon} alt="instagram-Icon" width="30px" height="24px"/>
          <img src={assets.facebookIcon} alt="facebook-Icon" width="30px" height="24px"/>
          <img src={assets.twitterIcon} alt="twitter-Icon" width="30px" height="24px"/>
          <img src={assets.linkendinIcon} alt="linkendin-Icon" width="30px" height="24px"/>
        </div>
        </div>
       <div>
<p  className='text-lg text-gray-800'>
            COMPANY
             </p>
<ul className='mt-3 flex flex-col gap-2 text-sm'>
    <li><a href="#">About</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Press</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Partners</a></li>
  </ul>
       </div>
       <div>
        <p  className='text-lg text-gray-800'>
            SUPPORT
             </p>
<ul className='mt-3 flex flex-col gap-2 text-sm'>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Safety Information</a></li>
    <li><a href="#">Cancellation Options</a></li>
    <li><a href="#">Contanct Us</a></li>
    <li><a href="#">Accessiblity</a></li>
  </ul>
       </div>
       <div style={{ maxWidth:'20rem' }}>
        <p className='text-lg text-gray-800'>STAY UPDATED</p>
        <p className='mt-3 text-sm'>Subscribe to our newsletter for travel inspiration and special offers.</p>
        <div className='flex items-center mt-4'>
          <input  type="text"
          placeholder="Your email"
          className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none'/>
          <button style={{display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:'black', height: '2.25rem', width:'2.5rem',borderTopRightRadius:'0.25rem',borderBottomRightRadius:'0.25rem',aspectRatio:'1/1'}}>
            <img src={assets.arrowIcon} alt="arrow-Icon" style={{width:'0.875rem',filter:'invert(1)'}}/>
          </button>
        </div>
       </div>
      </div>
      <hr style={{borderColor:'#D1D5DB',marginTop:'32px'}}/>
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>
          ©
          2025
          QuickStay. All rights reserved.
        </p>
         <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
      </div>
    </div>
  )
}

export default Overview

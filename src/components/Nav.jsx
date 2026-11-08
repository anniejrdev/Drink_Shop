import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdCall } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'



const Nav = () => {
  const [open,setOpen] = useState(false)
  
  return (
    <div>
    {/* first nav section  */}
    <div className="flex justify-between items-center w-full bg-orange-800  text-white py-2 text-xs md:px-10 xl:px-55">
   {/* left side */}
  <div className=" gap-5 ultra-regular hidden md:flex ">
  <div className='flex space-x-2 '>
    <div><p>< IoMdCall/></p></div>
    <div><p>+00 1234 567</p></div>
  </div>
  <div className='flex space-x-2'>
    <div><p>< SiMinutemailer/></p></div>
    <div><p>youremail@email.com</p></div>
    </div>
  </div>

   {/* Right side */}
  <div className="flex  items-center gap-x-3">
    
    <div className="hidden lg:flex lg:gap-3">
      <p><FaFacebookF /></p>
      <p><FaTwitter /></p>
      <p><FaInstagramSquare /></p>
      <p><CiBasketball /></p>
    </div>

    
    <div className="flex gap-4 ultra-regular px-8">
      <p>SIGN UP</p>
      <p>LOG IN</p>
    </div>
  </div>
</div>
  
  {/* second navigation */}
    <div className='flex justify-between  w-full bg-black xl:px-50'>
      <div className='p-6 flex'>
        <div><p className='text-lg font-extrabold ultra-regular text-white'>LIQUOR <span className='text-neutral-400'>STORE</span></p></div>
        
      </div>
      <div>

      <div>
        <button className='text-white p-1 mt-6 relative md:hidden' onClick={()=>setOpen(!open)}><GiHamburgerMenu /></button>
        {open && (
          // reponsible in mobile screen only
        <div className='space-y-5 ultra-regular p-3 py-8 w-full px-6 md:hidden items-start absolute bg-black right-0 '>
        <p className='text-white'><a href="">HOME</a></p>
        <p className='text-neutral-400'><a href="">ABOUT</a></p>
        <p className='text-neutral-400'><a href="">PRODUCTS</a></p>
        <p className='text-neutral-400'><a href="">BLOG</a></p>
        <p className='text-neutral-400'><a href="">CONTACT</a></p>
        <p className='text-2xl text-red-800'><a href=""><IoBagHandleOutline /></a></p>
      </div>
        )}
        {/* responsible in md,lg,xl */}
        <div className="hidden md:flex md:space-x-6 md:px-10 xl:space-x-12 ultra-regular mt-6">
    <p className="text-white"><a href="">HOME</a></p>
    <p className="text-neutral-400"><a href="">ABOUT</a></p>
    <p className="text-neutral-400"><a href="">PRODUCTS</a></p>
    <p className="text-neutral-400"><a href="">BLOG</a></p>
    <p className="text-neutral-400"><a href="">CONTACT</a></p>
    <p className="text-2xl text-red-800"><a href=""><IoBagHandleOutline /></a></p>
  </div>
      </div>
     
      </div>
    </div>
    </div>
  )
}

export default Nav

import React from 'react'
import { FaRegAddressBook } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:px-50 px-5 text-white bg-black/90 py-20 mt-30  gap-5 ultra-regular'>
        {/* first column */}
        <div className='space-y-8'>
            <div><p className='text-xl'>LIQUOR <span className='text-neutral-500'>STORE</span></p></div>
            <div><p className='text-[15px] tracking-widest  text-neutral-300'>Far far away, behind the word mountains, far from the countries.</p></div>
            <div className='flex gap-3 '>
               <div className='flex p-4 bg-orange-800 rounded-full'><p><FaTwitter /></p></div>
                <div className='flex p-4 bg-orange-800 rounded-full'><p><FaFacebookF /></p></div>
                <div className='flex p-4 bg-orange-800 rounded-full'><p><FaInstagramSquare /></p></div>
            </div>
        </div>
        {/* second coumn */}
        <div className='space-y-5 text-neutral-400 '>
            <div><p className='text-xl text-neutral-300'>My Accounts</p></div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">My Account</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Register</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Log In</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">My Order</a></p></div>
            </div>
        </div>
        {/* third column */}
        <div className='space-y-5  text-neutral-400'>
            <div><p className='text-xl  text-neutral-300'>Information</p></div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">About Us</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Catalog</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Contact Us</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Term & Conditions</a></p></div>
            </div>
        </div>
        {/* fourth column */}
        <div className='space-y-5  text-neutral-400'>
            <div><p className='text-xl  text-neutral-300'>Quick Links</p></div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Report Spam</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">New User</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Help Center</a></p></div>
            </div>
            <div className='flex'>
            <div><p className='p-1'><GoChevronRight /></p></div>
            <div><p><a href="">Faq's</a></p></div>
            </div>
        </div>
        {/* fifth column */}
        <div className='space-y-5  text-neutral-400'>
            <div><p className='text-xl  text-neutral-300'>Have a Questions?</p></div>
            <div className='flex gap-2 xl:gap-3 '>
            <div><p className='p-1  text-neutral-300'><FaRegAddressBook /></p></div>
            <div><p className=' text-neutral-300'>203 Fake St. Mountain View, San Francisco, California, USA</p></div>
            </div>
            <div className='flex gap-3'>
            <div><p className='p-1'><IoMdCall /></p></div>
            <div><p><a href="">+2 394 3929 210</a></p></div>
            </div>
            <div className='flex gap-3'>
            <div><p className='p-1'><SiMinutemailer /></p></div>
            <div><p><a href="">@infodemo.com</a></p></div>
            </div>
        </div>
      </div>
      {/* last footer */}
      <div className='bg-black px-5  text-neutral-400 py-10 ultra-regular'>
        <div className='flex  items-start xl:px-45'>
           <div><p >Copyright ©2025 All rights reserved | This template is made with</p></div>
           <div><p className='p-1'><a href=""><FaHeart /></a></p></div>
           <div><p className='text-white'><a href=""> Colorlib.com</a></p></div>
        </div>
      </div>
    </div>
  )
}

export default Footer

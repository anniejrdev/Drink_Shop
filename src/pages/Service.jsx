import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      {/* main section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-50 xl:gap-10 bg-orange-800 py-10 gap-10 px-5  ultra-regular text-white'>
        {/* first column */}
        <div>
        <div className='flex gap-x-5 items-center'>
          <div><p className='text-6xl'><MdSupportAgent /></p></div>
        <div className='space-y-3'>
          <div><p className='text-[18px] font-bold'>ONLINE SUPPORT 24/7</p></div>
          <div><p className='text-[16px] tracking-wide'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div></div>
        </div>
        </div>
        {/* second column */}
        <div >
          <div className='flex gap-x-5 items-center'>
          <div><p className='text-6xl'><GrMoney /></p></div>
          <div className='space-y-3'>
          <div><p className='text-[18px] font-bold'>MONEY BACK <p> GUARANTEE</p></p></div>
          <div><p className='text-[16px] tracking-wide'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div></div>
        </div></div>
        {/* third column */}
        <div >
          <div className='flex gap-x-5 items-center'>
          <div><p className='text-6xl'><FaShippingFast /></p></div>
          <div className='space-y-3'>
          <div><p className='text-[18px] font-bold'>FREE SHIPPING $ <p>RETURN</p></p></div>
          <div><p className='text-[16px] tracking-wide'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div></div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Service

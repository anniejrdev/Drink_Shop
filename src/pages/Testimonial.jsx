import React from 'react'
import Review from '../assets/images/person_1.jpg.webp'
import Review2 from '../assets/images/person_2.jpg.webp'
import Review3 from '../assets/images/person_3.jpg.webp'
import { FaQuoteLeft } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {

  return (
    <div>
      <section id='Review'
      className='bg-fixed bg-cover bg-no-repeat w-full '
      style={{backgroundImage:"url('https://preview.colorlib.com/theme/liquorstore/images/bg_4.jpg')"}}
      >
      <div className='text-white text-center mt-20 py-20 bg-black/70'>
        <div><p  className='italic'>Testimonial</p></div>
        <div><p className='text-4xl font-bold'>Happy Clients</p></div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-50 md:px-10 py-20 text-white gap-10 text-start'>
        <div className='border border-neutral-600 space-y-5 p-7' >
            <div className='bg-orange-800 w-10 h-10 flex justify-center items-center rounded-full -mt-12'><p className=''><FaQuoteLeft /></p></div>
            <div><p className='italic text-sm tracking-wide'>Far far away, behind the mountains, far from the countries Vokalia and Consontania, their live the blind texts.</p></div>
            <div className='flex '>
            <div><img src={Review} className='w-20 h-20 rounded-full'/></div>
            <div className='py-2 px-2 space-y-3'>
            <div><p className='text-xl'>Roger Scott</p></div>
            <div><p className='text-sm'>Marketing Manager</p></div>
            </div>
            </div>
        </div>
        <div className='border border-neutral-600 space-y-5 p-7'>
            <div className='bg-orange-800 w-10 h-10 flex justify-center items-center rounded-full -mt-12'><p className=''><FaQuoteLeft /></p></div>
            <div><p className='italic text-sm tracking-wide'>Far far away, behind the mountains, far from the countries Vokalia and Consontania, their live the blind texts.</p></div>
            <div className='flex'>
            <div><img src={Review2} className='w-20 h-20 rounded-full'/></div>
            <div className='py-2 px-2 space-y-3'>
            <div><p className='text-xl'>Roger Scott</p></div>
            <div><p className='text-sm'>Marketing Manager</p></div>
            </div>
            </div>
        </div>
        <div className='border border-neutral-600 space-y-5 p-7'>
            <div className='bg-orange-800 w-10 h-10 flex justify-center items-center rounded-full -mt-12'><p className=''><FaQuoteLeft /></p></div>
            <div><p className='italic text-sm tracking-wide'>Far far away, behind the mountains, far from the countries Vokalia and Consontania, their live the blind texts.</p></div>
            <div className='flex'>
            <div><img src={Review3} className='w-20 h-20 rounded-full'/></div>
            <div className='py-2 px-2 space-y-3'>
            <div><p className='text-xl'>Roger Scott</p></div>
            <div><p className='text-sm'>Marketing Manager</p></div>
            </div>
            </div>
        </div>
    </div>
   
</div>
      </section>
    </div>
  )
}

export default Testimonial

import React from 'react'


const Hero = () => {
  return (
    <section
      id='bg-img'
      className='relative bg-cover bg-fixed bg-center bg-no-repeat h-screen overflow-x-hidden'
      style={{backgroundImage: "url('https://preview.colorlib.com/theme/liquorstore/images/bg_2.jpg')"
      }}>
      {/* Center content */}
      <div className='flex flex-col justify-center items-center h-full text-center text-white space-y-6 bg-black/50'>
        
        
        <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold italic -rotate-5'>
          Good <span className='text-neutral-300 font-light'>Drink</span> for Good<span className='text-orange-600'><p> Moments.</p></span>
        </p>
        
       
        <div className='space-x-4 -rotate-5'>
          <button className='bg-orange-700 px-3 py-2 xl:px-6 xl:py-3 rounded text-white hover:bg-orange-800 transition'>
            Shop Now
          </button>
          <button className='border border-white px-3 py-2 xl:px-6 xl:py-3 rounded hover:bg-orange-800 hover:border-none transition'>
            Read more
          </button>
        </div>
      </div>
       
      
    </section>

  )
}

export default Hero


   
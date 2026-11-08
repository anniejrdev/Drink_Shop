import React from 'react'
import aboutImg from '../assets/images/about.jpg.webp'
import kind from '../assets/images/Kind-1.jpg.webp'
import kind2 from '../assets/images/kind-2.jpg.webp'
import kind3 from '../assets/images/kind-3.jpg.webp'
import kind4 from '../assets/images/kind-4.jpg.webp'
import kind5 from '../assets/images/kind-5.jpg.webp'
import kind6 from '../assets/images/kind-6.jpg.webp'

const About = () => {
  return (
    <div>
      {/* main section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-20 lg:px-20 xl:px-40 items-center'>
        {/* first column */}
        <div >
          <div><img src={aboutImg} className='p-3 xl:p-8'/></div>
        </div>
        {/* second column */}
        <div className='space-y-2 px-5 xl:space-y-8'>
          <div><p className='italic text-orange-800 '>Since 1905</p></div>
          <div><p className='text-3xl font-bold tracking-wider lg:text-2xl md:text-xl xl:text-4xl'>Desire Meets A New Taste</p></div>
          <div><p className='text-neutral-400 ultra-regular text-[16px] tracking-wider '>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div>
          <div><p className='text-neutral-400 ultra-regular text-[16px] tracking-wider '>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p></div>
           <div><p className='text-2xl lg:text-xl md:text-xl tracking-wider font-bold ultra-regular xl:text-3xl'><span className='text-orange-800 italic'>115</span> Years of Experience In Business</p></div>
        </div>
      </div>
      {/* last section */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 text-center lg:px-20 text-xl xl:px-50 xl:gap-x-8 ultra-regular'>
        <div><img src={kind} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800'/><p>Brandy</p></div>
        <div><img src={kind2} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800 '/><p>Gin</p></div>
        <div><img src={kind3} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800'/><p>Rum</p></div>
        <div><img src={kind4} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800'/><p>Tequila</p></div>
        <div><img src={kind5} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800'/><p>Vodka</p></div>
        <div><img src={kind6} className='w-80 h-80 md:w-60 md:h-60 lg:w-30 lg:h-30 xl:w-38 xl:h-38 rounded-full border-2 border-orange-800'/><p>Whiskey</p></div>
      </div>
    </div>
  )
}

export default About

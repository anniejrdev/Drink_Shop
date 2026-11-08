import React from 'react'
import BlogImage from '../assets/images/image_1.jpg.webp'
import BlogImage2 from '../assets/images/image_2.jpg.webp'
import BlogImage3 from '../assets/images/image_3.jpg.webp'
import BlogImage4 from '../assets/images/image_4.jpg.webp'
import { CgCalendarDates } from "react-icons/cg";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
    const BlogItems = [
        {id:1,
        img:BlogImage,
        date:"23 April 2025",
        title:"The Recipe from a Winmaker's Restaurent",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button:"Continue"
        },
        {id:1,
        img:BlogImage2,
        date:"23 April 2025",
        title:"The Recipe from a Winmaker's Restaurent",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button:"Continue"
        },
        {id:1,
        img:BlogImage3,
        date:"23 April 2025",
        title:"The Recipe from a Winmaker's Restaurent",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button:"Continue"
        },
        {id:1,
        img:BlogImage4,
        date:"23 April 2025",
        title:"The Recipe from a Winmaker's Restaurent",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        button:"Continue"
        }
    ]
  return (
    <div>
      <div className='text-center py-20'>
        <div><p className='italic text-orange-800'>Blog</p></div>
        <div><p className='text-4xl font-bold '>Recent Blogs</p></div>
      </div>
      {/* blog items */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:px-50 gap-10 '>
      {BlogItems.map((data)=>(
        
        <div>
        <div className='flex '>
        <div className='w-1/2'>
        <img src={data.img} className='h-full w-full object-cover'/>
        </div>
        <div className='bg-gray-100 flex flex-col w-1/2 space-y-8 px-5 py-5'>
        <div className='flex gap-2 text-neutral-800'>
            <div><p className='p-1'><CgCalendarDates /></p></div>
            <div><p>{data.date}</p></div>
        </div>
            <p className='text-xl italic font-semibold '>{data.title}</p>
            <p className='text-sm tracking-widest text-neutral-500'>{data.description}</p>
            <div className='flex gap-2 text-orange-800'>
            <div><p className='font-semibold italic'>{data.button}</p></div>
            <div><p className='p-1'><GoArrowRight /></p></div>
            </div>
        </div>
        </div>
        </div>
        
      ))}
      </div>
      </div>
    
  )
}

export default Blog

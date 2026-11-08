import React from 'react'
import menuImage from '../assets/images/prod-1.jpg.webp'
import menuImage2 from '../assets/images/prod-2.jpg.webp'
import menuImage3 from '../assets/images/prod-3.jpg.webp'
import menuImage4 from '../assets/images/prod-4.jpg.webp'
import menuImage5 from '../assets/images/prod-5.jpg.webp'
import menuImage6 from '../assets/images/prod-6.jpg.webp'
import menuImage7 from '../assets/images/prod-7.jpg.webp'
import { GoArrowRight } from "react-icons/go";

const Menu = () => {
    const menuItems = [
        {id:1,
        image:menuImage,
        title:"Brandy",
        description:"Bacardi 151",
        amount:"$49.00"
        },
        {id:2,
        image:menuImage2,
        title:"Gin",
        description:"Jim Beam Kentucky Straight",
        amount:"$69.00"
        },
        {id:3,
        image:menuImage3,
        title:"Rum",
        description:"Citadelle",
        amount:"$69.00"
        },
        {id:4,
        image:menuImage4,
        title:"$Rum",
        description:"The Glenlivet",
        amount:"69.00"
        },
        {id:5,
        image:menuImage5,
        title:"Whiskey",
        description:"Black Label",
        amount:"$69.00"
        },
        {id:6,
        image:menuImage3,
        title:"Tequila",
        description:"Macallan",
        amount:"$69.00"
        },
        {id:7,
        image:menuImage6,
        title:"Vodka",
        description:"Old Monk",
        amount:"$69.00"
        },
        {id:8,
        image:menuImage7,
        title:"Whiskey",
        description:"Jameson Irish Whiskey",
        amount:"$69.00"
        },
    ]
  return (
    <div>
        {/* heading section */}
      <div className='text-center p-22 space-y-3'>
        <div><p className='text-orange-800 italic'>Our Delightful offerings</p></div>
        <div><p className='text-4xl font-bold tracking-wide '>Tastefully Yours</p></div>
      </div>
      {/* menu items */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-50 gap-8 text-center space-y-5'>
        {menuItems.map((data)=>(
            <div className='space-y-3'>
            <div><img src={data.image} className='rounded-sm h-[22rem] w-[20rem]'/></div>
            <div><p className='text-orange-800'>{data.title}</p></div>
            <div><p className='text-2xl ultra-regular '>{data.description}</p></div>
            <div><p className='italic text-sm font-light'>{data.amount}</p></div>
            </div>
        ))}
        <div></div>
      </div>
      
      <div className=' text-center flex justify-center items-center '>
        <div className='bg-orange-800 p-3'><p className='text-white'>View All Products</p></div>
        <div className=''><p className='p-1 py-4 bg-orange-800 text-white'><GoArrowRight /></p></div>
      </div>
    </div>
  )
}

export default Menu

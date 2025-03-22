import React from 'react'
import { FaPlay } from "react-icons/fa6";

const Title = ({title, overView}) => {
  return (
    <div className='px-20 pt-50 flex flex-col gap-2 bg-gradient-to-r from-black to-black/0 absolute text-white w-screen h-screen'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='w-80  text-sm'>{overView}</p>
        <div className='flex gap-4'>
            <button className=' bg-white py-4 px-12 rounded-md text-black font-serif flex  items-center hover:bg-gray-50/90'><FaPlay />play</button>
            <button className=' bg-white/5 px-15 py-5 flex rounded-md font-serif hover:bg-white/10 '>info</button>
        </div>
    </div>
  )
}

export default Title
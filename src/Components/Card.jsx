import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";


function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[2rem] bg-zinc-900/90 text-white p-5'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>

  )
}

export default Card
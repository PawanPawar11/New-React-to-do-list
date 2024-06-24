import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";


function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[2.3rem] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="footer absolute bottom-0 left-0 w-full ">
            <div className='flex items-center justify-between mb-3 px-6 py-5'>
                <h5>0.4 Mb</h5>
                <MdDownloadForOffline className='text-2xl'/>
            </div>
            <div className="tag w-full py-4 bg-green-500/80 flex items-center justify-center">
                <h3 className='text-md font-medium'>Download Now</h3>
            </div>
        </div>
    </div>

  )
}

export default Card
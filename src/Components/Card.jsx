import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";



function Card({data}) {
  return (
    <div className='relative flex-shrink-0 w-60 h-72 rounded-[2.3rem] bg-zinc-900 text-white px-6 py-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-medium'>{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full ">
            <div className='flex items-center justify-between mb-3 px-6 py-5'>
                <h5>{data.fileSize}</h5>
                <span className='text-[1.8rem]'>
                    {data.close ? <IoIosCloseCircle/> :<MdDownloadForOffline/> }
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
                        <h3 className='text-md font-medium'>{data.tag.tagTitle}</h3>
                    </div>
                ) 
            }
        </div>
    </div>

  )
}

export default Card
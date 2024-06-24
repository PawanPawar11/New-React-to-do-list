import React, { useState } from 'react'
import Card from './Card'

function Foreground() {
    const data = [
        {
            desc: "Hello, How's it going on there buddy?!",
            fileSize: "0.9 Mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc: "When a person can't find a deep sense of meaning, they distract themselves with pleasure.",
            fileSize: "2.4 Mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum minima mollitia. Quasi laborum, quaerat tenetur ut repudiandae sint",
            fileSize: "3.0 Mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        }
    ];
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card data={item} />
        ))}
    </div>

  )
}

export default Foreground
'use client'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";

export default function SearchInput() {
    const [inputvalue ,setInputValue] = useState('')
  return (
    <div className='hidden xl:inline-flex flex-1 h-10 relative'>
        <input onChange={(e)=>setInputValue(e.target.value)} value={inputvalue} type=" text" placeholder=' Search here ' className='h-full w-full rounded-tl-full rounded-bl-full flex items-center justify-center pl-8 border-none outline-none pr-10' />
        <button className='h-10 bg-black text-white px-5 rounded-tr-full rounded rounded-br-full'>search</button>
        <IoIosSearch className='absolute left-2 text-xl top-2.5 font-semibold ' />
        {inputvalue && (
            <RxCross1 onClick={(e)=>setInputValue('')} className='absolute right-24 top-3' />
        )}
    </div>
  )
}

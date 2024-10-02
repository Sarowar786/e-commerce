import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavoriteBorder } from 'react-icons/md'

export default function SideBar() {
  return (
    <div className='absolute  top-20 left-3 flex flex-col gap-1 transform -translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button className='p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 '>
        <FiShoppingCart/>
      </button>
      <button className='p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 '>
        <LuEye/>
      </button>
      <button className='p-2 bg-white rounded-full hover:bg-primaryColor hover:text-white duration-300 '>
        <MdFavoriteBorder/>
      </button>
    </div>
  )
}

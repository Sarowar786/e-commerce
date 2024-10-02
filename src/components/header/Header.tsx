
import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import SearchInput from '../SearchInput'
import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci'
import MobileNavigation from '../MobileNavigation'
import { navigation } from '../constant'

export default function Header() {
  
  return (
    <div className='bg-primaryColor w-full h-20'>
      <div className='py-5 lg:px-20 md:px-10 px-5'>
         
        <div className='flex items-center justify-between'>
          
            {/* logo */}
            <div className='flex items-center gap-2'>
              <MobileNavigation/>
            <Link href={'/'} className='flex items-center justify-center'>
                <Image src={logo} alt='logo' width={200} height={100} className='w-full h-full'/>
            </Link>
            </div>
            {/* menu */}
            <div>
              <div className='hidden lg:inline-flex flex items-center justify-center gap-3 text-white text-lg capitalize'>
                {navigation?.map((item ,i )=>(
                  <Link key={i} href={item.link} className=''> {item.title} </Link>
                ))}
              </div>
            </div>
            {/* searchbar */}
            <div>
              <SearchInput/>
            </div>
            {/* sidebar */}
            <div className='flex items-center gap-4'>
                {/* user */}
              <div className='flex items-center justify-center gap-4'>
              <CiUser className='text-white border border-transparent bg-bgicon text-xl h-10 w-10 rounded-full p-1'/>
              <div className='text-white'>
                <p className='text-gray-300'> Hello</p>
                <p className='font-bold'>Login</p>
              </div>
              </div>
              {/* favourite */}
              <div className='relative'>
              <CiHeart className='text-white border border-transparent bg-bgicon text-xl h-10 w-10 rounded-full p-1' />
              <span className='bg-white p-[2px] rounded-full absolute -top-1 -right-2 h-[20px] w-[20px] flex items-center justify-center border-primaryColor border-2'><span>0</span></span>
              </div>
              {/* cart */}
              <div className='relative'>
              <CiShoppingCart   className='text-white border border-transparent bg-bgicon text-sm h-10 w-10 rounded-full p-1 relative' />
              <span className='bg-white p-[2px] rounded-full absolute -top-1 -right-2 h-[20px] w-[20px] flex items-center justify-center border-primaryColor border-2'><span>0</span></span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

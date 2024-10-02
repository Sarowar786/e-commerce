import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function SocialLinks() {
  return (
    <div className='flex items-center gap-5 py-4'>
            <Link href={'https://www.facebook.com'} className='border border-themeColor p-3 rounded-md'>
                <FaFacebookF />
            </Link>
            <Link href={'https://www.facebook.com'}
            className='border border-themeColor p-3 rounded-md'>
                <FaXTwitter/>

            </Link>
            <Link href={'https://www.facebook.com'}
            className='border border-themeColor p-3 rounded-md'>
                <FaLinkedinIn/>
            </Link>
            <Link href={'https://www.facebook.com'}
            className='border border-themeColor p-3 rounded-md'>
                <FaInstagram/>
            </Link>
        </div>
  )
}

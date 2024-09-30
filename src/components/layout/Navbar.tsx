import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='h-[122px] bg-background w-full'>
      <div className='x-container items-end justify-between hidden lg:flex h-full'>
        <Image src='/images/logo.svg' width={62} height={62} alt='Logo' />

        <ul className='flex gap-10 text-[#6B708D] font-medium'>
          <li className='text-brand'>Home</li>
          <li>Projects</li>
          <li>Services</li>
        </ul>

        <Button className='rounded-[12px] bg-brand h-[52px] px-8 font-medium hover:bg-indigo-500'>
          Contact Us
        </Button>
      </div>
    </nav>
  )
}

export default Navbar

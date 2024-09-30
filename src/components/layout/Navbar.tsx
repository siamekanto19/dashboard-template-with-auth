'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

        <div className='flex items-center gap-5'>
          <Link href='/signup'>
            <Button className='rounded-[12px] bg-brand h-[52px] px-8 font-medium hover:bg-indigo-500'>Sign up</Button>
          </Link>
        </div>
      </div>
      <div className='x-container lg:hidden flex justify-between items-center pt-8'>
        <Image src='/images/logo.svg' width={50} height={50} alt='Logo' />
        <button className='size-10 rounded-full bg-[#3B52CF] flex justify-center items-center text-white hover:bg-indigo-600'>
          <Menu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

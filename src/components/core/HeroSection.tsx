'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='pt-20 flex flex-col lg:flex-row items-center gap-5'>
      <div>
        <h1 className='font-bold text-[#292E47] text-4xl lg:text-5xl xl:text-6xl'>
          Empower Your Business With Stunning Design!
        </h1>
        <p className='pt-5 text-[20px] text-[#6B708D]'>
          Lumaracode is a digital design and development studio. We design and
          develop astonishing websites and mobile apps.
        </p>
        <div className='pt-8 flex items-center gap-8'>
          <Button className='rounded-[12px] bg-brand h-[52px] px-8 font-medium hover:bg-indigo-500'>
            Get in touch
          </Button>
          <p className='text-[#6B708D] font-medium'>See our work</p>
        </div>
      </div>
      <Image
        className='hidden lg:block'
        src='/images/hero-image.png'
        width={570}
        height={650}
        alt='Hero Image'
      />
    </section>
  )
}

export default HeroSection

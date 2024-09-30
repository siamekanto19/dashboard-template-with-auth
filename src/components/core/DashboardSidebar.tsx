'use client'
import { AlignLeft, ChartColumnDecreasing, Coffee, Home } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DashboardSidebar = () => {
  return (
    <div className='min-h-screen bg-white w-[345px] hidden lg:block'>
      <div className='pt-6 px-10'>
        <Image src='/images/logo.svg' width={62} height={62} alt='Logo' />
      </div>
      <div className='pt-10 flex flex-col'>
        <div className='flex items-center gap-5 h-[54px] pr-10 text-[#00B074]'>
          <div className='h-10 w-1.5 rounded-full bg-[#00B074]'></div>
          <div className='h-[54px] rounded-lg w-full p-4 flex items-center gap-3 bg-[#00B074]/15'>
            <Home absoluteStrokeWidth strokeWidth={1.25} />
            <p className='font-medium'>Dashboard</p>
          </div>
        </div>
        <div className='flex items-center gap-5 h-[54px] pr-10'>
          <div className='h-10 w-1.5 rounded-full'></div>
          <div className='h-[54px] rounded-lg w-full p-4 flex items-center gap-3'>
            <AlignLeft absoluteStrokeWidth strokeWidth={1.25} />
            <p className='font-medium'>Order List</p>
          </div>
        </div>
        <div className='flex items-center gap-5 h-[54px] pr-10'>
          <div className='h-10 w-1.5 rounded-full'></div>
          <div className='h-[54px] rounded-lg w-full p-4 flex items-center gap-3'>
            <ChartColumnDecreasing absoluteStrokeWidth strokeWidth={1.25} />
            <p className='font-medium'>Analytics</p>
          </div>
        </div>
        <div className='flex items-center gap-5 h-[54px] pr-10'>
          <div className='h-10 w-1.5 rounded-full'></div>
          <div className='h-[54px] rounded-lg w-full p-4 flex items-center gap-3'>
            <Coffee absoluteStrokeWidth strokeWidth={1.25} />
            <p className='font-medium'>Foods</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar

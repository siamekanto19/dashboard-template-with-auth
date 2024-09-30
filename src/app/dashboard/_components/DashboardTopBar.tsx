'use client'
import { Input } from '@/components/ui/input'
import { Bell, LogOut, MessageCircle, Search, User2 } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const DashboardTopBar = () => {
  const { data } = useSession()

  return (
    <div className='w-full flex gap-5'>
      <div className='h-12 w-2/3 relative hidden lg:block'>
        <Input className='h-12 bg-white border-border text-base px-6 w-full' placeholder='Search Here...' />
        <Search absoluteStrokeWidth strokeWidth={1.5} className='text-[#A4A4A4] absolute top-3 right-3' />
      </div>
      <div className='h-12 w-12 bg-[#00B074]/15 rounded-2xl flex justify-center items-center text-[#00B074] ml-auto lg:hidden'>
        <Search absoluteStrokeWidth strokeWidth={1.5} />
      </div>
      <div className='h-12 w-12 bg-[#00B074]/15 rounded-2xl flex justify-center items-center text-[#00B074] ml-auto'>
        <Bell absoluteStrokeWidth strokeWidth={1.5} />
      </div>
      <div className='h-12 w-12 bg-[#00B074]/15 rounded-2xl flex justify-center items-center text-[#00B074]'>
        <MessageCircle absoluteStrokeWidth strokeWidth={1.5} />
      </div>
      {data?.user ? (
        <button onClick={() => signOut()} className='h-12 w-12 bg-[#00B074]/15 rounded-2xl flex justify-center items-center text-[#00B074]'>
          <LogOut absoluteStrokeWidth strokeWidth={1.5} />
        </button>
      ) : null}
      <div className='h-12 w-px bg-[#D0D6DE]'></div>
      <div className='flex items-center gap-2'>
        <p className='font-semibold text-[#464255]'>{data?.user.name}</p>
        <div className='size-12 rounded-full border flex justify-center items-center'>
          <User2 absoluteStrokeWidth strokeWidth={1.25} className='text-muted-foreground' />
        </div>
      </div>
    </div>
  )
}

export default DashboardTopBar

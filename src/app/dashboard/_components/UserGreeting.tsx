'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const UserGreeting = () => {
  const { data } = useSession()
  return (
    <div className='w-full pt-10'>
      <h1 className='text-2xl lg:text-3xl font-semibold'>Good Morning!</h1>
      <p className='pt-4 text-[#A3A3A3]'>Hi {data?.user.name}. Welcome back!</p>
    </div>
  )
}

export default UserGreeting

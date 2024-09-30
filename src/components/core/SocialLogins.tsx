'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const SocialLogins = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => signIn('google')} variant='outline' className='bg-transparent rounded-[12px] flex items-center justify-center gap-2 h-12 mt-4 hover:bg-muted shadow-none'>
        <Image src='/images/google-logo.svg' width={24} height={24} alt='Google' />
        <p className='font-semibold'>Continue with Google</p>
      </Button>
    </div>
  )
}

export default SocialLogins

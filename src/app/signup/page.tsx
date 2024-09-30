'use client'
import SocialLogins from '@/components/core/SocialLogins'
import SignupForm from './_components/SignupForm'
import SignInForm from './_components/SignInForm'
import { useState } from 'react'

const SignupPage = () => {
  const [authType, setAuthType] = useState<'login' | 'signup'>('signup')

  return (
    <section className='flex flex-col lg:flex-row w-full'>
      <div className='w-full lg:w-1/2 min-h-screen lg:h-screen flex items-center'>
        <div className='w-full px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-48 flex flex-col'>
          <h1 className='text-2xl lg:text-3xl font-bold'>Join the green movement</h1>
          <p className='pt-4 text-[#A7AA9D]'>Signup for free</p>
          <SocialLogins />
          <div className='w-full pt-6 flex items-center gap-4'>
            <div className='h-px bg-[#A7AA9D] w-full'></div>
            <p className='text-[#A7AA9D]'>Or</p>
            <div className='h-px bg-[#A7AA9D] w-full'></div>
          </div>
          {authType === 'signup' ? <SignupForm /> : <SignInForm />}
          <div className='w-full flex justify-center items-center pt-8'>
            {authType === 'signup' ? (
              <button onClick={() => setAuthType('login')} className='text-muted-foreground hover:text-[#719331] cursor-pointer underline'>
                Already have an account? Sign In
              </button>
            ) : (
              <button onClick={() => setAuthType('signup')} className='text-muted-foreground hover:text-[#719331] cursor-pointer underline'>
                Don&apos;t have an account yet? Sign up
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='w-1/2 h-screen hidden lg:block'>
        <img className='w-full h-screen object-cover' src='/images/green-movement.svg' alt='Green Movement' />
      </div>
    </section>
  )
}

export default SignupPage

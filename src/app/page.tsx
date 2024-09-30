import ClientSection from '@/components/core/ClientSection'
import HeroSection from '@/components/core/HeroSection'
import Navbar from '@/components/layout/Navbar'
import { getServerAuthSession } from '@/server/auth'
import { redirect } from 'next/navigation'
import { Fragment } from 'react'

const Homepage = async () => {
  const session = await getServerAuthSession()
  if (session?.user) {
    return redirect('/dashboard')
  }

  return (
    <Fragment>
      <Navbar />
      <div className='x-container'>
        <HeroSection />
        <ClientSection />
      </div>
    </Fragment>
  )
}

export default Homepage

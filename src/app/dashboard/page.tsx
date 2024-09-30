import { Input } from '@/components/ui/input'
import { Bell, MessageCircle } from 'lucide-react'
import React from 'react'
import DashboardTopBar from './_components/DashboardTopBar'
import UserGreeting from './_components/UserGreeting'
import StatCard from './_components/StatCard'

const DashboardPage = () => {
  return (
    <div className='w-full'>
      <DashboardTopBar />
      <UserGreeting />
      <div className='pt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
        <StatCard imageUrl='/images/icon-order.svg' count='74' name='Total Orders' percentage={4} />
        <StatCard imageUrl='/images/icon-delivered.svg' count='357' name='Total Delivered' percentage={4} />
        <StatCard imageUrl='/images/icon-cancelled.svg' count='65' name='Total Cancelled' percentage={4} />
        <StatCard imageUrl='/images/icon-revenue.svg' count='$128' name='Total Revenue' percentage={4} />
      </div>
    </div>
  )
}

export default DashboardPage

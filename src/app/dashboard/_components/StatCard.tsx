import Image from 'next/image'
import React, { FC } from 'react'

type Props = {
  count: string
  imageUrl: string
  name: string
  percentage: number
}

const StatCard: FC<Props> = ({ count, imageUrl, name, percentage }) => {
  return (
    <div className='w-full rounded-2xl bg-white drop-shadow-md flex items-start justify-center gap-4 py-7'>
      <Image src={imageUrl} height={85} width={85} alt={name} />
      <div className='flex flex-col gap-1'>
        <h2 className='text-4xl lg:text-5xl font-bold text-[#464255]'>{count}</h2>
        <p className='text-[#464255]'>{name}</p>
        <div className='flex items-center gap-2'>
          <Image src='/images/up-arrow.svg' height={24} width={24} alt='Up Arrow' />
          <p className='text-sm text-[#A3A3A3]'>{percentage}% (30 days)</p>
        </div>
      </div>
    </div>
  )
}

export default StatCard

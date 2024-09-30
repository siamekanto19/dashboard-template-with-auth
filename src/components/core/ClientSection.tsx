import Image from 'next/image'
import React from 'react'

const ClientSection = () => {
  return (
    <section className='py-20 w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
      <Image src='/images/airbnb.svg' width={104} height={32} alt='AirBnB' />
      <Image src='/images/google.svg' width={104} height={32} alt='Google' />
      <Image
        src='/images/microsoft.svg'
        width={104}
        height={32}
        alt='Microsoft'
      />
      <Image src='/images/fedex.svg' width={104} height={32} alt='Fedex' />
      <Image src='/images/amazon.svg' width={104} height={32} alt='Amazon' />
    </section>
  )
}

export default ClientSection

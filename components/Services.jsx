import Image from 'next/image'
import React from 'react'


const Services = () => {
  return (
    <section className='w-full px-6 py-6 '>
        <div>
            <h3 className='cat_head'>Value Chain Solutions</h3>
            <Image
             src="/assets/cows.jpg"
             width={540}
             height={450}
             alt='cow image'
             className='opacity-50'
            
            />
        </div>
        <div></div>
    </section>
  )
}

export default Services
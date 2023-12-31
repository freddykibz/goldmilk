import React from 'react'
import Image from 'next/image'
import { banner3 } from '@/public/assets'



const About = () => {
  return (
    <section className='flex w-full flex-center  flex-col md:flex-row  px-6 mb-10 h-[150] '>
         <div className='flex-1 order-first flex-center flex-col'>
            <div className='h-[350] w-[150]' >
                <Image
                src={banner3}
                width={540}
                height={350}
                alt="eye"
                />
            </div>
  
    
        </div>
        <div className='flex-1'>
            <div>
                <p className='desc_paragraphs  text-gray-500 md:w-3/4'>GOLDMILK is a business ecosystem that creates dynamic linkages and strategic partnerships for a collective approach to sustained dairy profitability.   At the core of our business are three things; product processing, product development and market development BUT with vertical and horizontal integration for quality, quantity, sustainability, technology transfer, Research and Development and farmer profitability.</p>
            </div>
            <div>
          </div>
         </div>
      

    </section>
  )
}

export default About
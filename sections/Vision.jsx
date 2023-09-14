import React from 'react'
import Image from 'next/image'
import { eye,banner1 } from '@/public/assets'

const Vision = () => {
  return (
    <div className='flex w-full flex-col md:flex-row px-6 flex-center'>
        <div className='flex-1 flex-center flex-col'>
            <div className=''>
                <Image 
                src={banner1}
                width={540}
                height={350}
                alt="eye"
                />
            </div>
        </div>

        <div className='flex-1 flex-center flex-col'>
            <p className='quote_head  text-brown-sugar'>Rooted in product processing, development, and market expansion</p>
            <p className='desc_paragraphs text-gray-500 w-3/4'>As GOLDMILK, our primary purpose is to take full advantage of Kenya’s dairy potential and make the country a global player in the dairy market while ensuring a good return to our partners at every level of the dairy value chain.
           </p>
        </div>
    </div>
  )
}

export default Vision
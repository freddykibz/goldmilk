import Image from 'next/image';
import React from 'react'
import  { space}  from '@/public/assets';

const Mission = () => {
  return (
  <section className=' flex w-full flex-col md:flex-row  px-6  text-[18] md:text-[24px]  flex-center' id="mission" name="mission">
     <div className='flex-1 w-full flex-center flex-col'>
      <p className='quote_head '>GOLDMILK has set its sights on surmounting the critical obstacles in Kenya’s dairying space to achieve its objectives:
      </p>
      <div className='flex mt-6 flex-col gap-2 text-normal text-center font-normal text-gray-500'>
        <ul className='flex flex-col mt-8'>
          <li>Address scalability.</li>
          <li>Bridging the knowledge .</li>
          <li>Fostering cohesive, efficient dairy collectives.</li>
          <li>Elevating industry players' </li>
          <li>Cultivating skilled professionals.</li>   
          <li>Elevating genetic quality </li>
          <li>Managing milk supply fluctuations</li>
          <li>Streamlining transportation and market access.</li>
          <li>Curating accurate and current dairy information.</li>
        </ul>
      </div>
    </div>
    <div className='flex-1 order-first flex-center flex-col'>
    <div className='h-[350] w-[150]' >
                <Image
                src={space}
                width={150}
                height={350}
                alt="eye"
                />
            </div>
    </div>
   
  </section>
  )
}

export default Mission;
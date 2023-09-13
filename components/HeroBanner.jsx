'use client'
import Image from "next/image";
import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "@components";
import { bigShoe1,banner1, banner2, banner3 } from "@public/assets";
import { arrowRight } from "@public/assets";


const HeroBanner = () => {
  const [bigShoeImg, setBigShoeImg] = useState(banner1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-6 '>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
        Navigating Dairy's Future
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
           Innovate, Thrive, in 
          </span>
          <br />
          <span className='text-brown-sugar inline-block mt-3'> Dairy</span> Farming
        </h1>
        <p className='font-montserrat text-gold-darkest text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Connecting Dairy for Sustainable Growth
        </p>

        {/* <Button label='Learn More' iconURL={arrowRight} /> */}

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative  order-first  flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <Image
          src={banner2}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
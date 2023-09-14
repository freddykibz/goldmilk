'use client'
import CustomButton from "./CustomButton"
import Image from "next/image"

const Servicebanner = () => {
    const handleSCroll = () => {

    }
  
    return (
    
    <div className='flex-center bg-brown-sugar  w-full flex-col md:flex-row mr-0'>
        <div className="flex-1 flex-col py-6 px-4 items-start justify-center">
        <h1 className='md:text-4xl uppercase text-white md:font-extrabold text-[32px] font-medium'>
        Innovate, Thrive and, 
        <br/> Profit in Dairy
        </h1>
        <p className="banner__subtitle ">
        Unlocking Dairy Success: Bridging Excellence in Processing, Development, and Markets for Sustainable Profitability through Collaborative Ecosystems 
        </p>
        <div className="flex gap-8 flex-row  flex-center md:mb-20">
        <CustomButton
           title="Learn MOre"
           containerStyles="hidden sm:block text-white text-bold uppercase border-white border-4 rounded-full mt-10"
           handleClick={handleSCroll}
         />
        
        </div>
        
       </div> 
       <div  className="flex-1 h-540 w-full fill-container">
       <div className="hero__image-container">
        <div  className="hero__image  opacity-80  hidden sm:block">
            <Image
             src="/assets/cows.jpg" alt="hero" fill className="h-[540] w-3/4 object-cover position-right-0" 
            />
        </div>
        
        <div className="hero__image-overlay"></div>
      </div>
        
        </div>      
    </div>
  )
}

export default Servicebanner;
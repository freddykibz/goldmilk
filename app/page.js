import ProcessCardList from '@components/ProcessCardList';

import Mission from '@sections/Mission';
import ValueStatement from '@sections/ValueStatement';
import Vision from '@sections/Vision';
import About from '@sections/About';
import HeroBanner from '@components/HeroBanner';
import Subscribe from '@components/Subscribe';
import Services from '@components/Services';
import AboutHeading from '@sections/AboutHeading';
import VisionHeading from '@sections/VisionHeading';
import MissionHeading from '@sections/MissionHeading';
import ContactForm from './contact/ContactForm';
import ContactHeading from '@sections/ContactHeading';

export default function Home() {
  return (
    <div className='w-full'>
        <HeroBanner/>
        <ValueStatement/>
        {/* <Services/> */}
        <ProcessCardList/>
        <AboutHeading/>
        <About/>
        <VisionHeading/>
       <Vision/>
       <MissionHeading/>
       <Mission/>
       <Subscribe/>
       <ContactHeading/>
       <ContactForm/>
    </div>
  
    
  )
}

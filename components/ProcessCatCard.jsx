import Image from "next/image"
import { processCats } from "@constants"

const ProcessCatCard = ({ icon, title, index }) => {
  return (
    <div className="shadow-sm  flex-col flex-center ">
        <div className= {` bg-gallery  flex-center flex-col p-6 md:rounded-[40px] ${index !== processCats.length - 1  ? "mb-0" : "mb-0"}  `}>
        <div className={`w-[240px] h-[120px]  mt-4 flex-center `}>
            <Image
            src={icon}
            width={118}
            height={70}
            alt="title"
           
            />
        </div>
        <div className="flex flex-1 mt-2 flex-col ml-3">
            <h4 className="text-center text-picton-blue font-medium uppercase text-[20px] md:text-[24px] leading-[23px] mb-1">
                {title}
            </h4>
        </div>
    </div>
    </div>
  )
}

export default ProcessCatCard;
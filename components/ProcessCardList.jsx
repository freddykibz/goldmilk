import ProcessCatCard from "./ProcessCatCard"
import { processCats } from "@constants"

const ProcessCardList = () => {
  return (
    <section className="flex flex-col w-full flex-center md:flex-row py-16">
    <div className='flex flex-wrap gap-5 flex-center'>
        {processCats.map((processCat,index)=> (
        <ProcessCatCard key={processCat.id} {...processCat} index={index}/>
        ))}
    </div>
</section>
  )
}

export default ProcessCardList
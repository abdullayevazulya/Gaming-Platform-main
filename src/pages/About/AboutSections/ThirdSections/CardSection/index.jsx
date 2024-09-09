import ImageLeft from "./ImageLeft";
import TextRight from "./TextRight";

export default function CardSection() {
  return (
    // burda hunduruluk verilmisdi
    <div className='flex flex-row bg-[rgba(28,20,15,1)] mt-20 h-[503px]'>
        <ImageLeft/>
       <TextRight/>
    </div>
  )
}

import { pangramSans, editorialNew } from './fonts';
import Image from 'next/image';


export function Text(){
  return (
    <div className='text-container flex-initial w-full'>
        
        <div className={`${pangramSans.className} top-right`}>
          UNDER
          <br></br>
          RENOVATION
        </div>
        
          
        <div className= {`${pangramSans.className} middle-right`}>
            <a href="mailto:kris.aziabor@yale.edu">CONTACT</a>
            <br></br>
            <a href="https://github.com/krisaziabor">GITHUB</a>
            <br></br>
            <a href="https://read.cv/krisaziabor">CV</a>
        </div>
      
      
      <div className={`${editorialNew.className}`}>
      
        <div className='bottom-right'>
          Untitled,
          <br></br>
          Hardy & Taimur (2023)
        </div>
      </div>
      
    </div>
  )
}

export function CoverPhoto(){
  return (
    <div className='photo-container w-full'>
      <Image
        src="/DOTCOM_OTW-0187.jpg"
        fill={true}
        style={{objectFit: "contain"}}
        alt="Untitled, Hardy & Taimur cooking (2023)"
        className="img"
        />
    </div>
  )
}
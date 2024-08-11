import React from 'react';
import "./globals.css"
import { pangramSans, editorialNew } from './fonts';
import Image from 'next/image';

function Text(){
  return (
    <div className='text-container'>
        
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

function Photo(){
  return (
    <div className='photo-container'>
      <Image
        src="/KRIS–FAMSTYLE–0187.jpg"
        layout="fill"
        objectFit="cover"
        alt="Untitled, Hardy & Taimur cooking (2023)"
        className="img"
        />
      </div>
  )
}


export default function Home() {
  return (
    <div className="main-page">
      <Text />
      <Photo />
    </div>
  )
}
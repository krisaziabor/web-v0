import { pangramSans, editorialNew } from './fonts';
import Image from 'next/image';
import React from 'react';
import "./globals.css";
import Cover from './../../public/KRIS–FAMSTYLE–0187.jpg';

export function Text() {
  return (
    <div className='text-container'>
      <div className={`${pangramSans.className} top-right`}>
        COMING
        SOON
      </div>
      <div className={`${pangramSans.className} middle-right`}>
        <a href="https://read.cv/krisaziabor">CV</a>
        <br />
        <a href="https://github.com/krisaziabor">GITHUB</a>
        <br />
        <a href="mailto:kris.aziabor@yale.edu">CONTACT</a>

      </div>
      <div className={`${editorialNew.className}`}>
        <div className='bottom-right'>
          Untitled,
          <br />
          Hardy & Taimur (2023)
        </div>
      </div>
    </div>
  );
}

export function CoverPhoto() {
  return (
    <div className='photo-container'>
      <Image
        src={Cover}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="Untitled, Hardy & Taimur cooking (2023)"
        priority={true}
        className="img"
      />
    </div>
  );
}
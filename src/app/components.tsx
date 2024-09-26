import { pangramSans, editorialNew } from './fonts';
import Image from 'next/image';
import React from 'react';
import "./globals.css";
import Cover from './../../public/KRIS–FAMSTYLE–0187.jpg';

export function Text() {
  return (
    <div className='text-container'>
      <div className={`${pangramSans.className} top-right`}>
        ANY AMBITION TO CREATE TIMELESS WORK RENDERS IT LIFELESS.
        <br />
        ITS MORTALITY AND REBIRTH WILL ALWAYS BE THE MOST BEAUTIFUL.
        <br />
        KRIS AZIABOR DOT COM, COMING SOON
        <br />
        {/* DOWNLOAD PORTFOLIO */}
      </div>
    </div>
  );
}
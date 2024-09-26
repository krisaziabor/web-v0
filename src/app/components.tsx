import { pangramSans } from './fonts';
import React from 'react';
import "./globals.css";

export function Text() {
  return (
    <div className='text-container'>
      <div className={`${pangramSans.className} top-right`}>
        ANY AMBITION TO CREATE TIMELESS WORK RENDERS IT LIFELESS.
        <br />
        <br />
        ITS MORTALITY AND REBIRTH WILL ALWAYS BE THE MOST BEAUTIFUL.
        <br />
        <br />
        KRIS AZIABOR DOT COM, COMING SOON
        {/* <br />
        <br /> }
        { DOWNLOAD PORTFOLIO */}
      </div>
    </div>
  );
}
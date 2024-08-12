import React from 'react';
import "./globals.css"
import { CoverPhoto, Text, } from './components';


export default function Home() {
  return (
    <div className="main-page">
      <CoverPhoto />
      <Text />
    </div>
  )
}
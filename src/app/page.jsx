

import Achievers from '@/components/home/achivers'
import AdmissionBanner from '@/components/home/administorbanner'
import DemoBanner from '@/components/home/banner'

import GallerySection from '@/components/home/gallerysection'
import HeroSection from '@/components/home/hero'

import Logo from '@/components/home/logoscrolling'

import SiddhiSection from '@/components/home/section2'
import WhatsAppButton from '@/components/home/WhatsApp'

import React from 'react'

export default function Home() {
  return (
    <div className='bg-white'>
      <HeroSection />
      <WhatsAppButton/>
      <Logo />
      <SiddhiSection />
      <DemoBanner/>
      <Achievers/>
      <GallerySection/>
      <AdmissionBanner/>
   
    </div>
  )
}

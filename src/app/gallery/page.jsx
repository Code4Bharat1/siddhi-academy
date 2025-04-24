import Gallery from '@/components/gallery/gallery'
import GallerySection2 from '@/components/gallery/gallerysection'
import AdmissionBanner from '@/components/home/administorbanner'
import WhatsAppButton from '@/components/home/WhatsApp'
import React from 'react'

export default function Home() {
  return (
    <div>
        <Gallery/>
        <WhatsAppButton/>
        <GallerySection2/>
        <AdmissionBanner/>
    </div>
  )
}

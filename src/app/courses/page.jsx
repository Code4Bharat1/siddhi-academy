import CourseSection from '@/components/courses/hero'
import Achievers from '@/components/home/achivers'
import DemoBanner from '@/components/home/banner'
import WhatsAppButton from '@/components/home/WhatsApp'
import React from 'react'

export default function Home() {
  return (
    <div  >
        <CourseSection/>
        <WhatsAppButton/>
        <Achievers/>
        <DemoBanner/>
    </div>
  )
}

import OurTeamHeading from '@/components/about/heading'
import Aboutus from '@/components/about/hero'
import LeaderCard from '@/components/about/leader'
import QuoteBox from '@/components/about/quote'
import TeamCard from '@/components/about/teamsection'

import DemoBanner from '@/components/home/banner'

import MissionInspirationVision from '@/components/home/mission'
import WhatsAppButton from '@/components/home/WhatsApp'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-white'>
        <Aboutus/>
        <WhatsAppButton/>
        <LeaderCard/>
        <MissionInspirationVision/>
        <OurTeamHeading/>
        <TeamCard/>
        <QuoteBox/>
        <DemoBanner/>
    </div>
  )
}

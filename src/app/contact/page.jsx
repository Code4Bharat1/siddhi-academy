import ContactCards from '@/components/contactus/contactcard'
import ContctusSection from '@/components/contactus/hero'
import AdmissionBanner from '@/components/home/administorbanner'
import WhatsAppButton from '@/components/home/WhatsApp'
import React from 'react'

export default function Home() {
    return (
        <div >
            <ContctusSection />
            <WhatsAppButton/>
            <ContactCards />
            <AdmissionBanner />
        </div>
    )
}

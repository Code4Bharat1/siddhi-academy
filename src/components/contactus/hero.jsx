import React from 'react';
import Image from "next/image";

export default function ContactUsSection() {
   
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="relative z-0 w-full h-full">
                    <Image
                        src="/contactus.png"
                        alt="Hero Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </div>

            {/* Overlay with text */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:mt-5 lg:px-8">
                <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                Contact Us
                </h1>
               
            </div>
        </div>
    );
}

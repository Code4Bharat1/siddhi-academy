import React from "react";
import Head from "next/head"; // Import Head for SEO
import Image from "next/image"; // Import Image from next/image

export default function HeroSection() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Siddhi Academy - Way to Success</title>
                <meta
                    name="description"
                    content="Siddhi Academy - Unlock your full potential and achieve success through our expert guidance and mentorship."
                />
                <meta property="og:title" content="Siddhi Academy - Way to Success" />
                <meta
                    property="og:description"
                    content="Success is when your Signature becomes Autographs. Join Siddhi Academy for expert coaching and guidance."
                />
                <meta
                    property="og:image"
                    content="https://www.yoursite.com/path-to-your-image/home.jpg" // Replace with your actual image URL
                />
                <meta property="og:url" content="https://www.yoursite.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YourSite" />
                <meta
                    name="twitter:image"
                    content="https://www.yoursite.com/path-to-your-image/home.jpg" // Replace with your actual image URL
                />
            </Head>

            <div className="relative w-full h-[300px] sm:h-[400px] md:h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-black/50 z-0">
                    <div className="relative z-0 w-full h-full">
                        <Image
                            src="/home.jpg"
                            alt="Hero Background"
                            fill // Replaces 'layout="fill"'
                            style={{ objectFit: "cover" }} // Replaces 'objectFit="cover"'
                            priority
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Overlay with text */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:mt-5 lg:px-8">
                    <h1 className="text-white text-xl sm:text-2xl md:text-6xl font-bold">
                        Siddhi Academy - Way to Success
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-3xl mt-4 lg:mt-4">
                        Success is When Your{" "}
                        <span className="text-red-500 font-semibold">Signature</span> Becomes{" "}
                        <span className="text-red-600 font-semibold">Autographs</span>
                    </p>
                </div>
            </div>
        </>
    );
}

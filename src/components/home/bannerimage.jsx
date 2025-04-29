import React from "react";
import Head from "next/head"; // Import Head for SEO
import Image from "next/image";

export default function Bannerimage() {
  return (
    <>
      <Head>
        <title>Banner Image - Siddhi Academy</title>
        <meta
          name="description"
          content="Discover our free demo session through the banner image of Siddhi Academy."
        />
        <meta property="og:title" content="Siddhi Academy Demo Session Banner" />
        <meta
          property="og:description"
          content="Get a glimpse of our free demo session at Siddhi Academy."
        />
        <meta
          property="og:image"
          content="https://www.yoursite.com/path-to-your-banner-image.jpg" // Replace with your image URL
        />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourSite" />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/path-to-your-banner-image.jpg" // Replace with your image URL
        />
      </Head>

      <div className="bg-blue-700 flex justify-end items-end min-h-[200px] relative overflow-hidden px-4 py-6">
        {/* Container to fix image stacking and positioning */}
        <div className="relative w-[300px] h-[300px] flex justify-center items-end mr-20 ">
          {/* White Circle Background */}
          <Image
            src="/whitebackground.png"
            alt="circle background image"
            width={288} // Adjust width as per your design
            height={288} // Adjust height as per your design
            className="w-54 sm:w-72 md:top-6 md:w-70 relative z-10"
          />

          {/* Girl Image */}
          <Image
            src="/girl.png"
            alt="girl demo image"
            width={160} // Adjust width as per your design
            height={160} // Adjust height as per your design
            className="absolute md:top-0 w-40 md:w-50 z-20"
          />

          {/* Small Particle */}
          <Image
            src="/vector1.png"
            alt="small particle decoration"
            width={36} // Adjust width as per your design
            height={36} // Adjust height as per your design
            className="absolute top-8 left-10 md:-top-2 md:-left-1 w-9 md:w-13 z-30 transform rotate-9 md:-rotate-1"
          />

          {/* Blue Particle */}
          <Image
            src="/vector2.png"
            alt="blue particle decoration"
            width={32} // Adjust width as per your design
            height={32} // Adjust height as per your design
            className="absolute top-13 left-17 md:top-2 md:left-10 w-8 md:w-12 z-30 rotate-2 md:-rotate-2"
          />
        </div>
      </div>
    </>
  );
}

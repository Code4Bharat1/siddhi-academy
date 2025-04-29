'use client';

import { motion } from 'framer-motion';
import { FaBook, FaBookOpen, FaCalculator, FaGraduationCap } from "react-icons/fa";
import { GiDualityMask } from "react-icons/gi";
import Head from 'next/head'; // Import Head for SEO

const Logo = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Siddhi Academy - Courses Overview</title>
        <meta
          name="description"
          content="Explore the various educational programs at Siddhi Academy, including courses for 1st to 8th grade, SSC, Commerce, Arts, and Graduation."
        />
        <meta property="og:title" content="Siddhi Academy - Courses Overview" />
        <meta
          property="og:description"
          content="Unlock your potential with Siddhi Academy's wide range of courses for different academic levels, including 1st - 8th grade, SSC, Commerce, Arts, and Graduation."
        />
        <meta
          property="og:image"
          content="https://www.yoursite.com/path-to-your-image/logo-banner.jpg" // Replace with your actual image URL
        />
        <meta property="og:url" content="https://www.yoursite.com/courses" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourSite" />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/path-to-your-image/logo-banner.jpg" // Replace with your actual image URL
        />
      </Head>

      <div className='w-full bg-[#0038D1] py-4 md:py-4 -top-20 md:top-0 z-20 sm:-mt-10 md:mt-0 overflow-x-hidden'>
        <motion.div
          className='flex w-full gap-12 md:gap-17 px-4 lg:px-15'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {[...Array(10)].map((_, index) => (
            <div key={index} className='flex items-center gap-8'>
              <div className="flex items-center gap-8 md:gap-16 text-white text-xl sm:text-sm md:text-lg lg:text-3xl font-semibold">
                {/* 1st - 8th Course */}
                <div className="flex items-center p-2 rounded whitespace-nowrap">
                  <FaBookOpen className="text-white mr-2 text-3xl sm:text-3xl md:text-5xl lg:text-6xl" aria-label="1st - 8th grade courses" />
                  <span className="font-semibold">1st - 8th</span>
                </div>

                {/* SSC Course */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <FaBook className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" aria-label="SSC courses" />
                  <span className="text-white font-semibold">SSC</span>
                </div>

                {/* Commerce Course */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <FaCalculator className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" aria-label="Commerce courses" />
                  <span className="text-white font-semibold">COMMERCE</span>
                </div>

                {/* Arts Course */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <GiDualityMask className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" aria-label="Arts courses" />
                  <span>ARTS</span>
                </div>

                {/* Graduation Course */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <FaGraduationCap className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl" aria-label="Graduation courses" />
                  <span>GRADUATION</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Logo;

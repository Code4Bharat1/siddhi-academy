'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';  // Import Head for SEO
import MissionInspirationVision from './mission';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

export default function SiddhiSection() {
  return (
    <div className='bg-white mb-30 md:mb-30'>
      {/* SEO Metadata */}
      <Head>
        <title>Siddhi Academy - Your Path to Academic Excellence</title>
        <meta
          name="description"
          content="At Siddhi Academy, we provide excellent coaching for SSC, Commerce, and Arts, with a focus on holistic development and result-oriented methods."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, SSC Coaching, Commerce Coaching, Arts Coaching, Thane, Academic Excellence, Student Growth, Mentorship"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Siddhi Academy - Your Path to Academic Excellence" />
        <meta
          property="og:description"
          content="At Siddhi Academy, we help students achieve their academic goals with a focus on holistic growth and guidance in SSC, Commerce, and Arts."
        />
        <meta property="og:image" content="/images/student2.png" />
        <meta property="og:url" content="https://yourwebsite.com/siddhi-academy" />
        <link rel="canonical" href="https://yourwebsite.com/siddhi-academy" />
      </Head>

      <motion.h2
        className="text-xl md:text-3xl font-semibold text-center mb-4 mt-5 md:mt-15"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Siddhi Academy - <span className="text-red-600">Way to Success</span>
      </motion.h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mt-8">
        {/* Left Text */}
        <motion.div
          className="flex-1 space-y-4 md:ml-40 mx-10 md:mx-0 font-Poppins"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm md:text-xl leading-relaxed ">
            At <span className="font-semibold text-red-600">Siddhi Academy</span>, your child’s growth and success are at the core of everything we do. Since our inception in 
            <span className="font-semibold text-red-600"> 2008</span>, we’ve built a legacy rooted in trust, dedication, and academic excellence—shaping young minds by helping them balance 
            <span className="font-semibold text-red-600"> knowledge with application, care with collaboration</span>, and 
            <span className="font-semibold text-red-600"> today’s goals with tomorrow’s dreams.</span>
          </p>
          <p className="text-sm md:text-xl leading-relaxed  ">
            Recognized as a leading coaching institute in <span className="font-semibold text-red-600">Thane</span> for 
            <span className="font-semibold text-red-600"> SSC, Commerce, and Arts</span>, Siddhi Academy stands out for its 
            <span className="font-semibold text-red-600"> student-first approach, result-oriented methods,</span> and holistic development programs.
          </p>
          <p className="text-sm md:text-xl leading-relaxed  ">
            At Siddhi Academy, we’re more than educators—we’re 
            <span className="font-semibold text-red-600"> mentors, guides, and a second family</span>. Because real education is about nurturing 
            <span className="font-semibold text-red-600"> confident, capable individuals</span> ready to lead the future.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 md:mr-30"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/student2.png"
            alt="Siddhi Academy Students"
            width={500}
            height={350}
            className="w-[300px] h-[200px] md:w-[800px] md:h-[500px]"
          />
        </motion.div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0038D1] text-white text-xl font-medium px-20 py-2 rounded-full mt-10 hover:bg-blue-700 transition"
          >
            Know More
          </motion.button>
        </Link>
      </div>

      <MissionInspirationVision />
    </div>
  );
}

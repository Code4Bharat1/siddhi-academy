"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head"; // Import Head for SEO
import Image from "next/image"; // Import Image from next/image

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const iconVariant = {
  hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
};

export default function MissionInspirationVision() {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <title>Our Mission, Inspiration & Vision - Quality Education</title>
        <meta
          name="description"
          content="Learn about our mission to provide quality education, the inspiration behind our journey, and our vision for a better future."
        />
        <meta
          name="keywords"
          content="education, mission, inspiration, vision, quality learning, student growth, guidance"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Mission, Inspiration & Vision" />
        <meta
          property="og:description"
          content="Discover our mission to empower students, our inspirational journey, and our vision for shaping the future of education."
        />
        <meta property="og:image" content="/images/mission-vision-banner.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/mission-vision" />
        <link rel="canonical" href="https://yourwebsite.com/mission-vision" />
      </Head>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-30 px-4 py-10 bg-white select-none">
        {/* Our Mission */}
        <motion.div
          className="w-full md:w-90 p-6 min-h-[300px] bg-[#0038D1] text-white rounded-tr-2xl rounded-bl-2xl transition-all duration-300 hover:bg-[#FF0000] shadow-[-6px_6px_6px_rgba(0,0,0,0.25)] flex flex-col justify-center"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 text-center">Our Mission</h2>
          <p className="text-lg text-center">
            To provide a strong academic foundation for students, with equal focus on discipline, confidence, values, and life skills.
          </p>
        </motion.div>

        {/* Our Inspiration */}
        <motion.div
          className="w-full md:w-90 p-6 min-h-[300px] bg-[#FF0000] text-white rounded-tr-2xl rounded-bl-2xl transition-all duration-300 hover:bg-[#0038D1] shadow-[-6px_6px_6px_rgba(0,0,0,0.25)] flex flex-col justify-center"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 text-center">Our Inspiration</h2>
          <p className="text-lg text-center mt-2">
            Our journey started with the desire to bring quality education to students who lack proper guidance. We’ve seen the difference a good mentor can make – and we strive to be that difference.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="w-full md:w-90 p-6 min-h-[300px] bg-[#0038D1] text-white rounded-tr-2xl rounded-bl-2xl transition-all duration-300 hover:bg-[#FF0000] shadow-[-6px_6px_6px_rgba(0,0,0,0.25)] flex flex-col justify-center"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 text-center">Our Vision</h2>
          <p className="text-lg text-center">
            To build a platform where every student can learn, grow, and succeed with the right guidance and modern teaching tools – true to our motto “Shikale Tar Mi”.
          </p>
        </motion.div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl md:text-4xl text-Hind font-bold text-center md:mb-15">
          Why Choose Us
        </h3>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 justify-items-center bg-white mx-10 md:mx-10">
          {/* Subject Related Guidance */}
          <motion.div
            className="flex flex-col items-center"
            whileHover="hover"
            variants={iconVariant}
          >
            <Image
              src="/sub.jpg"
              alt="Subject Related Guidance"
              width={120} // Set width and height
              height={90}
              className="mt-1 md:-mt-8 object-contain"
            />
            <p className="text-center text-sm md:text-lg font-medium font-Hind text-black">
              Subject Related Guidance
            </p>
          </motion.div>

          {/* Smart Study Concept */}
          <motion.div
            className="flex flex-col items-center bg-white"
            whileHover="hover"
            variants={iconVariant}
          >
            <Image
              src="/smart.png"
              alt="Smart Study Concept"
              width={70}
              height={80}
              className="mt-5 md:-mt-1 object-contain"
            />
            <p className="text-center text-sm md:text-lg font-medium font-Hind text-black">
              Smart Study Concept
            </p>
          </motion.div>

          {/* Digitalized classrooms */}
          <motion.div
            className="flex flex-col items-center bg-white"
            whileHover="hover"
            variants={iconVariant}
          >
            <Image
              src="/e=mc.png"
              alt="Digitalized classrooms"
              width={100}
              height={100}
              className="md:mt-0 object-contain"
            />
            <p className="text-center text-sm md:text-lg font-medium font-Hind text-black">
              Digitalized classrooms
            </p>
          </motion.div>

          {/* Tests & Assessment */}
          <motion.div
            className="flex flex-col items-center bg-white ml-30 md:ml-0 mt-4 md:mt-0"
            whileHover="hover"
            variants={iconVariant}
          >
            <Image
              src="/result.png"
              alt="Tests & Assessment"
              width={80}
              height={80}
              className="mt-4 md:mt-2 object-contain"
            />
            <p className="text-center text-sm md:text-lg font-medium font-Hind text-black">
              Tests & Assessment
            </p>
          </motion.div>

          {/* Personalized Study Plan */}
          <motion.div
            className="flex flex-col items-center bg-white ml-30 md:ml-0 mt-4 md:mt-0"
            whileHover="hover"
            variants={iconVariant}
          >
            <Image
              src="/folder.png"
              alt="Personalized Study Plan"
              width={80}
              height={100}
              className="md:-mt-5 object-contain"
            />
            <p className="text-center text-sm md:text-lg font-medium font-Hind text-black">
              Personalized Study Plan
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client"
import React from "react";
import { motion } from "framer-motion";
import Bannerimage from "./bannerimage";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const DemoBanner = () => {
  return (
    <motion.section
      className="bg-blue-700 text-white overflow-hidden px-4 pb-0 -mt-2 md:-mt-10"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[300px] md:mt-4 md:px-16 gap-6">

        {/* Left Content (Text) */}
        <motion.div
          className="flex-1 text-center md:text-center -mt-6 md:ml-40"
          variants={fadeInVariant}
        >
          <h2 className="text-xl md:text-4xl font-bold whitespace-nowrap">
            BOOK YOUR <span className="text-red-500">FREE DEMO</span> SESSION
          </h2>
          <p className="mt-3 text-lg md:text-3xl">
            Get a free academic counselling session
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/9967363009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-blue-700 font-semibold py-2 px-8 mb-4 md:mb-0 rounded-lg shadow-md hover:bg-gray-100 transition">
                Book a Free Demo
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end ml-20 md:ml-0"
          variants={fadeInVariant}
        >
          <Bannerimage />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DemoBanner;

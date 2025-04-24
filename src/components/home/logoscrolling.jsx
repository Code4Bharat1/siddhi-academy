'use client';

import { motion } from 'framer-motion';
import { FaBook, FaBookOpen, FaCalculator, FaGraduationCap } from "react-icons/fa";
import { GiDualityMask } from "react-icons/gi";

const Logo = () => {
  return (
    <div className='w-full bg-[#0038D1] py-4 md:py-4 -top-20 md:top-0 z-20 sm:-mt-10 md:mt-0 overflow-x-hidden'>
      <motion.div
        className='flex w-full gap-12 md:gap-17 px-4 lg:px-15'
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className='flex items-center gap-8'>
            <div className="flex items-center gap-8 md:gap-16 text-white text-xl sm:text-sm md:text-lg lg:text-3xl font-semibold">
              <div className="flex items-center p-2 rounded whitespace-nowrap">
                <FaBookOpen className="text-white mr-2 text-3xl sm:text-3xl md:text-5xl lg:text-6xl" />
                <span className="font-semibold ">1st - 8th</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <FaBook className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" />
                <span className="text-white font-semibold">SSC</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <FaCalculator className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" />
                <span className="text-white font-semibold">COMMERCE</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <GiDualityMask className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl" />
                <span>ARTS</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <FaGraduationCap className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl" />
                <span>GRADUATION</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;

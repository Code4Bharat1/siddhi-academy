import React from 'react';

export default function Bannerimage() {
  return (
    <div className="bg-blue-700 flex justify-end items-end min-h-[200px] relative overflow-hidden px-4 py-6 ">

      {/* Container to fix image stacking and positioning */}
      <div className="relative w-[300px] h-[300px] flex justify-center items-end mr-20 ">

        {/* White Circle Background */}
        <img
          src="/whitebackground.png"
          alt="circle"
          className="w-54 sm:w-72 md:top-6 md:w-70 relative z-10 "
        />

        {/* Girl Image */}
        <img
          src="/girl.png"
          alt="girl"
          className="absolute md:top-0 w-40 md:w-50 z-20"
        />

        {/* Small Particle */}
        <img
          src="/vector1.png"
          alt="particle-small"
          className="absolute top-8 left-10 md:-top-2 md:-left-1  w-9 md:w-13 z-30 transform rotate-9 md:-rotate-1 "
        />

        {/* Blue Particle */}
        <img
          src="/vector2.png"
          alt="particle-blue"
          className="absolute top-13 left-17 md:top-2 md:left-10 w-8 md:w-12 z-30 rotate-2 md:-rotate-2"
        />

      </div>
    </div>
  );
}

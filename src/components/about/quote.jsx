"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function QuoteBox() {
  return (
    <div className="max-w-xl md:max-w-3xl mx-10 shadow-[0_4px_6px_0_rgba(0,0,0,0.3)] md:mx-100 p-4 border rounded-md relative md:-mt-50 bg-white mb-40 md:mb-20 dark:bg-gray-800 dark:shadow-[0_4px_6px_0_rgba(255,255,255,0.15)]">
   <div className="text-blue-600 text-xl  md:text-3xl absolute top-4 left-4">
        <FaQuoteLeft />
      </div>
      <p className="text-gray-800 text-sm md:text-2xl leading-relaxed pl-10 pr-6 pt-2 pb-4">
        Every student is a spark. With the right support, that spark can become
        a guiding light for the future. <br />
        Siddhi Academy is committed to being that support.
      </p>
      <div className="text-blue-600 text-xl md:text-3xl absolute bottom-4 right-4">
        <FaQuoteRight />
      </div>
    </div>
  );
}

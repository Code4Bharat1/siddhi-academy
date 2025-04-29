"use client";
import React from "react";
import Head from "next/head";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function QuotePage() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Inspiring Education Quote | Siddhi Academy</title>
        <meta
          name="description"
          content="Every student is a spark. Siddhi Academy believes in nurturing that spark into a guiding light for the future."
        />
        <meta name="keywords" content="Siddhi Academy, student motivation, education quotes, academic inspiration, guidance" />
        <meta name="author" content="Siddhi Academy" />
        <meta property="og:title" content="Inspiring Education Quote | Siddhi Academy" />
        <meta property="og:description" content="Every student is a spark. With the right support, that spark can become a guiding light." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/siddhi-academy-logo.png" />
        <meta property="og:url" content="https://siddhiacademy.in/quote" />
        <link rel="canonical" href="https://siddhiacademy.in/quote" />
      </Head>

      {/* Quote Box Content */}
      <main className="flex justify-center items-center mb-1 md:mb-30  px-4">
        <blockquote
          className="max-w-xl md:max-w-3xl mx-auto shadow-[0_4px_6px_0_rgba(0,0,0,0.3)] p-4 border rounded-md relative bg-white mb-40 md:mb-20"
          cite="https://siddhiacademy.in"
        >
          <div className="text-blue-600 text-xl md:text-3xl absolute top-4 left-4" aria-hidden="true">
            <FaQuoteLeft />
          </div>

          <p className="text-gray-800 text-sm md:text-2xl leading-relaxed pl-10 pr-6 pt-2 pb-4">
            Every student is a spark. With the right support, that spark can become
            a guiding light for the future. <br />
            Siddhi Academy is committed to being that support.
          </p>

          <div className="text-blue-600 text-xl md:text-3xl absolute bottom-4 right-4" aria-hidden="true">
            <FaQuoteRight />
          </div>
        </blockquote>
      </main>
    </>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Bannerimage from "./bannerimage";
import Head from "next/head"; // Import Head for SEO

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
    <>
      <Head>
        <title>Book Free Demo Session - Siddhi Academy</title>
        <meta
          name="description"
          content="Book your free demo session at Siddhi Academy and get personalized academic counseling."
        />
        <meta
          property="og:title"
          content="Book Free Demo Session - Siddhi Academy"
        />
        <meta
          property="og:description"
          content="Get expert academic counseling with a free demo session at Siddhi Academy."
        />
        <meta
          property="og:image"
          content="https://www.yoursite.com/path-to-your-banner-image.jpg" // Update this URL to your image
        />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourSite" />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/path-to-your-banner-image.jpg" // Update this URL to your image
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Free Demo Session",
            "startDate": "2025-12-01T10:00:00",
            "location": {
              "@type": "Place",
              "name": "Siddhi Academy",
              "address": "Address of Siddhi Academy"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://wa.me/9967363009",
              "priceCurrency": "INR",
              "price": "0"
            }
          }
          `}
        </script>
      </Head>

      <motion.section
        className="bg-blue-700 text-white overflow-hidden px-4 pb-0 -mt-2 md:-mt-10"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[300px] md:mt-4 md:px-16 gap-6 select-none">
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
                title="Book a free demo session on WhatsApp"
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
            <Bannerimage alt="Siddhi Academy Demo Session Banner" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default DemoBanner;

'use client';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Head from 'next/head';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Head Section for SEO */}
      <Head>
        <title>Contact Us on WhatsApp - Kisan Nagar and Dnyaneshwar Nagar</title>
        <meta
          name="description"
          content="Get in touch with us on WhatsApp for any inquiries. Choose between our Kisan Nagar and Dnyaneshwar Nagar branches."
        />
        <meta
          name="keywords"
          content="WhatsApp, Contact Us, Customer Service, Kisan Nagar, Dnyaneshwar Nagar, Branches, Customer Support"
        />
      </Head>

      {/* WhatsApp Icon Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 z-50 bg-green-600 rounded-full p-3 shadow-lg"
        aria-label="Open WhatsApp Chat"
      >
        <FaWhatsapp size={50} color="white" />
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center" role="dialog" aria-labelledby="whatsapp-branch-modal">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-xl text-gray-700"
              aria-label="Close WhatsApp chat options"
            >
              <IoMdClose />
            </button>

            {/* WhatsApp Branch Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="https://wa.me/917208131213"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
                aria-label="Chat with Kisan Nagar Branch on WhatsApp"
              >
                <FaWhatsapp size={35} /> Kisan Nagar Branch
              </a>
              <a
                href="https://wa.me/919082367246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
                aria-label="Chat with Dnyaneshwar Nagar Branch on WhatsApp"
              >
                <FaWhatsapp size={35} /> Dnyaneshwar Nagar Branch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;

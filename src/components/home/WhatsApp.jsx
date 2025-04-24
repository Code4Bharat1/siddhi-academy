"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* WhatsApp Icon Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 z-50 bg-green-600 rounded-full p-3 shadow-lg"
      >
        <FaWhatsapp size={50} color="white" />
      </button>

      {/* Popup Modal */}
      {isOpen && (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">

          <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-xl text-gray-700"
            >
              <IoMdClose />
            </button>

            {/* WhatsApp Branch Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="https://wa.me/919226524850"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
              >
                <FaWhatsapp size={35} /> Kishan Nagar Branch
              </a>
              <a
                href="https://wa.me/919220169760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
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

'use client'; // If you're using Next.js 13+ with the app directory

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] text-black py-10 px-4 e">
      <div className="max-w-7xl mx-auto">

        {/* Logo for Mobile */}
        <div className="flex justify-center mb-6 lg:hidden">
          <Image 
            src="/logo.png" 
            alt="Siddhi Academy Logo" 
            className="h-16 w-auto" 
            width={200} 
            height={100} 
          />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image 
              src="/logo.png" 
              alt="Siddhi Academy Logo" 
              className="h-20 w-auto mt-5" 
              width={200} 
              height={100} 
            />
          </div>

          {/* Courses */}
          <div className="ml-10">
            <h3 className="font-semibold text-lg mb-2">Courses</h3>
            <ul className="space-y-1 text-md">
              <li>SSC</li>
              <li>Commerce</li>
              <li>Arts</li>
              <li>Under Graduation</li>
            </ul>
          </div>

          {/* About */}
          <div className="-ml-20 space-x-4">
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <p className="text-md">
              Thane’s premier coaching institute for SSC, ICSE, CBSE, Science & Commerce.
              Transforming students via our child-centric, service-oriented focus on results!
            </p>
          </div>

          {/* Contact */}
          <div className="-mr-30">
            <h3 className="font-semibold text-lg mb-1">Contact us</h3>
            <p className="space-y-1 text-md mb-2 mr-2">
              Address: 
              <a 
                href="https://www.google.com/maps?q=Yogiraj+Apartment,+Shop+No.+4,+Kishan+Nagar+3,+Wagle+Estate,+Thane+West+400604" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black"
              >
                Yogiraj Apartment, Shop No. 4, Kisan Nagar 3, Wagle Estate, Thane West 400604
              </a>
            </p>
            <p className="text-md">
              Phone: 
              <a href="tel:+918591870551" className="text-black">+91 8591870551</a>
            </p>
            <p className="text-md">
              Email: 
              <a href="mailto:siddhiacademy385@gmail.com" className="text-black">siddhiacademy385@gmail.com</a>
            </p>

            <div className="flex items-center gap-2 mt-3">
              <p className="text-md font-semibold">Connect With Us</p>
              <a href="https://www.facebook.com/share/18dANBPSxk/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/facebook.svg" 
                  alt="Facebook" 
                  className="h-10 w-10" 
                  width={40} 
                  height={40} 
                />
              </a>
              <a href="https://www.instagram.com/siddhi.academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/insta.svg" 
                  alt="Instagram" 
                  className="h-10 w-10" 
                  width={40} 
                  height={40} 
                />
              </a>
              <a href="https://www.linkedin.com/in/siddhi-academy-631592361/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/linkedin.svg" 
                  alt="LinkedIn" 
                  className="h-10 w-10" 
                  width={40} 
                  height={40} 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View - 3 Columns */}
        <div className="lg:hidden px-4 py-4">
          {/* Courses and About (2-column layout) */}
          <div className="flex flex-wrap justify-between gap-4 text-sm mb-4">
            {/* Courses */}
            <div className="flex-1 min-w-[15%] ml-10">
              <h3 className="font-semibold text-sm mb-2">Courses</h3>
              <ul className="space-y-1 ">
                <li>SSC</li>
                <li>Arts</li>
                <li>Commerce</li>
                <li>UG</li>
              </ul>
            </div>

            {/* About */}
            <div className="flex-1 min-w-[45%] break-words">
              <h3 className="font-semibold text-sm mb-2">About</h3>
              <p className="text-sm">
                Premier coaching for SSC, ICSE, CBSE, Science & Commerce.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-sm ml-10">
            <h3 className="font-semibold text-sm mb-2 mt-4">Contact Us</h3>
            <p>
              <a
                href="https://www.google.com/maps?q=Yogiraj+Apartment,+Shop+No.+4,+Kishan+Nagar+3,+Wagle+Estate,+Thane+West+400604"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Yogiraj Apartment, Shop No. 4, Kisan Nagar 3, Wagle Estate, Thane West 400604
              </a>
            </p>
            <p>
              <a href="tel:+918591870551" className="text-black hover:underline">
                +91 8591870551
              </a>
            </p>
            <p>
              <a href="mailto:siddhiacademy385@gmail.com" className="text-black hover:underline">
                siddhiacademy385@gmail.com
              </a>
            </p>

            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/share/18dANBPSxk/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/facebook.svg" 
                  alt="Facebook" 
                  className="h-8 w-8" 
                  width={32} 
                  height={32} 
                />
              </a>
              <a href="https://www.instagram.com/siddhi.academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/insta.svg" 
                  alt="Instagram" 
                  className="h-8 w-8" 
                  width={32} 
                  height={32} 
                />
              </a>
              <a href="https://www.linkedin.com/in/siddhi-academy-631592361/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/linkedin.svg" 
                  alt="LinkedIn" 
                  className="h-8 w-8" 
                  width={32} 
                  height={32} 
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

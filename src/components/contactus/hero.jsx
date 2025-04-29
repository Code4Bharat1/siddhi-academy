import React from 'react';
import Image from "next/image";
import Head from "next/head";

export default function ContactUsSection() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Contact Us | Your Company</title>
                <meta
                    name="description"
                    content="Reach out to us today! Contact Your Company for more information about our services and how we can assist you."
                />
                <meta
                    name="keywords"
                    content="Contact, Customer Support, Your Company, Inquiries, Reach Us"
                />
                <meta name="author" content="Your Company" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph for social media */}
                <meta property="og:title" content="Contact Us | Your Company" />
                <meta
                    property="og:description"
                    content="Get in touch with Your Company. We're here to help with any questions you have. Contact us today!"
                />
                <meta property="og:image" content="/cont.png" />
                <meta property="og:url" content="https://yourdomain.com/contact" />
                <meta property="og:type" content="website" />

                {/* Structured Data for Local Business */}
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "Your Company",
                          "url": "https://yourdomain.com",
                          "logo": "https://yourdomain.com/logo.png",
                          "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-800-555-5555",
                            "contactType": "Customer Service"
                          }
                        }
                    `}
                </script>
            </Head>

            {/* Contact Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cont.png"
                        alt="Contact Us Background Image"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/10 z-10" />

                {/* Overlay with text */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:-mt-10 lg:px-8">
                    <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                        Contact Us
                    </h1>
                    
                </div>
            </div>
        </>
    );
}

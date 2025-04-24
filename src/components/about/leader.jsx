"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const LeaderCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      name: "Mr. Manohar Ravi Pole",
      title: "Founder & Director",
      image: "/director1.png",
      description: `Mr. Manohar Ravi Phule holds degrees in B.Sc. (IT), B.P.Ed., M.P.Ed., and DSM, and brings 6 years of experience in the coaching field. His diverse educational background and passion for teaching have helped many students discover their true potential. Along with running the academy, he is actively involved in supervising municipal schools in collaboration with D-Mart Foundation.`,
      bgColor: "bg-[#0038D1]",
      textColor: "text-white",
    },
    {
      name: "Mr. Sandeep Gunaji Ninave",
      title: "Founder & Director",
      image: "/director2.png",
      description: `Mr. Sandeep Gunaji Ninave is a Commerce graduate (B.Com) with 12 years of rich experience in the field of commerce education. His subject expertise, discipline, and leadership in handling higher-grade commerce students have brought success to many aspiring students over the years.`,
      bgColor: "bg-[#0038D1]",
      textColor: "text-white",
    },
  ];

  const handleToggle = (index) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  // 🔴 Highlight degrees in red
  const highlightDegrees = (text) => {
    const degreeRegex = /(B\.Sc\. \(IT\)|B\.P\.Ed\.|M\.P\.Ed\.|DSM|B\.Com)/g;
    const parts = text.split(degreeRegex);
    return parts.map((part, index) =>
      degreeRegex.test(part) ? (
        <span key={index} className="text-red-600">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="min-h-screen p-6 bg-white flex flex-col items-center gap-18">
      {cardData.map((card, index) => {
        const isHovered = hoveredIndex === index;
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <div
            ref={ref}
            key={index}
            className={`relative w-full max-w-[90%] sm:max-w-3xl md:max-w-5xl mb-10 transform transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ willChange: "opacity, transform" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleToggle(index)}
          >
            {/* Background */}
            <div
              className={`absolute top-0 left-0 w-full h-full rounded-2xl z-0 transition-all duration-300 ease-in-out ${
                isHovered ? `${card.bgColor} scale-100 md:scale-110` : "bg-gray-100 scale-90 md:scale-100"
              }`}
              style={{
                transformOrigin: "bottom",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 p-6 rounded-2xl bg-transparent backdrop-blur-sm">
              {/* Image and Title */}
              <div className="flex flex-col items-center sm:w-1/2 md:w-1/3 md:-mt-14 -top-20 md:top-0">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-35 h-35 sm:w-40 sm:h-40 md:w-60 md:h-70"
                />
                <div
                  className={`mt-2 px-14 py-3 md:-mt-4 rounded-2xl text-center transition-colors duration-300 ${
                    isHovered ? "bg-white" : card.bgColor
                  }`}
                >
                  <p
                    className={`font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                      isHovered ? "text-black" : card.textColor
                    }`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {card.name}
                  </p>
                  <p
                    className={`text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                      isHovered ? "text-black" : card.textColor
                    }`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="sm:w-1/2 md:w-2/3 text-justify leading-relaxed">
                <p
                  className={`text-sm sm:text-base md:text-2xl transition-colors duration-300 ${
                    isHovered ? "text-white" : "text-black"
                  }`}
                >
                  {highlightDegrees(card.description)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderCard;

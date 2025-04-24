"use client";
import React, { useState, useRef, useEffect } from "react";

export default function TeamCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default is desktop

  // Responsive logic
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile
      } else {
        setCardsToShow(3); // Desktop
      }
    };

    updateCardsToShow(); // Initial setup
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const teamMembers = [
    {
      name: "Yogesh Sir",
      qualification: "MSC CS",
      department: "Maths Department",
      image: "/sir1.png",
      experience: "4+ Years exp",
      bio: "Expert in Computer Science and passionate about helping students excel in maths.",
    },
    {
      name: "Sachin Sir",
      qualification: "B. Com",
      department: "Maths Department",
      image: "/sir2.png",
      experience: "6+ Years exp",
      bio: "Loves making complex topics simple and approachable for every student.",
    },
    {
      name: "Ishwar Rakhme",
      qualification: "B. Com",
      department: "Maths Department",
      image: "/sir3.png",
      experience: "2+ Years exp",
      bio: "Brings energy and clarity to every classroom session with real-world examples.",
    },
    {
      name: "Pankaj Thorat",
      qualification: "B. Com",
      department: "Admin Department",
      image: "/sir4.png",
      experience: "2+ Years exp",
      bio: "Dedicated to building strong mathematical foundations through clear teaching.",
    },
    {
      name: "Abhishek arollkar",
      qualification: "B. Com",
      department: "Admin Department",
      image: "/sir5.png",
      experience: "2+ Years exp",
      bio: "Blends theory and practical for deep computer science understanding.",
    },
  ];

  const scrollToNext = () => {
    const maxIndex = teamMembers.length - cardsToShow;
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
    window.scrollBy({
      top: 0,
      left: 10,
      behavior: "smooth",
    });
  };

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="flex flex-col relative items-center md:mb-30">
      <div className="flex absolute top-50 justify-between items-center w-full">
  <div></div>
  <button
    onClick={scrollToNext}
    className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition -ml-2 md:mr-16"
  >
    &gt;
  </button>
</div>


      <div className="flex justify-start items-center gap-20 p-4 mt-10 md:mt-20">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative w-[270px] h-[420px] mb-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
           <div
  className={`absolute -left-3 rounded-2xl shadow-xl px-6  transition-all duration-300 origin-bottom overflow-hidden ${
    hoveredIndex === index
      ? "bg-blue-600 w-[300px] h-[390px] -top-15"
      : "bg-gray-100 w-[290px] h-[300px] top-0"
  }`}
/>



            <div className="absolute -top-12 md:top-0 left-4 transform  z-20 md:-mt-12">
              <img src={member.image} alt={member.name} className="w-60 h-50" />
            </div>

            <div className="absolute top-17 left-0 transform  w-full px-4 z-20 transition-all duration-300 mt-19">
              <div
                className={`text-center ${
                  hoveredIndex === index ? "bg-gray-100" : "bg-blue-600"
                } rounded-3xl py-2 px-3 transition-all duration-300`}
              >
                <div
                  className={`${
                    hoveredIndex === index ? "bg-gray-100" : "bg-blue-600"
                  } text-white rounded-xl px-4 py-1 w-full transition-all duration-300 ease-in-out ${
                    hoveredIndex === index ? "h-[155px]" : "h-[120px]"
                  }`}
                >
                  <div
                    className={`text-sm rounded-lg text-black mx-10 py-1 mb-1 ${
                      hoveredIndex === index ? "bg-blue-500" : "bg-white"
                    }`}
                  >
                    {member.experience}
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      hoveredIndex === index ? "text-black" : "text-white"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm ${hoveredIndex === index ? "text-black" : "text-white"}`}
                  >
                    {member.qualification}
                  </p>
                  <p
                    className={`text-sm ${hoveredIndex === index ? "text-black" : "text-white"}`}
                  >
                    {member.department}
                  </p>
                  <div
                    className={`text-xs mt-2 transition-opacity duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 text-black"
                        : "opacity-0 text-white"
                    }`}
                  >
                    {member.bio}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

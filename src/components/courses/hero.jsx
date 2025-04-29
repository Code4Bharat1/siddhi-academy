"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Head from "next/head";

export default function CourseSection() {
  const [coursesRef, coursesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const courseList = [
    "1st to 8th",
    "9th & 10th",
    "Commerce",
    "Arts",
    "B. COM",
    "B.A.F",
    "B.B.I",
    "B.M.S",
  ];

  return (
    <>
      <Head>
        <title>Courses | Siddhi Academy</title>
        <meta
          name="description"
          content="Explore the wide range of courses offered by Siddhi Academy, designed to unlock your true potential. Secure your child's future with our expert classes."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, Courses, Education, Classes, Thane, Enroll Now, Mentorship"
        />
        <meta name="author" content="Siddhi Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Courses | Siddhi Academy" />
        <meta
          property="og:description"
          content="Explore our range of courses at Siddhi Academy and give your child the best chance for success with expert mentorship."
        />
        <meta property="og:image" content="/bgcourse1.png" />
        <meta property="og:url" content="https://yourdomain.com/courses" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[300px] md:h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bgcourse1.png"
            alt="Courses Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:-mt-50 lg:px-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
            Courses
          </h1>
        </div>
      </div>

      {/* Course Buttons */}
      <div className="text-center p-6 bg-white" ref={coursesRef}>
        <h2
          className={`text-lg md:text-4xl font-semibold mb-8 text-black transition-all duration-700 ease-out md:mt-10 md:mb-10 ${
            coursesInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          Secure your child’s future with the best classes in Thane!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mx-4 md:mx-30 justify-center">
          {courseList.map((course, idx) => (
            <a
              key={idx}
              href={`https://wa.me/917208131213?text=Hi,%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course)}%20course.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#0038D1] text-white text-xl px-2 py-1 rounded-xl shadow hover:bg-blue-700 transition-all duration-700 ease-out mx-2 text-center
                ${coursesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                transitionDelay: `${coursesInView ? idx * 100 : 0}ms`,
              }}
            >
              <div className="font-semibold">{course}</div>
              <div className="text-lg">Enroll Now &gt;</div>
            </a>
          ))}
        </div>
      </div>

      {/* Why Siddhi Academy */}
      <div
        ref={whyRef}
        className={`max-w-6xl mx-auto px-4 py-10 transition-all duration-700 ease-out ${
          whyInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="bg-[#0038D1] rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-lg">
          <div className="p-6 md:p-8 text-white md:w-[100%] space-y-6 ">
            <h2 className="text-3xl font-semibold">Why Siddhi Academy?</h2>
            <h3 className="text-2xl font-medium text-blue-100">
              Unlock Your True Potential with Personalized Mentorship
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              At Siddhi Academy, we understand that no two students are the same. That’s why we focus on individual
              growth through personal attention, consistent follow-ups, and dedicated mentoring. Our student-first
              culture and results-driven approach ensure every learner gets the support, clarity, and confidence they
              need to thrive—both academically and personally.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center items-center p-2 px-8">
            <div className="rounded-2xl overflow-hidden shadow-lg w-75 h-70 bg-white mb-4 md:mb-0">
              <Image
                src="/s.png"
                alt="Mentor guiding students"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

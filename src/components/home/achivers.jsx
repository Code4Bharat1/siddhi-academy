'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const achievers = [
 
  { name: "Samruddhi Mahale", percent: "92%", img: "/student/student3.jpg", width: 140, height: 140 }, 
  { name: "Ekta kedare", percent: "91%", img: "/student/student4.jpg", width: 130, height: 140 },
  { name: "Ratan kavale", percent: "90%", img: "/student/student6.jpg", width: 170, height: 170 },
  { name: "Pooja mandavkar", percent: "88%", img: "/student/student2.jpg", width: 130, height: 200 },
  { name: "Riya malve", percent: "87%", img: "/student/student5.jpg", width: 140, height: 140 },
  { name: "purva yewale", percent: "86%", img: "/student/purva.jpg", width: 140, height: 140 },
];

export default function Achievers() {
  return (
    <>
      <Head>
        <meta name="description" content="Meet our top achievers at Siddhi Academy, with outstanding exam results and accomplishments." />
        <title>Our Achievers - Siddhi Academy</title>
      </Head>

      <section className="overflow-hidden w-full bg-[#fff] py-6 mt-4 mb-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black" aria-level="2" role="heading">
          Our Achievers
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-10 md:gap-24"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 70,
              ease: 'linear',
            }}
          >
            {[...Array(10)].flatMap((_, loopIndex) =>
              achievers.map((student, index) => (
                <div key={`${loopIndex}-${index}`} className="flex flex-col items-center text-black">
                  <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative">
                    <Image
                      src={student.img}
                      alt={`Achiever: ${student.name} with ${student.percent} marks`}
                      width={student.width}
                      height={student.height}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <div className="mt-2 font-semibold text-center text-xl whitespace-nowrap">
                    {student.name}
                  </div>
                  <div className="text-[#0038D1] font-bold text-2xl">{student.percent}</div>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

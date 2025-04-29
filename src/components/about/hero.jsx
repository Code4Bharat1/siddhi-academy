import Head from "next/head";
import Image from "next/image";

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>About Us | Siddhi Academy - Education in Thane</title>
        <meta
          name="description"
          content="Siddhi Academy is a leading educational institution in Thane, offering quality learning programs, coaching, and skill development for students of all ages."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, Thane Education, Coaching Classes Thane, Best Academy in Thane, Learning Institute, Skill Development"
        />
        <meta name="author" content="Siddhi Academy" />
      </Head>

      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[605px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative z-0 w-full h-full">
            <Image
              src="/about1.png"
              alt="Siddhi Academy educational banner"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Overlay with text */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:mt-5 lg:px-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </section>
    </>
  );
}

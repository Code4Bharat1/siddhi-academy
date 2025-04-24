import Image from "next/image";

export default function Aboutus() {
  return (
    <div className="relative w-full h-[170px] md:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative z-10 text-black">
          <Image
            src="/aboutus.png"
            alt="About Background"
            width={1700}
            height={1500}
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:mt-5 lg:px-8">
            <h1 className="text-white text-lg md-text-3xl lg:text-6xl font-bold">
              About us
            </h1>
           
          </div>
        </div>
      </div>
    
    </div>
  );
}

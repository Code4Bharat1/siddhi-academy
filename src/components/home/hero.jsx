export default function HeroSection() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[620px] overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0  z-0">
                <video
                    className="w-full h-full object-cover"
                    src="/background.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Overlay with text */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:mt-5 lg:px-8">
                <h1 className="text-white text-xl sm:text-2xl md:text-6xl font-bold">
                    Siddhi Academy - Way to Success
                </h1>
                <p className="text-white text-sm sm:text-base md:text-3xl mt-4 lg:mt-4">
                    Success is When Your{" "}
                    <span className="text-red-500 font-semibold">Signature</span> Becomes{" "}
                    <span className="text-red-600 font-semibold">Autographs</span>
                </p>
            </div>
        </div>
    );
}

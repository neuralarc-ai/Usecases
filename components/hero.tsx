import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-left">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-black md:text-7xl lg:text-6xl font-sora">
        Single Intelligent Platform <br /> delivering all your AI<br /> in one place.
        </h1>
        <div className="max-w-2xl text-2xl leading-relaxed text-black md:text-4xl mb-8">
          <p className="mb-2">Stop Juggling Dozens of AI Tools.</p>
          <p>Start Succeeding with One.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer">
          Experience Helium
          <RiArrowRightLine className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}


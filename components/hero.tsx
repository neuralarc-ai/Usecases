import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
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
      <div className="relative z-10 flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-left">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-black md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-sora)" }}>
          One Platform vs Fifteen Tools
        </h1>
        <div className="max-w-2xl text-xl leading-relaxed text-black md:text-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
          <p className="mb-2">Stop Juggling Dozens of AI Tools.</p>
          <p>Start Succeeding with One.</p>
        </div>
      </div>
    </section>
  );
}


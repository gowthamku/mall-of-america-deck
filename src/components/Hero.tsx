import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
  id="overview"
  className="relative h-screen overflow-hidden"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/videos/mall-hero.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/65" />

  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">

    <p className="uppercase tracking-[0.4em] text-gray-300 mb-6">
      Mall of America
    </p>

    <h1 className="max-w-6xl text-4xl md:text-6xl lg:text-[5rem] font-bold leading-tight mb-8">
      Where Brands
      <br />
      Meet Millions
    </h1>

    <p className="text-lg md:text-2xl text-gray-200 max-w-4xl mb-12">
      The ultimate retail, entertainment and
      destination experience attracting over
      40 million visitors every year.
    </p>

    <div className="flex flex-col md:flex-row gap-6">
      <a
        href="#retail"
        className="bg-white text-black px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
      >
        Explore Leasing
      </a>

      <a
        href="#events"
        className="border border-white/30 bg-white/10 backdrop-blur-md px-10 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300"
      >
        Explore Events
      </a>
    </div>

    <div className="absolute bottom-6 animate-bounce text-sm uppercase tracking-[0.3em] text-gray-300">
      ↓ Discover More
    </div>

  </div>
</section>
  );
}
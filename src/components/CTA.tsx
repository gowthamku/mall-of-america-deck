import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Effects */}
      <div className="absolute inset-0">

        <div
          className="
            absolute
            top-[-250px]
            left-[-250px]
            w-[700px]
            h-[700px]
            bg-blue-500/20
            blur-[200px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            right-[-250px]
            w-[700px]
            h-[700px]
            bg-purple-500/20
            blur-[220px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            h-[900px]
            bg-white/5
            blur-[180px]
            rounded-full
          "
        />

      </div>

      <FadeIn>

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-12
            py-20
            rounded-[48px]
            bg-white/[0.04]
            backdrop-blur-2xl
            border
            border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.5)]
          "
        >

          <div className="text-center">

            <p className="uppercase tracking-[0.5em] text-gray-400 mb-8">
              Opportunity Awaits
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold leading-[0.9] mb-10">
              Become Part
              <br />
              Of The Destination
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16">
              40 Million Visitors. 500+ Brands.
              Endless Possibilities.
              <br />
              Join one of the world's most iconic retail
              and entertainment destinations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-20">

              <button
                className="
                  bg-white
                  text-black
                  px-12
                  py-5
                  rounded-2xl
                  font-semibold
                  text-lg
                  shadow-[0_15px_40px_rgba(255,255,255,0.25)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Explore Leasing
              </button>

              <button
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-12
                  py-5
                  rounded-2xl
                  text-lg
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Book Event
              </button>

              <button
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  px-12
                  py-5
                  rounded-2xl
                  text-lg
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Contact Team
              </button>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8">

              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  hover:-translate-y-2
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-5xl font-bold mb-3">
                  40M+
                </h3>

                <p className="text-gray-400">
                  Annual Visitors
                </p>
              </div>

              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  hover:-translate-y-2
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-5xl font-bold mb-3">
                  500+
                </h3>

                <p className="text-gray-400">
                  Retail Brands
                </p>
              </div>

              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  hover:-translate-y-2
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-5xl font-bold mb-3">
                  Global
                </h3>

                <p className="text-gray-400">
                  Destination Appeal
                </p>
              </div>

            </div>

          </div>

        </div>

      </FadeIn>

    </section>
  );
}
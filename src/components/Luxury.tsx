import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Luxury() {
  return (
    <section
      id="luxury"
      className="bg-[#070707] text-white py-24 overflow-hidden"
    >
      <FadeIn direction="right">
        <div className="max-w-screen-2xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[0.4em] text-gray-400 mb-6">
                Luxury Experience
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Elevated
                <br />
                Shopping
                <br />
                Redefined
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-12">
                Premium brands, exceptional experiences,
                and world-class environments combine to
                create one of the most sought-after
                retail destinations in North America.
              </p>

              <div className="grid grid-cols-3 gap-5">

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Premium
                  </h3>
                  <p className="text-gray-400">
                    Environment
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Global
                  </h3>
                  <p className="text-gray-400">
                    Appeal
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Elite
                  </h3>
                  <p className="text-gray-400">
                    Experiences
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="relative">

              {/* Main Image */}
              <Image
                src="/images/luxury1.jpg"
                alt="Luxury Experience"
                width={1200}
                height={800}
                className="
                  w-full
                  h-[650px]
                  object-cover
                  rounded-[40px]
                  hover:scale-[1.02]
                  transition-all
                  duration-700
                "
              />

              {/* Glass Card */}
              <div
                className="
                  absolute
                  left-8
                  bottom-8
                  max-w-[420px]
                  bg-black/75
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  z-10
                  shadow-2xl
                "
              >

                <p className="uppercase tracking-[0.4em] text-gray-400 text-xs mb-4">
                  Luxury Retail
                </p>

                <h3 className="text-5xl font-bold leading-tight mb-4">
                  Premium Brand
                  <br />
                  Presence
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Flagship opportunities for luxury retailers
                  seeking unmatched exposure and destination
                  visibility.
                </p>

              </div>

              {/* Floating Image Top Right */}
              <div
                className="
                  absolute
                  -top-8
                  right-8
                  hidden
                  xl:block
                  z-20
                  animate-float
                "
              >
                <Image
                  src="/images/luxury2.jpg"
                  alt="Luxury Retail"
                  width={260}
                  height={320}
                  className="
                    w-[220px]
                    h-[280px]
                    object-cover
                    rounded-[28px]
                    border
                    border-white/20
                    shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                    rotate-[-6deg]
                  "
                />
              </div>

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}
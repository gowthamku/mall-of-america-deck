
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Retail() {
  return (
    <section
      id="retail"
      className="bg-black text-white py-40 overflow-hidden"
    >
      <FadeIn>
        <div className="max-w-screen-2xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Visual */}
            <div className="relative">

              <Image
                src="/images/retail6.jpg"
                alt="Retail"
                width={1200}
                height={1200}
                className="rounded-[36px] h-[720px] w-full object-cover hover:scale-105 transition duration-700"
              />

              {/* Floating Stat */}
              <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                <h3 className="text-5xl font-bold mb-2">
                  40M+
                </h3>

                <p className="text-gray-300">
                  Annual Visitors
                </p>

              </div>

            </div>

            {/* Right Content */}
            <div>

              <p className="uppercase tracking-[0.4em] text-gray-400 mb-6">
                Retail Excellence
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Built
                <br />
                For Brands
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed">
                Mall of America is home to hundreds of
                global retailers, flagship destinations,
                luxury brands, and emerging concepts.
                It delivers unmatched visibility,
                engagement, and consumer reach.
              </p>

              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-6 mb-10">

                <Image
                  src="/images/retail2.jpg"
                  alt="Retail"
                  width={800}
                  height={600}
                  className="rounded-[28px] h-[260px] w-full object-cover hover:scale-105 transition duration-700"
                />

                <Image
                  src="/images/retail3.jpg"
                  alt="Retail"
                  width={800}
                  height={600}
                  className="rounded-[28px] h-[260px] w-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* Glass Stats */}
              <div className="grid grid-cols-3 gap-5">

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                  <h3 className="text-3xl font-bold mb-2">
                    500+
                  </h3>

                  <p className="text-gray-400">
                    Retailers
                  </p>

                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                  <h3 className="text-3xl font-bold mb-2">
                    Global
                  </h3>

                  <p className="text-gray-400">
                    Brand Presence
                  </p>

                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                  <h3 className="text-3xl font-bold mb-2">
                    Premium
                  </h3>

                  <p className="text-gray-400">
                    Environment
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}


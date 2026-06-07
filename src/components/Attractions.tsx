import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Attractions() {
  return (
    <section
      id="attractions"
      className="bg-black text-white py-40 overflow-hidden"
    >
      <FadeIn>
        <div className="max-w-screen-2xl mx-auto px-8 pt-16">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[0.4em] text-gray-400 mb-6">
                Attractions & Entertainment
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Beyond
                <br />
                Shopping
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed">
                Home to world-famous attractions,
                immersive experiences, and year-round
                entertainment, Mall of America is more
                than retail. It is a destination where
                visitors spend entire days exploring,
                engaging, and creating memories.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
                  <h3 className="text-3xl font-bold mb-2">
                    Family
                  </h3>

                  <p className="text-gray-400">
                    Entertainment
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
                  <h3 className="text-3xl font-bold mb-2">
                    365
                  </h3>

                  <p className="text-gray-400">
                    Days of Experiences
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
                  <h3 className="text-3xl font-bold mb-2">
                    40M+
                  </h3>

                  <p className="text-gray-400">
                    Visitors Annually
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6">

              <Image
                src="/images/attraction4.jpg"
                alt="Attraction"
                width={800}
                height={1000}
                className="rounded-[32px] h-[620px] w-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="space-y-6">

                <Image
                  src="/images/attraction3.jpg"
                  alt="Entertainment"
                  width={800}
                  height={500}
                  className="rounded-[32px] h-[280px] w-full object-cover hover:scale-105 transition duration-700"
                />

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 h-[320px] flex flex-col justify-center">

                  <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
                    Featured Attraction
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Entertainment
                    <br />
                    That Drives Visits
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    Attractions create destination
                    appeal, increase dwell time,
                    and generate repeat visitation.
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
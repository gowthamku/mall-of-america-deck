import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Dining() {
  return (
    <section
      id="dining"
      className="bg-[#f8f8f6] text-black min-h-screen flex items-center py-24 overflow-hidden"
    >
      <FadeIn>
        <div className="max-w-screen-2xl mx-auto px-8 w-full">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[0.35em] text-gray-500 mb-6">
                Dining & Lifestyle
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                More Than
                <br />
                A Meal
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-12">
                Dining is a destination driver. From casual
                favorites to premium culinary experiences,
                Mall of America keeps visitors engaged longer
                and creates unforgettable moments.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5">

                <div className="premium-card rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-4xl font-bold mb-2">
                    100+
                  </h3>
                  <p className="text-gray-500">
                    Dining Options
                  </p>
                </div>

                <div className="premium-card rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-3xl font-bold mb-2">
                    Premium
                  </h3>
                  <p className="text-gray-500">
                    Experiences
                  </p>
                </div>

                <div className="premium-card rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-3xl font-bold mb-2">
                    Lifestyle
                  </h3>
                  <p className="text-gray-500">
                    Destination
                  </p>
                </div>

              </div>

            </div>

            {/* Right Visual */}
            <div className="relative h-[700px]">

              {/* Main Image */}
              <Image
                src="/images/dining1.jpg"
                alt="Dining Experience"
                width={1200}
                height={900}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  rounded-[40px]
                  image-hover
                  shadow-2xl
                "
              />

              {/* Glass Card */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  z-10
                  max-w-[380px]
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-black/10
                  rounded-[32px]
                  p-8
                  shadow-xl
                "
              >
                <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-3">
                  Dining Destination
                </p>

                <h3 className="text-4xl font-bold mb-4 leading-tight">
                  Culinary
                  <br />
                  Experiences
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Dining experiences increase visitor dwell
                  time, encourage exploration, and create
                  memorable moments that drive repeat visits.
                </p>
              </div>

              {/* Floating Image 1 */}
              <div
                className="
                  absolute
                  -top-10
                  right-6
                  hidden
                  xl:block
                  animate-float
                  z-20
                "
              >
                <Image
                  src="/images/dining2.jpg"
                  alt="Premium Dining"
                  width={240}
                  height={300}
                  className="
                    w-[220px]
                    h-[280px]
                    object-cover
                    rounded-[24px]
                    border
                    border-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    rotate-[-6deg]
                  "
                />
              </div>

              {/* Floating Image 2 */}
              <div
                className="
                  absolute
                  top-20
                  right-48
                  hidden
                  xl:block
                  animate-float
                  z-10
                "
                style={{
                  animationDelay: "1s",
                }}
              >
                <Image
                  src="/images/dining3.jpg"
                  alt="Dining Lifestyle"
                  width={220}
                  height={260}
                  className="
                    w-[190px]
                    h-[240px]
                    object-cover
                    rounded-[24px]
                    border
                    border-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    rotate-[8deg]
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
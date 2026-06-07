import FadeIn from "./FadeIn";
import Image from "next/image";

export default function Events() {
  return (
    <section
      id="events"
      className="bg-white py-24 overflow-hidden"
    >
      <FadeIn>
        <div className="max-w-screen-2xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[0.4em] text-gray-500 mb-6">
                Events Platform
              </p>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8">
                Where Brands
                <br />
                Meet Millions
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-12">
                From concerts and product launches to
                sponsorship activations and corporate
                experiences, Mall of America creates
                unmatched opportunities for brands to
                engage with millions of visitors.
              </p>

              <div className="grid grid-cols-2 gap-5">

                <div className="premium-card rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Concerts
                  </h3>
                  <p className="text-gray-500">
                    Live Experiences
                  </p>
                </div>

                <div className="premium-card rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Activations
                  </h3>
                  <p className="text-gray-500">
                    Brand Engagement
                  </p>
                </div>

                <div className="premium-card rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Sponsorships
                  </h3>
                  <p className="text-gray-500">
                    Premium Visibility
                  </p>
                </div>

                <div className="premium-card rounded-3xl p-6">
                  <h3 className="text-3xl font-bold mb-2">
                    Corporate
                  </h3>
                  <p className="text-gray-500">
                    Special Events
                  </p>
                </div>

              </div>

            </div>

            {/* Right Visual */}
            <div className="relative h-[720px]">

              {/* Main Image */}
              <Image
                src="/images/event1.jpg"
                alt="Events"
                width={1400}
                height={900}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  rounded-[42px]
                  shadow-2xl
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />

              {/* Glass Content Card */}
              <div
                className="
                  absolute
                  top-12
                  left-12
                  z-20
                  max-w-[430px]
                  bg-white/85
                  backdrop-blur-2xl
                  rounded-[32px]
                  p-8
                  border
                  border-white/50
                  shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                "
              >

                <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-4">
                  Featured Events
                </p>

                <h3 className="text-5xl font-bold leading-tight mb-5">
                  Premium
                  <br />
                  Brand
                  <br />
                  Activations
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Product launches, celebrity appearances,
                  experiential marketing, sponsorship
                  showcases and unforgettable consumer
                  engagement opportunities.
                </p>

              </div>

              {/* Floating Image Left */}
              <div
                className="
                  absolute
                  -bottom-12
                  left-8
                  z-30
                  hidden
                  xl:block
                  animate-float
                "
              >
                <Image
                  src="/images/event2.jpg"
                  alt="Event Experience"
                  width={260}
                  height={320}
                  className="
                    w-[240px]
                    h-[300px]
                    object-cover
                    rounded-[28px]
                    rotate-[-8deg]
                    border-4
                    border-white
                    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                  "
                />
              </div>

              {/* Floating Image Right */}
              <div
                className="
                  absolute
                  top-10
                  right-[-40px]
                  z-30
                  hidden
                  xl:block
                  animate-float
                "
                style={{
                  animationDelay: "1.5s",
                }}
              >
                <Image
                  src="/images/event3.jpg"
                  alt="Corporate Events"
                  width={280}
                  height={340}
                  className="
                    w-[250px]
                    h-[320px]
                    object-cover
                    rounded-[28px]
                    rotate-[7deg]
                    border-4
                    border-white
                    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                  "
                />
              </div>

              {/* Bottom Info Bar */}
              <div
                className="
                  absolute
                  bottom-8
                  right-8
                  z-20
                  bg-black/70
                  backdrop-blur-xl
                  text-white
                  rounded-[24px]
                  px-8
                  py-5
                  border
                  border-white/10
                "
              >
                <p className="text-sm tracking-[0.25em] uppercase text-white/70">
                  Annual Events
                </p>

                <h4 className="text-4xl font-bold">
                  300+
                </h4>
              </div>

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}
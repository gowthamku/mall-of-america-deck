import FadeIn from "./FadeIn";

export default function WhyProperty() {
  const stats = [
    {
      value: "40M+",
      label: "Annual Visitors",
    },
    {
      value: "500+",
      label: "Retail Brands",
    },
    {
      value: "5.6M",
      label: "Sq Ft Destination",
    },
    {
      value: "100+",
      label: "Dining & Attractions",
    },
  ];

  return (
    <section
      id="why"
      className="bg-white min-h-screen flex items-center py-32 overflow-hidden"
    >
      <FadeIn>
        <div className="max-w-screen-2xl mx-auto px-8 w-full">

          {/* Label */}
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.5em] text-gray-500">
              Why Mall of America
            </p>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-6xl mx-auto mb-24">

            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] mb-8">
              More Than
              <br />
              Shopping
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              A destination where retail,
              entertainment, dining and experiences
              combine to create one of the most
              visited locations in North America.
            </p>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-28">

            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-10
                  text-center
                  shadow-sm
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-5xl md:text-6xl font-black mb-4">
                  {item.value}
                </h3>

                <p className="uppercase tracking-widest text-gray-500 text-sm">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* Story Section */}
          <div className="text-center border-t border-gray-200 pt-24">

            <h3 className="text-5xl md:text-7xl font-black leading-none mb-8">
              40 Million
              <br />
              Reasons To
              <br />
              Be Here
            </h3>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From global retail brands and luxury
              experiences to world-class attractions,
              dining and events, Mall of America
              delivers unmatched visibility and
              engagement opportunities.
            </p>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}
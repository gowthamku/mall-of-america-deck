export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-white font-bold text-2xl tracking-wide">
            Mall of America
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 text-white/80 text-sm uppercase tracking-widest">

          <li>
            <a
              href="#overview"
              className="hover:text-white transition duration-300"
            >
              Overview
            </a>
          </li>

          <li>
            <a
              href="#retail"
              className="hover:text-white transition duration-300"
            >
              Retail
            </a>
          </li>

          <li>
            <a
              href="#luxury"
              className="hover:text-white transition duration-300"
            >
              Luxury
            </a>
          </li>

          <li>
            <a
              href="#dining"
              className="hover:text-white transition duration-300"
            >
              Dining
            </a>
          </li>

          <li>
            <a
              href="#attractions"
              className="hover:text-white transition duration-300"
            >
              Attractions
            </a>
          </li>

          <li>
            <a
              href="#events"
              className="hover:text-white transition duration-300"
            >
              Events
            </a>
          </li>

        </ul>

        {/* CTA */}
        <a
          href="#events"
          className="hidden md:block bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300"
        >
          Book Event
        </a>

      </div>
    </nav>
  );
}
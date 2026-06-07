import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-gray-400 py-16 border-t border-white/10">
           <FadeIn>
      <div className="max-w-screen-2xl mx-auto px-8">

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Brand */}
          <div>
            <h3 className="text-white text-3xl font-bold mb-3">
              Mall of America
            </h3>

            <p className="text-gray-500">
              Interactive Sales Deck Experience
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider">

            <a href="#retail" className="hover:text-white transition">
              Retail
            </a>

            <a href="#luxury" className="hover:text-white transition">
              Luxury
            </a>

            <a href="#dining" className="hover:text-white transition">
              Dining
            </a>

            <a href="#attractions" className="hover:text-white transition">
              Attractions
            </a>

            <a href="#events" className="hover:text-white transition">
              Events
            </a>

          </div>

          {/* CTA */}
          <div className="text-center md:text-right">

            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Contact Team
            </button>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Mall of America Interactive Sales Deck
          </p>

          <p className="text-sm text-gray-500">
            Designed for Leasing, Sponsorship & Event Opportunities
          </p>

        </div>

      </div>
      </FadeIn>
    </footer>
  );
}


import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-cyan-200">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="backdrop-blur-sm/0">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-sky-900 drop-shadow-sm">
            Sail the Digital Ocean
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-sky-800/90 max-w-2xl">
            Immerse yourself in a tranquil seascape with a 2D ship above and a vibrant underwater world below.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#ship" className="px-5 py-3 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow">
              Explore the Ship
            </a>
            <a href="#underwater" className="px-5 py-3 rounded-lg bg-white/80 text-sky-900 hover:bg-white transition-colors shadow">
              Dive Underwater
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-300/60 via-transparent to-transparent" />
    </section>
  )
}

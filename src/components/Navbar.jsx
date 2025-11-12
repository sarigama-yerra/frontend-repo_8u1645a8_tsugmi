export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sky-900 font-extrabold text-xl">SeaScape</a>
        <nav className="hidden sm:flex items-center gap-6 text-sky-900/90">
          <a href="#ship" className="hover:text-sky-900">Ship</a>
          <a href="#underwater" className="hover:text-sky-900">Underwater</a>
          <a href="/test" className="hover:text-sky-900">Backend Test</a>
        </nav>
      </div>
    </header>
  )
}

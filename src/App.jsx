import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ShipSection, UnderwaterSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-200 to-cyan-200 text-sky-900">
      <Navbar />
      <main>
        <Hero />
        <ShipSection />
        <UnderwaterSection />
        <footer className="py-16 text-center text-sky-800">
          Made with calm seas and ocean breeze.
        </footer>
      </main>
    </div>
  )
}

export default App

export function ShipSection() {
  return (
    <section id="ship" className="relative w-full py-24 bg-gradient-to-b from-sky-200 to-sky-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900">Above the Waves</h2>
            <p className="mt-4 text-sky-800/90">
              A peaceful 2D ship sails gently across the ocean surface. Clean lines, soft shadows, and a minimalist aesthetic evoke calm and exploration.
            </p>
            <ul className="mt-6 space-y-3 text-sky-900/90">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-700"/>Hand-drawn style sails and hull</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-700"/>Subtle wave motion accents</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-700"/>Soothing oceanic palette</li>
            </ul>
          </div>
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl">
            <svg viewBox="0 0 800 500" className="w-full h-full">
              <defs>
                <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <rect width="800" height="500" fill="url(#sea)" />
              <g>
                <rect x="0" y="260" width="800" height="240" fill="#7dd3fc" opacity="0.25"/>
                <path d="M100 260 C140 250, 180 270, 220 260 S300 270, 340 260 S420 270, 460 260 S540 270, 580 260 S660 270, 700 260" stroke="#0ea5e9" strokeWidth="4" fill="none" opacity="0.5"/>
              </g>
              <g transform="translate(260,180)">
                <polygon points="0,60 180,60 150,80 30,80" fill="#0c4a6e" />
                <rect x="90" y="-50" width="8" height="110" fill="#78350f" />
                <polygon points="98,-50 160,10 98,10" fill="#f1f5f9" />
                <polygon points="98,-20 150,30 98,30" fill="#e2e8f0" />
                <circle cx="30" cy="30" r="10" fill="#94a3b8" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export function UnderwaterSection() {
  return (
    <section id="underwater" className="relative w-full py-24 bg-gradient-to-b from-cyan-300 to-cyan-700 text-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl bg-cyan-900/30">
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <defs>
                  <radialGradient id="light" cx="30%" cy="0%" r="80%">
                    <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="800" height="500" fill="#0e7490" />
                <rect width="800" height="500" fill="url(#light)" />
                <g opacity="0.7">
                  <ellipse cx="120" cy="450" rx="220" ry="40" fill="#164e63" />
                  <ellipse cx="420" cy="470" rx="240" ry="30" fill="#155e75" />
                </g>
                <g fill="#06b6d4" opacity="0.85">
                  <circle cx="620" cy="200" r="6" />
                  <circle cx="635" cy="180" r="4" />
                  <circle cx="648" cy="160" r="3" />
                </g>
                <g>
                  <path d="M200 300 C240 280 260 280 300 300 C340 320 360 320 400 300 C440 280 460 280 500 300" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.35" />
                  <path d="M150 340 C190 320 210 320 250 340 C290 360 310 360 350 340 C390 320 410 320 450 340" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.25" />
                </g>
                <g transform="translate(120,320)">
                  <ellipse cx="0" cy="0" rx="18" ry="10" fill="#0ea5e9" />
                  <path d="M-18 0 C-30 -4 -30 4 -18 0 Z" fill="#0284c7" />
                </g>
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Beneath the Surface</h2>
            <p className="mt-4 text-cyan-50/90">
              Dive into a serene underwater scene with soft caustics, gentle currents, and playful bubbles rising to the surface.
            </p>
            <ul className="mt-6 space-y-3 text-cyan-50/90">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-200"/>Coral silhouettes and reef shapes</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-200"/>Floating particles for depth</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-200"/>Glow accents for bioluminescence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

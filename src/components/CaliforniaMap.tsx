import Link from "next/link";
import { getPhoneLink } from "@/lib/utils";
import { business } from "@/config/business";

const mapCities = [
  { name: "San Francisco", slug: "san-francisco-ca", x: 88, y: 155 },
  { name: "Oakland", slug: "oakland-ca", x: 105, y: 160 },
  { name: "San Jose", slug: "san-jose-ca", x: 100, y: 185 },
  { name: "Sacramento", slug: "sacramento-ca", x: 130, y: 120 },
  { name: "Stockton", slug: "stockton-ca", x: 135, y: 145 },
  { name: "Fresno", slug: "fresno-ca", x: 155, y: 210 },
  { name: "Bakersfield", slug: "bakersfield-ca", x: 170, y: 260 },
  { name: "Los Angeles", slug: "los-angeles-ca", x: 175, y: 315 },
  { name: "Long Beach", slug: "long-beach-ca", x: 190, y: 325 },
  { name: "Anaheim", slug: "anaheim-ca", x: 200, y: 320 },
  { name: "Irvine", slug: "irvine-ca", x: 205, y: 330 },
  { name: "Santa Ana", slug: "santa-ana-ca", x: 198, y: 325 },
  { name: "San Diego", slug: "san-diego-ca", x: 210, y: 370 },
  { name: "Riverside", slug: "riverside-ca", x: 220, y: 315 },
];

export default function CaliforniaMap() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--navy)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Serving All of California
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Our licensed electricians provide professional residential and
              commercial electrical services throughout the state — from San
              Diego to Sacramento, and everywhere in between. No matter where
              you are in California, quality electrical service is just a
              phone call away.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { region: "Southern California", cities: "LA, San Diego, Irvine, Anaheim" },
                { region: "Bay Area", cities: "SF, Oakland, San Jose" },
                { region: "Central Valley", cities: "Fresno, Bakersfield, Stockton" },
                { region: "Northern California", cities: "Sacramento & surrounding" },
              ].map((r) => (
                <div key={r.region} className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="text-sm font-semibold text-[var(--accent)] mb-1">
                    {r.region}
                  </div>
                  <div className="text-xs text-white/60">{r.cities}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phone}
              </a>
              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                View All Service Areas
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              viewBox="0 0 320 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-sm h-auto"
              aria-label="California service area map"
              role="img"
            >
              {/* California state outline (simplified) */}
              <path
                d="M75 10 L55 30 L45 55 L40 80 L42 100 L50 115 L60 120 L65 130 L70 140
                   L75 148 L78 155 L80 165 L82 175 L85 190 L90 200 L95 210 L100 220
                   L110 235 L120 245 L130 255 L140 265 L150 275 L160 285 L165 295
                   L170 305 L175 315 L180 320 L185 325 L195 335 L205 345 L215 355
                   L220 365 L225 375 L230 385 L225 395 L215 400 L205 395
                   L195 385 L200 370 L210 360 L215 350 L220 340 L225 330
                   L230 320 L235 310 L240 300 L245 290 L250 275 L252 260
                   L250 245 L245 230 L240 215 L235 200 L230 185 L225 170
                   L220 155 L210 140 L200 125 L190 115 L180 105 L170 95
                   L160 85 L150 75 L140 65 L130 55 L120 45 L110 35 L100 25
                   L90 18 L80 12 Z"
                fill="#1a3a5c"
                stroke="#2d5a8c"
                strokeWidth="2"
              />

              {/* Subtle gradient overlay */}
              <path
                d="M75 10 L55 30 L45 55 L40 80 L42 100 L50 115 L60 120 L65 130 L70 140
                   L75 148 L78 155 L80 165 L82 175 L85 190 L90 200 L95 210 L100 220
                   L110 235 L120 245 L130 255 L140 265 L150 275 L160 285 L165 295
                   L170 305 L175 315 L180 320 L185 325 L195 335 L205 345 L215 355
                   L220 365 L225 375 L230 385 L225 395 L215 400 L205 395
                   L195 385 L200 370 L210 360 L215 350 L220 340 L225 330
                   L230 320 L235 310 L240 300 L245 290 L250 275 L252 260
                   L250 245 L245 230 L240 215 L235 200 L230 185 L225 170
                   L220 155 L210 140 L200 125 L190 115 L180 105 L170 95
                   L160 85 L150 75 L140 65 L130 55 L120 45 L110 35 L100 25
                   L90 18 L80 12 Z"
                fill="url(#mapGradient)"
                opacity="0.3"
              />

              <defs>
                <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f5c518" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              {/* City markers */}
              {mapCities.map((city) => (
                <g key={city.slug}>
                  {/* Pulse ring */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="8"
                    fill="#f5c518"
                    opacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      values="6;12;6"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;0.05;0.2"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="4"
                    fill="#f5c518"
                    stroke="#0f1b2d"
                    strokeWidth="1.5"
                  />
                </g>
              ))}

              {/* Key city labels */}
              <text x="60" y="152" fill="#f5c518" fontSize="9" fontWeight="bold" fontFamily="system-ui">San Francisco</text>
              <text x="140" y="115" fill="white" fontSize="8" fontFamily="system-ui" opacity="0.8">Sacramento</text>
              <text x="165" y="207" fill="white" fontSize="8" fontFamily="system-ui" opacity="0.8">Fresno</text>
              <text x="140" y="312" fill="#f5c518" fontSize="9" fontWeight="bold" fontFamily="system-ui">Los Angeles</text>
              <text x="220" y="367" fill="#f5c518" fontSize="9" fontWeight="bold" fontFamily="system-ui">San Diego</text>
              <text x="108" y="182" fill="white" fontSize="8" fontFamily="system-ui" opacity="0.8">San Jose</text>
              <text x="230" y="312" fill="white" fontSize="8" fontFamily="system-ui" opacity="0.8">Riverside</text>

              {/* "14+ Cities" badge */}
              <rect x="20" y="360" width="100" height="36" rx="8" fill="#f5c518" />
              <text x="70" y="375" textAnchor="middle" fill="#0f1b2d" fontSize="11" fontWeight="bold" fontFamily="system-ui">14+ Cities</text>
              <text x="70" y="389" textAnchor="middle" fill="#0f1b2d" fontSize="8" fontFamily="system-ui">Statewide Service</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

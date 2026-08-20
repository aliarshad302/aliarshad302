export default function HeroImage({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
      >
        <rect width="600" height="400" fill="#1a2d47" />
        <rect x="40" y="60" width="180" height="280" rx="8" fill="#243b5c" stroke="#2d4a6f" strokeWidth="2" />
        <rect x="55" y="80" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="110" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="140" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="170" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="200" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="230" width="150" height="20" rx="4" fill="#2d4a6f" />
        <rect x="55" y="260" width="150" height="20" rx="4" fill="#2d4a6f" />
        {/* breaker switches */}
        {[80, 110, 140, 170, 200, 230, 260].map((y, i) => (
          <rect key={i} x="170" y={y + 3} width="20" height="14" rx="3" fill={i < 5 ? "#f5c518" : "#4a6fa5"} />
        ))}
        {/* main switch */}
        <rect x="55" y="295" width="150" height="30" rx="4" fill="#f5c518" opacity="0.9" />
        <text x="130" y="315" textAnchor="middle" fill="#0f1b2d" fontSize="11" fontWeight="bold" fontFamily="system-ui">MAIN 200A</text>
        {/* wires */}
        <path d="M220 150 C260 150, 260 100, 300 100" stroke="#f5c518" strokeWidth="3" strokeLinecap="round" />
        <path d="M220 180 C260 180, 280 180, 300 180" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
        <path d="M220 210 C260 210, 260 260, 300 260" stroke="#3498db" strokeWidth="3" strokeLinecap="round" />
        {/* outlet */}
        <rect x="300" y="70" width="80" height="60" rx="8" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />
        <rect x="320" y="85" width="12" height="6" rx="2" fill="#555" />
        <rect x="348" y="85" width="12" height="6" rx="2" fill="#555" />
        <circle cx="340" cy="110" r="5" fill="#555" />
        {/* GFCI outlet */}
        <rect x="300" y="150" width="80" height="80" rx="8" fill="#f5f5f5" stroke="#d0d0d0" strokeWidth="2" />
        <rect x="320" y="165" width="12" height="6" rx="2" fill="#555" />
        <rect x="348" y="165" width="12" height="6" rx="2" fill="#555" />
        <rect x="325" y="185" width="30" height="12" rx="3" fill="#e74c3c" />
        <text x="340" y="194" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">TEST</text>
        <rect x="325" y="202" width="30" height="12" rx="3" fill="#2ecc71" />
        <text x="340" y="211" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">RESET</text>
        {/* EV Charger */}
        <rect x="300" y="245" width="80" height="95" rx="12" fill="#243b5c" stroke="#3d5a80" strokeWidth="2" />
        <circle cx="340" cy="275" r="15" fill="#2d4a6f" stroke="#f5c518" strokeWidth="2" />
        <path d="M335 270 L340 278 L345 270" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="318" y="300" width="44" height="8" rx="4" fill="#f5c518" opacity="0.3" />
        <rect x="318" y="300" width="30" height="8" rx="4" fill="#f5c518" />
        <text x="340" y="325" textAnchor="middle" fill="#8faabe" fontSize="8" fontFamily="system-ui">EV CHARGER</text>
        {/* light fixture */}
        <path d="M460 40 L460 80" stroke="#888" strokeWidth="2" />
        <path d="M430 80 Q460 60 490 80" stroke="#f5c518" strokeWidth="2" fill="none" />
        <path d="M435 85 Q460 70 485 85 Q460 100 435 85Z" fill="#f5c518" opacity="0.6" />
        <circle cx="460" cy="85" r="12" fill="#f5c518" opacity="0.3" />
        <circle cx="460" cy="85" r="6" fill="#f5c518" opacity="0.6" />
        {/* multimeter */}
        <rect x="420" y="140" width="80" height="110" rx="10" fill="#2c3e50" stroke="#34495e" strokeWidth="2" />
        <rect x="435" y="155" width="50" height="35" rx="4" fill="#1a252f" />
        <text x="460" y="178" textAnchor="middle" fill="#2ecc71" fontSize="16" fontWeight="bold" fontFamily="monospace">120V</text>
        <circle cx="460" cy="215" r="15" fill="#34495e" stroke="#4a6fa5" strokeWidth="2" />
        <line x1="460" y1="207" x2="465" y2="200" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" />
        {/* hard hat */}
        <path d="M430 280 Q460 250 490 280 L490 295 Q460 290 430 295Z" fill="#f5c518" />
        <rect x="425" y="293" width="70" height="8" rx="2" fill="#e6b800" />
        {/* safety glasses */}
        <ellipse cx="448" cy="320" rx="12" ry="8" fill="none" stroke="#aaa" strokeWidth="2" />
        <ellipse cx="472" cy="320" rx="12" ry="8" fill="none" stroke="#aaa" strokeWidth="2" />
        <line x1="460" y1="318" x2="460" y2="318" stroke="#aaa" strokeWidth="2" />
        <line x1="436" y1="316" x2="428" y2="312" stroke="#aaa" strokeWidth="2" />
        <line x1="484" y1="316" x2="492" y2="312" stroke="#aaa" strokeWidth="2" />
        {/* decorative bolt */}
        <path d="M540 340 L550 360 L542 360 L548 385 L530 355 L538 355Z" fill="#f5c518" opacity="0.15" />
        <path d="M30 30 L38 45 L33 45 L38 62 L25 42 L30 42Z" fill="#f5c518" opacity="0.1" />
      </svg>
    </div>
  );
}

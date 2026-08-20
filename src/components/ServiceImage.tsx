import type { ReactElement } from "react";

interface ServiceImageProps {
  service: string;
  className?: string;
}

const illustrations: Record<string, ReactElement> = {
  "emergency-electrician": (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="260" rx="12" fill="#1a2d47" />
      <circle cx="200" cy="100" r="60" fill="#2d4a6f" opacity="0.5" />
      <circle cx="200" cy="100" r="40" fill="#2d4a6f" opacity="0.7" />
      <path d="M190 75 L200 100 L210 75 L215 100 L195 115 L200 100Z" fill="#f5c518" />
      <path d="M195 115 L205 130 L200 100Z" fill="#e6b800" />
      <text x="200" y="170" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="system-ui">24/7 EMERGENCY</text>
      <text x="200" y="190" textAnchor="middle" fill="#8faabe" fontSize="11" fontFamily="system-ui">Fast Response When You Need It Most</text>
      <circle cx="80" cy="50" r="4" fill="#e74c3c" opacity="0.6"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="320" cy="210" r="4" fill="#e74c3c" opacity="0.4"><animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" /></circle>
      <circle cx="350" cy="60" r="3" fill="#f5c518" opacity="0.3"><animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" /></circle>
    </svg>
  ),
  "electrical-panel-upgrade": (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="260" rx="12" fill="#1a2d47" />
      <rect x="120" y="30" width="160" height="200" rx="6" fill="#243b5c" stroke="#3d5a80" strokeWidth="2" />
      <rect x="135" y="50" width="130" height="15" rx="3" fill="#2d4a6f" />
      <rect x="260" y="53" width="10" height="9" rx="2" fill="#f5c518" />
      {[75, 95, 115, 135, 155, 175, 195].map((y, i) => (
        <g key={i}>
          <rect x="135" y={y} width="130" height="12" rx="2" fill="#2d4a6f" />
          <rect x="250" y={y + 1} width="16" height="10" rx="2" fill={i < 6 ? "#2ecc71" : "#e74c3c"} />
          <text x="148" y={y + 10} fill="#6b8db5" fontSize="7" fontFamily="monospace">{["20A","20A","15A","30A","50A","20A","15A"][i]}</text>
        </g>
      ))}
      <text x="200" y="242" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="system-ui">200 AMP PANEL UPGRADE</text>
      <path d="M50 120 C80 120, 100 80, 120 80" stroke="#f5c518" strokeWidth="2" strokeDasharray="6 3" />
      <path d="M280 150 C300 150, 320 180, 350 180" stroke="#3498db" strokeWidth="2" strokeDasharray="6 3" />
    </svg>
  ),
  "ev-charger-installation": (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="260" rx="12" fill="#1a2d47" />
      <rect x="155" y="25" width="90" height="140" rx="12" fill="#243b5c" stroke="#3d5a80" strokeWidth="2" />
      <circle cx="200" cy="70" r="25" fill="#2d4a6f" stroke="#f5c518" strokeWidth="3" />
      <path d="M193 60 L200 73 L207 60" stroke="#f5c518" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="172" y="108" width="56" height="10" rx="5" fill="#2d4a6f" />
      <rect x="172" y="108" width="38" height="10" rx="5" fill="#2ecc71" />
      <text x="200" y="148" textAnchor="middle" fill="#6b8db5" fontSize="8" fontFamily="system-ui">LEVEL 2</text>
      <path d="M200 165 Q200 190 180 200 Q160 210 160 230" stroke="#555" strokeWidth="6" strokeLinecap="round" />
      <rect x="148" y="225" width="24" height="15" rx="4" fill="#555" />
      <rect x="60" y="180" width="60" height="35" rx="8" fill="#243b5c" />
      <rect x="60" y="215" width="60" height="30" rx="4" fill="#2d4a6f" />
      <circle cx="75" cy="195" r="5" fill="#f5c518" opacity="0.6" />
      <circle cx="105" cy="195" r="5" fill="#f5c518" opacity="0.6" />
      <rect x="280" y="180" width="60" height="35" rx="8" fill="#243b5c" />
      <rect x="280" y="215" width="60" height="30" rx="4" fill="#2d4a6f" />
      <circle cx="295" cy="195" r="5" fill="#2ecc71" opacity="0.6" />
      <circle cx="325" cy="195" r="5" fill="#2ecc71" opacity="0.6" />
      <text x="200" y="256" textAnchor="middle" fill="#8faabe" fontSize="10" fontFamily="system-ui">Home &amp; Commercial EV Charging</text>
    </svg>
  ),
  default: (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="260" rx="12" fill="#1a2d47" />
      <circle cx="200" cy="110" r="50" fill="#243b5c" />
      <circle cx="200" cy="110" r="35" fill="#2d4a6f" />
      <path d="M192 90 L198 110 L204 90 L208 110 L196 120 L200 110Z" fill="#f5c518" />
      <circle cx="200" cy="110" r="55" fill="none" stroke="#3d5a80" strokeWidth="1" strokeDasharray="4 4" />
      <text x="200" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">PROFESSIONAL SERVICE</text>
      <text x="200" y="215" textAnchor="middle" fill="#8faabe" fontSize="10" fontFamily="system-ui">Licensed California Electricians</text>
    </svg>
  ),
};

export default function ServiceImage({ service, className = "" }: ServiceImageProps) {
  const illustration = illustrations[service] || illustrations.default;
  return (
    <div className={`overflow-hidden rounded-xl ${className}`} role="img" aria-label={`${service.replace(/-/g, " ")} illustration`}>
      {illustration}
    </div>
  );
}

import { palettes } from '../data/palettes'

// Renders a stylised "browser window" mockup whose internal layout changes
// per industry, so each project card feels like a real distinct product
// rather than a stock photo or repeated template.
export default function ProjectVisual({ industry, palette = 'blue', className = '' }) {
  const c = palettes[palette] || palettes.blue
  const gradId = `grad-${palette}-${industry.replace(/\s+/g, '')}`

  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${industry} website mockup`}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
      </defs>

      <rect width="480" height="320" rx="18" fill={c.soft} />

      {/* Browser chrome */}
      <rect x="0" y="0" width="480" height="34" rx="18" fill="white" />
      <rect x="0" y="18" width="480" height="16" fill="white" />
      <circle cx="20" cy="17" r="4.5" fill="#F87171" />
      <circle cx="36" cy="17" r="4.5" fill="#FBBF24" />
      <circle cx="52" cy="17" r="4.5" fill="#34D399" />
      <rect x="80" y="10" width="220" height="14" rx="7" fill="#F1F5F9" />

      {/* Content varies by industry */}
      {industry === 'Hotel' && (
        <>
          <rect x="24" y="56" width="200" height="130" rx="12" fill={`url(#${gradId})`} />
          <rect x="236" y="56" width="220" height="60" rx="10" fill="white" />
          <rect x="252" y="70" width="140" height="10" rx="5" fill={c.text} opacity="0.7" />
          <rect x="252" y="88" width="90" height="8" rx="4" fill="#CBD5E1" />
          <rect x="236" y="126" width="220" height="60" rx="10" fill="white" />
          <rect x="252" y="140" width="120" height="10" rx="5" fill={c.text} opacity="0.7" />
          <rect x="252" y="158" width="70" height="8" rx="4" fill="#CBD5E1" />
          <rect x="24" y="204" width="432" height="90" rx="10" fill="white" />
          <rect x="44" y="222" width="90" height="8" rx="4" fill="#94A3B8" />
          <rect x="44" y="238" width="60" height="8" rx="4" fill="#94A3B8" />
          <rect x="360" y="222" width="76" height="34" rx="17" fill={c.from} />
        </>
      )}

      {industry === 'Restaurant' && (
        <>
          <rect x="24" y="56" width="432" height="94" rx="12" fill={`url(#${gradId})`} />
          <rect x="44" y="80" width="180" height="14" rx="7" fill="white" opacity="0.9" />
          <rect x="44" y="102" width="120" height="9" rx="4.5" fill="white" opacity="0.6" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={24 + i * 148} y="166" width="132" height="118" rx="10" fill="white" />
              <rect x={24 + i * 148 + 16} y="182" width="100" height="60" rx="8" fill={c.soft} />
              <rect x={24 + i * 148 + 16} y="252" width="80" height="9" rx="4.5" fill="#94A3B8" />
              <rect x={24 + i * 148 + 16} y="266" width="50" height="8" rx="4" fill={c.text} opacity="0.6" />
            </g>
          ))}
        </>
      )}

      {industry === 'Healthcare' && (
        <>
          <rect x="24" y="56" width="180" height="228" rx="12" fill="white" />
          <circle cx="72" cy="96" r="20" fill={c.soft} />
          <rect x="102" y="88" width="80" height="9" rx="4.5" fill="#94A3B8" />
          <rect x="102" y="104" width="56" height="8" rx="4" fill="#CBD5E1" />
          <rect x="44" y="140" width="160" height="34" rx="8" fill={c.soft} />
          <rect x="44" y="184" width="160" height="34" rx="8" fill="white" stroke="#E2E8F0" />
          <rect x="44" y="228" width="160" height="34" rx="8" fill="white" stroke="#E2E8F0" />
          <rect x="220" y="56" width="236" height="228" rx="12" fill={`url(#${gradId})`} />
          <rect x="244" y="80" width="140" height="12" rx="6" fill="white" opacity="0.9" />
          <rect x="244" y="100" width="188" height="8" rx="4" fill="white" opacity="0.55" />
          <rect x="244" y="230" width="110" height="32" rx="16" fill="white" />
        </>
      )}

      {industry === 'Gym' && (
        <>
          <rect x="24" y="56" width="432" height="130" rx="12" fill="#0F172A" />
          <rect x="48" y="90" width="220" height="16" rx="8" fill="white" opacity="0.95" />
          <rect x="48" y="116" width="150" height="10" rx="5" fill="white" opacity="0.5" />
          <rect x="48" y="146" width="110" height="34" rx="17" fill={c.from} />
          <path d={`M320 150 L340 100 L360 150 L380 70 L400 150`} stroke={c.to} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={24 + i * 148} y="204" width="132" height="80" rx="10" fill="white" />
              <rect x={24 + i * 148 + 16} y="220" width="60" height="10" rx="5" fill={c.text} opacity="0.7" />
              <rect x={24 + i * 148 + 16} y="238" width="90" height="8" rx="4" fill="#CBD5E1" />
              <rect x={24 + i * 148 + 16} y="254" width="70" height="8" rx="4" fill="#CBD5E1" />
            </g>
          ))}
        </>
      )}

      {industry === 'E-commerce' && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={24 + (i % 2) * 220} y={56 + Math.floor(i / 2) * 118} width="200" height="100" rx="10" fill="white" />
              <rect x={24 + (i % 2) * 220 + 12} y={56 + Math.floor(i / 2) * 118 + 12} width="176" height="56" rx="8" fill={i % 2 === 0 ? c.soft : `url(#${gradId})`} opacity={i % 2 === 0 ? 1 : 0.9} />
              <rect x={24 + (i % 2) * 220 + 12} y={56 + Math.floor(i / 2) * 118 + 76} width="90" height="8" rx="4" fill="#94A3B8" />
              <rect x={24 + (i % 2) * 220 + 148} y={56 + Math.floor(i / 2) * 118 + 74} width="48" height="16" rx="8" fill={c.from} />
            </g>
          ))}
        </>
      )}

      {(industry === 'Business') && (
        <>
          <rect x="24" y="56" width="240" height="228" rx="12" fill="white" />
          <rect x="44" y="84" width="160" height="16" rx="8" fill={c.text} opacity="0.85" />
          <rect x="44" y="110" width="190" height="10" rx="5" fill="#94A3B8" />
          <rect x="44" y="126" width="150" height="10" rx="5" fill="#CBD5E1" />
          <rect x="44" y="160" width="120" height="34" rx="17" fill={c.from} />
          <rect x="44" y="216" width="90" height="8" rx="4" fill="#CBD5E1" />
          <rect x="44" y="232" width="70" height="8" rx="4" fill="#E2E8F0" />
          <rect x="280" y="56" width="176" height="106" rx="12" fill={`url(#${gradId})`} />
          <rect x="280" y="174" width="176" height="110" rx="12" fill={c.soft} />
          <rect x="300" y="192" width="90" height="9" rx="4.5" fill={c.text} opacity="0.7" />
          <rect x="300" y="208" width="120" height="8" rx="4" fill="#CBD5E1" />
        </>
      )}
    </svg>
  )
}

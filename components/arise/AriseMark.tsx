export function AriseMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Horizon line */}
      <line x1="5" y1="28" x2="35" y2="28"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      {/* Rising arc */}
      <path d="M12 28 A8 8 0 0 1 28 28"
        fill="none" stroke="white" strokeWidth="2" />
      {/* Center glow point */}
      <circle cx="20" cy="28" r="1.8" fill="#F5D68A" />
      {/* Rays */}
      <line x1="20" y1="17" x2="20" y2="11"
        stroke="#F5D68A" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="19" x2="30" y2="15"
        stroke="#F5D68A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="19" x2="10" y2="15"
        stroke="#F5D68A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="23" x2="33" y2="21"
        stroke="#F5D68A" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="23" x2="7" y2="21"
        stroke="#F5D68A" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

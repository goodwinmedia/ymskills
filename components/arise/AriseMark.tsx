export function AriseMark({ size = 28, color = 'white' }: { size?: number; color?: string }) {
  const rays = 16
  const cx = 50
  const cy = 50
  const innerR = 18
  const outerR = 44
  const strokeW = 5.5
  const lines: React.ReactNode[] = []
  for (let i = 0; i < rays; i++) {
    const angle = (i * 360) / rays - 90
    const rad = (angle * Math.PI) / 180
    const x1 = cx + innerR * Math.cos(rad)
    const y1 = cy + innerR * Math.sin(rad)
    const x2 = cx + outerR * Math.cos(rad)
    const y2 = cy + outerR * Math.sin(rad)
    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {lines}
    </svg>
  )
}

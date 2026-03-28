'use client'

import { Dimension, DIMENSION_LABELS, DIMENSION_SUBTITLES, DIMENSION_COLORS } from '@/lib/data/types'

const dimensions: Dimension[] = ['spiritual', 'social', 'physical', 'intellectual']

interface DimensionTabsProps {
  active: Dimension
  onChange: (d: Dimension) => void
}

export function DimensionTabs({ active, onChange }: DimensionTabsProps) {
  return (
    <div className="flex gap-1.5 px-3 py-2 overflow-x-auto no-scrollbar">
      {dimensions.map((d) => {
        const isActive = d === active
        const colors = DIMENSION_COLORS[d]
        return (
          <button
            key={d}
            onClick={() => onChange(d)}
            className="flex-1 min-h-[44px] min-w-0 px-2 py-1.5 rounded-full text-center transition-colors"
            style={
              isActive
                ? { backgroundColor: colors.base, color: 'white' }
                : {
                    backgroundColor: 'transparent',
                    color: colors.base,
                    boxShadow: `inset 0 0 0 1.5px ${colors.base}`,
                  }
            }
          >
            <div className="text-xs font-medium">{DIMENSION_LABELS[d]}</div>
            <div
              className="text-[8px] leading-tight"
              style={{ opacity: isActive ? 0.7 : 0.5 }}
            >
              {DIMENSION_SUBTITLES[d]}
            </div>
          </button>
        )
      })}
    </div>
  )
}

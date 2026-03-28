'use client'

import { Dimension, DIMENSION_LABELS, DIMENSION_SUBTITLES, DIMENSION_COLORS } from '@/lib/data/types'

const dimensions: Dimension[] = ['spiritual', 'social', 'physical', 'intellectual']

interface DimensionTabsProps {
  active: Dimension
  onChange: (d: Dimension) => void
}

export function DimensionTabs({ active, onChange }: DimensionTabsProps) {
  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto">
      {dimensions.map((d) => {
        const isActive = d === active
        const colors = DIMENSION_COLORS[d]
        return (
          <button
            key={d}
            onClick={() => onChange(d)}
            className="min-h-[44px] px-4 py-1.5 rounded-full text-center transition-colors whitespace-nowrap"
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
            <div className="text-sm font-medium">{DIMENSION_LABELS[d]}</div>
            <div
              className="text-[9px]"
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

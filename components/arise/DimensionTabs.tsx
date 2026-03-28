'use client'

import { Dimension, DIMENSION_LABELS, DIMENSION_COLORS } from '@/lib/data/types'

const dimensions: Dimension[] = ['spiritual', 'mental', 'physical', 'emotional']

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
            className="min-h-[44px] px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
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
            {DIMENSION_LABELS[d]}
          </button>
        )
      })}
    </div>
  )
}

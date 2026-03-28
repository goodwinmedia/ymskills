'use client'

import { Dimension, DIMENSION_COLORS, DIMENSION_LABELS, QUORUM_LABELS, Quorum } from '@/lib/data/types'

interface ProgressBarProps {
  completed: number
  total: number
  quorum: Quorum
  dimension: Dimension
}

export function ProgressBar({ completed, total, quorum, dimension }: ProgressBarProps) {
  const colors = DIMENSION_COLORS[dimension]
  const pct = total > 0 ? (completed / total) * 100 : 0

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="text-gray-600">
          {completed} of {total} completed
        </span>
        <span className="text-gray-400 text-xs">
          {QUORUM_LABELS[quorum].label} · {DIMENSION_LABELS[dimension]}
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: colors.base }}
        />
      </div>
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import {
  Activity,
  Quorum,
  Dimension,
  QUORUM_LABELS,
  DIMENSION_LABELS,
  DIMENSION_COLORS,
} from '@/lib/data/types'
import { activities } from '@/lib/data/activities'
import { getCustomActivities } from '@/lib/custom-activities'
import { ProgressStore } from '@/lib/progress'

const quorums: Quorum[] = ['deacons', 'teachers', 'priests']
const dimensions: Dimension[] = ['spiritual', 'social', 'physical', 'intellectual']

interface ProgressGridProps {
  progress: ProgressStore
}

export function ProgressGrid({ progress }: ProgressGridProps) {
  const router = useRouter()
  const custom = getCustomActivities()
  const allActivities: Activity[] = [...activities, ...custom]

  function getStats(q: Quorum, d: Dimension) {
    const acts = allActivities.filter((a) => a.quorum === q && a.dimension === d)
    const done = acts.filter((a) => !!progress[a.id]).length
    return { done, total: acts.length }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left text-xs text-gray-400 font-normal" />
            {dimensions.map((d) => (
              <th
                key={d}
                className="p-2 text-center text-xs font-medium"
                style={{ color: DIMENSION_COLORS[d].base }}
              >
                {DIMENSION_LABELS[d]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {quorums.map((q) => (
            <tr key={q}>
              <td className="p-2 text-sm font-medium text-gray-700">
                {QUORUM_LABELS[q].label}
              </td>
              {dimensions.map((d) => {
                const { done, total } = getStats(q, d)
                const pct = total > 0 ? (done / total) * 100 : 0
                const colors = DIMENSION_COLORS[d]
                return (
                  <td key={d} className="p-2">
                    <button
                      onClick={() =>
                        router.push(`/activities?q=${q}&d=${d}`)
                      }
                      aria-label={`${QUORUM_LABELS[q].label} ${DIMENSION_LABELS[d]}: ${done} of ${total} completed`}
                      className="w-full min-h-[44px] rounded-lg p-2 transition-colors hover:opacity-80"
                      style={{ backgroundColor: colors.light }}
                    >
                      <div
                        className="text-sm font-medium"
                        style={{ color: colors.base }}
                      >
                        {done} / {total}
                      </div>
                      <div className="h-1 bg-white/60 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: colors.base,
                          }}
                        />
                      </div>
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

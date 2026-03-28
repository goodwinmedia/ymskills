'use client'

import { Quorum, QUORUM_LABELS } from '@/lib/data/types'

const quorums: Quorum[] = ['deacons', 'teachers', 'priests']

interface QuorumTabsProps {
  active: Quorum
  onChange: (q: Quorum) => void
}

export function QuorumTabs({ active, onChange }: QuorumTabsProps) {
  return (
    <div className="flex border-b border-gray-200">
      {quorums.map((q) => {
        const isActive = q === active
        return (
          <button
            key={q}
            onClick={() => onChange(q)}
            className={`flex-1 min-h-[44px] px-2 py-1.5 text-center transition-colors ${
              isActive
                ? 'border-b-2 border-arise-navy text-arise-navy font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-sm">{QUORUM_LABELS[q].label}</span>
            <span className="text-[10px] text-gray-400 ml-1">{QUORUM_LABELS[q].ages}</span>
          </button>
        )
      })}
    </div>
  )
}

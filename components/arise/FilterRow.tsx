'use client'

import { ActivityType, Tag } from '@/lib/data/types'

type FilterValue = 'all' | ActivityType | Tag

interface FilterRowProps {
  activeType: ActivityType | 'all'
  activeTag: Tag | 'all'
  onTypeChange: (t: ActivityType | 'all') => void
  onTagChange: (t: Tag | 'all') => void
}

const TYPE_FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'group', label: 'Group' },
  { value: 'personal', label: 'Personal' },
]

const TAG_FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'mission', label: 'Mission prep' },
  { value: 'father', label: 'Fatherhood' },
  { value: 'career', label: 'Career' },
]

export function FilterRow({ activeType, activeTag, onTypeChange, onTagChange }: FilterRowProps) {
  return (
    <div className="flex gap-2 px-3 py-2 pb-3 overflow-x-auto no-scrollbar">
      {TYPE_FILTERS.map((f) => {
        const isActive =
          f.value === 'all'
            ? activeType === 'all' && activeTag === 'all'
            : f.value === activeType
        return (
          <button
            key={f.value}
            onClick={() => onTypeChange(f.value as ActivityType | 'all')}
            className={`min-h-[44px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              isActive
                ? 'bg-white text-arise-navy'
                : 'text-white/60 hover:text-white/80'
            }`}
            style={!isActive ? { boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' } : {}}
          >
            {f.label}
          </button>
        )
      })}
      <div className="w-px bg-white/15 mx-0.5 self-stretch" />
      {TAG_FILTERS.map((f) => {
        const isActive = f.value === activeTag
        return (
          <button
            key={f.value}
            onClick={() => onTagChange(f.value as Tag)}
            className={`min-h-[44px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              isActive
                ? 'bg-white text-arise-navy'
                : 'text-white/60 hover:text-white/80'
            }`}
            style={!isActive ? { boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' } : {}}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}

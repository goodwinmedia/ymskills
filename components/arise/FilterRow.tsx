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
    <div className="flex gap-2 px-4 py-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      {TYPE_FILTERS.map((f) => {
        const isActive = f.value === activeType && activeTag === 'all'
        return (
          <button
            key={f.value}
            onClick={() => {
              onTypeChange(f.value as ActivityType | 'all')
              onTagChange('all')
            }}
            className={`min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              isActive
                ? 'bg-arise-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        )
      })}
      <div className="w-px bg-gray-200 mx-1 self-stretch" />
      {TAG_FILTERS.map((f) => {
        const isActive = f.value === activeTag
        return (
          <button
            key={f.value}
            onClick={() => {
              onTagChange(f.value as Tag)
              onTypeChange('all')
            }}
            className={`min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              isActive
                ? 'bg-arise-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}

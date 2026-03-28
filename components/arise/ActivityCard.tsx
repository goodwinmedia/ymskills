'use client'

import { useState } from 'react'
import { Activity, DIMENSION_COLORS, TAG_LABELS } from '@/lib/data/types'
import { CompletionEntry } from '@/lib/progress'

interface ActivityCardProps {
  activity: Activity
  isOpen: boolean
  onToggle: () => void
  completionEntry: CompletionEntry | null
  onMarkComplete: (note?: string) => void
  onMarkIncomplete: () => void
}

const TYPE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  group: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Group activity' },
  personal: { bg: 'bg-green-100', text: 'text-green-700', label: 'Personal challenge' },
  both: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Both' },
}

const TAG_STYLES: Record<string, { bg: string; text: string }> = {
  mission: { bg: 'bg-blue-50', text: 'text-blue-600' },
  father: { bg: 'bg-amber-50', text: 'text-amber-600' },
  career: { bg: 'bg-green-50', text: 'text-green-600' },
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function ActivityCard({
  activity,
  isOpen,
  onToggle,
  completionEntry,
  onMarkComplete,
  onMarkIncomplete,
}: ActivityCardProps) {
  const [note, setNote] = useState('')
  const isComplete = !!completionEntry
  const colors = DIMENSION_COLORS[activity.dimension]
  const typeStyle = TYPE_STYLES[activity.type]

  return (
    <div
      className={`rounded-lg border transition-all ${
        isComplete ? 'opacity-60 bg-gray-50' : 'bg-white'
      }`}
      style={isOpen ? { borderColor: colors.base, borderWidth: '1.5px' } : {}}
    >
      <button
        onClick={onToggle}
        className="w-full min-h-[44px] p-4 text-left flex items-start gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${typeStyle.bg} ${typeStyle.text}`}
            >
              {typeStyle.label}
            </span>
            {activity.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${TAG_STYLES[tag].bg} ${TAG_STYLES[tag].text}`}
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </div>
          <div className="text-[15px] font-medium text-gray-900">{activity.title}</div>
          <div className="text-[13px] italic text-gray-500 mt-0.5">{activity.principle}</div>
          {isComplete && (
            <div className="flex items-center gap-1.5 mt-1.5 text-[12px] text-gray-400">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Done {formatDate(completionEntry.completedAt)}
            </div>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 mt-1 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-3">
            <p className="text-[14px] leading-[1.65] text-gray-700">{activity.description}</p>

            {!isComplete ? (
              <div className="mt-4 space-y-3">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note, e.g. Oct 15 activity night…"
                  className="w-full px-3 py-2 text-sm border rounded-md resize-none h-16 focus:outline-none focus:ring-2 focus:ring-offset-1"
                  style={{ focusRingColor: colors.base } as React.CSSProperties}
                />
                <button
                  onClick={() => {
                    onMarkComplete(note.trim() || undefined)
                    setNote('')
                  }}
                  className="min-h-[44px] px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: colors.base }}
                >
                  Mark complete
                </button>
              </div>
            ) : (
              <div className="mt-4">
                {completionEntry.note && (
                  <p className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Note:</span> {completionEntry.note}
                  </p>
                )}
                <button
                  onClick={onMarkIncomplete}
                  className="text-sm text-gray-400 underline hover:text-gray-600 min-h-[44px]"
                >
                  Mark incomplete
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

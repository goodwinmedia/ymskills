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
  isCustom?: boolean
  onDelete?: () => void
}

const TYPE_STYLES: Record<string, { label: string }> = {
  group: { label: 'Group' },
  personal: { label: 'Personal' },
  both: { label: 'Group + Personal' },
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
  isCustom,
  onDelete,
}: ActivityCardProps) {
  const [note, setNote] = useState('')
  const isComplete = !!completionEntry
  const colors = DIMENSION_COLORS[activity.dimension]
  const typeStyle = TYPE_STYLES[activity.type]

  return (
    <div
      className={`rounded-xl transition-all ${
        isComplete ? 'opacity-50' : 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
      }`}
      style={
        isOpen
          ? { boxShadow: `0 0 0 1.5px ${colors.base}, 0 2px 8px rgba(0,0,0,0.08)` }
          : isComplete
          ? { backgroundColor: '#f7f7f5' }
          : undefined
      }
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full min-h-[44px] px-4 py-3 text-left flex items-start gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-semibold text-gray-900 leading-snug">{activity.title}</div>
          <div className="text-[13px] text-gray-400 mt-0.5 leading-snug">{activity.principle}</div>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="inline-block px-2 py-px rounded-full text-[10px] font-medium text-gray-500 bg-gray-100">
              {typeStyle.label}
            </span>
            {isCustom && (
              <span className="inline-block px-2 py-px rounded-full text-[10px] font-medium text-purple-500 bg-purple-50">
                Custom
              </span>
            )}
            {activity.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-px rounded-full text-[10px] font-medium text-gray-400 bg-gray-50"
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
            {isComplete && (
              <span className="inline-flex items-center gap-1 text-[10px] text-green-600 font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {formatDate(completionEntry.completedAt)}
              </span>
            )}
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-300 mt-0.5 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-3">
            <p className="text-[14px] leading-relaxed text-gray-600">{activity.description}</p>

            {!isComplete ? (
              <div className="mt-4 space-y-3">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note, e.g. Oct 15 activity night…"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none h-16 focus:outline-none focus:ring-2 focus:ring-offset-1"
                  style={{ '--tw-ring-color': colors.base } as React.CSSProperties}
                />
                <button
                  onClick={() => {
                    onMarkComplete(note.trim() || undefined)
                    setNote('')
                  }}
                  className="min-h-[44px] w-full px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
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

            {isCustom && onDelete && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <button
                  onClick={onDelete}
                  className="text-sm text-red-400 hover:text-red-600 min-h-[44px] flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete custom activity
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

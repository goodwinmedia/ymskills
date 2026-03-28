'use client'

import { useState } from 'react'
import {
  Quorum,
  Dimension,
  ActivityType,
  Tag,
  QUORUM_LABELS,
  DIMENSION_LABELS,
  DIMENSION_COLORS,
} from '@/lib/data/types'
import { addCustomActivity } from '@/lib/custom-activities'

interface AddActivityFormProps {
  quorum: Quorum
  dimension: Dimension
  onClose: () => void
  onAdded: () => void
}

const TYPES: { value: ActivityType; label: string }[] = [
  { value: 'group', label: 'Group' },
  { value: 'personal', label: 'Personal' },
  { value: 'both', label: 'Both' },
]

const TAGS: { value: Tag; label: string }[] = [
  { value: 'mission', label: 'Mission prep' },
  { value: 'father', label: 'Fatherhood' },
  { value: 'career', label: 'Career' },
]

export function AddActivityForm({ quorum, dimension, onClose, onAdded }: AddActivityFormProps) {
  const [title, setTitle] = useState('')
  const [principle, setPrinciple] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<ActivityType>('group')
  const [tags, setTags] = useState<Tag[]>([])

  const colors = DIMENSION_COLORS[dimension]

  function toggleTag(tag: Tag) {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !principle.trim() || !description.trim()) return

    addCustomActivity({
      quorum,
      dimension,
      type,
      title: title.trim(),
      principle: principle.trim(),
      description: description.trim(),
      tags,
    })
    onAdded()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-50 w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-serif font-semibold text-arise-navy">Add Activity</h2>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
            {QUORUM_LABELS[quorum].label}
          </span>
          <span
            className="px-2 py-0.5 rounded text-xs font-medium text-white"
            style={{ backgroundColor: colors.base }}
          >
            {DIMENSION_LABELS[dimension]}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Scripture Study Marathon"
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': colors.base } as React.CSSProperties}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Principle <span className="font-normal text-gray-400">— the &quot;why&quot;</span>
            </label>
            <input
              type="text"
              value={principle}
              onChange={(e) => setPrinciple(e.target.value)}
              placeholder="e.g. Consistent study builds lasting habits"
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the full activity…"
              className="w-full px-3 py-2 text-sm border rounded-md resize-none h-24 focus:outline-none focus:ring-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <div className="flex gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setType(t.value)}
                  className={`min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    type === t.value
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  style={type === t.value ? { backgroundColor: colors.base } : {}}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <div className="flex gap-2 flex-wrap">
              {TAGS.map((t) => {
                const active = tags.includes(t.value)
                return (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => toggleTag(t.value)}
                    className={`min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      active
                        ? 'bg-arise-navy text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {t.label}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full min-h-[44px] rounded-md text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: colors.base }}
          >
            Add Activity
          </button>
        </form>
      </div>
    </div>
  )
}

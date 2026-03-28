'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Quorum, Dimension, ActivityType, Tag, DIMENSION_COLORS } from '@/lib/data/types'
import { getByQuorumAndDimension } from '@/lib/data/activities'
import {
  getProgress,
  markComplete,
  markIncomplete,
  ProgressStore,
} from '@/lib/progress'
import { getCustomActivities, deleteCustomActivity, isCustomActivity } from '@/lib/custom-activities'
import { QuorumTabs } from './QuorumTabs'
import { DimensionTabs } from './DimensionTabs'
import { FilterRow } from './FilterRow'
import { ActivityCard } from './ActivityCard'
import { ProgressBar } from './ProgressBar'
import { AddActivityForm } from './AddActivityForm'

export function ActivityBrowser() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const quorum = (searchParams.get('q') as Quorum) || 'deacons'
  const dimension = (searchParams.get('d') as Dimension) || 'spiritual'
  const typeFilter = (searchParams.get('type') as ActivityType | 'all') || 'all'
  const tagFilter = (searchParams.get('tag') as Tag | 'all') || 'all'

  const [openId, setOpenId] = useState<string | null>(null)
  const [progress, setProgress] = useState<ProgressStore>({})
  const [showAddForm, setShowAddForm] = useState(false)
  const [customVersion, setCustomVersion] = useState(0)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString())
      for (const [key, value] of Object.entries(updates)) {
        params.set(key, value)
      }
      router.push(`/activities?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  const builtInActivities = getByQuorumAndDimension(quorum, dimension)
  const customActivities = getCustomActivities().filter(
    (a) => a.quorum === quorum && a.dimension === dimension
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = customVersion // trigger re-render when custom activities change
  const allActivities = [...builtInActivities, ...customActivities]

  let filtered = allActivities
  if (typeFilter !== 'all') {
    filtered = filtered.filter(
      (a) => a.type === typeFilter || a.type === 'both'
    )
  }
  if (tagFilter !== 'all') {
    filtered = filtered.filter((a) => a.tags.includes(tagFilter))
  }

  const completedCount = allActivities.filter((a) => !!progress[a.id]).length

  function handleMarkComplete(id: string, note?: string) {
    markComplete(id, note)
    setProgress(getProgress())
  }

  function handleMarkIncomplete(id: string) {
    markIncomplete(id)
    setProgress(getProgress())
  }

  function handleDeleteCustom(id: string) {
    deleteCustomActivity(id)
    markIncomplete(id)
    setProgress(getProgress())
    setCustomVersion((v) => v + 1)
    setOpenId(null)
  }

  const colors = DIMENSION_COLORS[dimension]

  return (
    <div className="pb-20">
      <div className="bg-arise-navy">
        <QuorumTabs
          active={quorum}
          onChange={(q) => {
            updateParams({ q, type: 'all', tag: 'all' })
            setOpenId(null)
          }}
        />
        <DimensionTabs
          active={dimension}
          onChange={(d) => {
            updateParams({ d, type: 'all', tag: 'all' })
            setOpenId(null)
          }}
        />
        <FilterRow
          activeType={typeFilter}
          activeTag={tagFilter}
          onTypeChange={(t) => updateParams({ type: t, tag: 'all' })}
          onTagChange={(t) => updateParams({ tag: t, type: 'all' })}
        />
      </div>
      <div className="px-4 py-3 space-y-3">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            No activities match this filter.
          </p>
        ) : (
          filtered.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isOpen={openId === activity.id}
              onToggle={() =>
                setOpenId(openId === activity.id ? null : activity.id)
              }
              completionEntry={progress[activity.id] ?? null}
              onMarkComplete={(note) => handleMarkComplete(activity.id, note)}
              onMarkIncomplete={() => handleMarkIncomplete(activity.id)}
              isCustom={isCustomActivity(activity.id)}
              onDelete={
                isCustomActivity(activity.id)
                  ? () => handleDeleteCustom(activity.id)
                  : undefined
              }
            />
          ))
        )}
      </div>

      {/* Add Activity FAB */}
      <button
        onClick={() => setShowAddForm(true)}
        className="fixed bottom-[72px] right-4 z-10 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: colors.base }}
        aria-label="Add custom activity"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <ProgressBar
        completed={completedCount}
        total={allActivities.length}
        quorum={quorum}
        dimension={dimension}
      />

      {showAddForm && (
        <AddActivityForm
          quorum={quorum}
          dimension={dimension}
          onClose={() => setShowAddForm(false)}
          onAdded={() => setCustomVersion((v) => v + 1)}
        />
      )}
    </div>
  )
}

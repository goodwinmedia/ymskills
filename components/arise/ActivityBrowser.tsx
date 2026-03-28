'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Quorum, Dimension, ActivityType, Tag } from '@/lib/data/types'
import { getByQuorumAndDimension } from '@/lib/data/activities'
import {
  getProgress,
  markComplete,
  markIncomplete,
  ProgressStore,
} from '@/lib/progress'
import { QuorumTabs } from './QuorumTabs'
import { DimensionTabs } from './DimensionTabs'
import { FilterRow } from './FilterRow'
import { ActivityCard } from './ActivityCard'
import { ProgressBar } from './ProgressBar'

export function ActivityBrowser() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const quorum = (searchParams.get('q') as Quorum) || 'deacons'
  const dimension = (searchParams.get('d') as Dimension) || 'spiritual'
  const typeFilter = (searchParams.get('type') as ActivityType | 'all') || 'all'
  const tagFilter = (searchParams.get('tag') as Tag | 'all') || 'all'

  const [openId, setOpenId] = useState<string | null>(null)
  const [progress, setProgress] = useState<ProgressStore>({})

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

  const allActivities = getByQuorumAndDimension(quorum, dimension)

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

  return (
    <div className="pb-20">
      <QuorumTabs
        active={quorum}
        onChange={(q) => {
          updateParams({ q })
          setOpenId(null)
        }}
      />
      <DimensionTabs
        active={dimension}
        onChange={(d) => {
          updateParams({ d })
          setOpenId(null)
        }}
      />
      <FilterRow
        activeType={typeFilter}
        activeTag={tagFilter}
        onTypeChange={(t) => updateParams({ type: t, tag: 'all' })}
        onTagChange={(t) => updateParams({ tag: t, type: 'all' })}
      />
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
            />
          ))
        )}
      </div>
      <ProgressBar
        completed={completedCount}
        total={allActivities.length}
        quorum={quorum}
        dimension={dimension}
      />
    </div>
  )
}

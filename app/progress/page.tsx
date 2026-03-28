'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ProgressGrid } from '@/components/arise/ProgressGrid'
import { activities } from '@/lib/data/activities'
import { getCustomActivities } from '@/lib/custom-activities'
import { getProgress, clearAllProgress, ProgressStore } from '@/lib/progress'
import { Activity, DIMENSION_COLORS, DIMENSION_LABELS, QUORUM_LABELS } from '@/lib/data/types'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ProgressPage() {
  const [progress, setProgress] = useState<ProgressStore>({})

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const allActivities: Activity[] = [...activities, ...getCustomActivities()]

  const completedActivities = allActivities
    .filter((a) => !!progress[a.id])
    .map((a) => ({ ...a, entry: progress[a.id] }))
    .sort(
      (a, b) =>
        new Date(b.entry.completedAt).getTime() -
        new Date(a.entry.completedAt).getTime()
    )

  const totalCompleted = completedActivities.length

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-serif font-semibold text-arise-navy mb-1">Progress</h1>
      <p className="text-sm text-gray-500 mb-6">
        {totalCompleted} of {allActivities.length} activities completed
      </p>

      <ProgressGrid progress={progress} />

      {totalCompleted === 0 && (
        <div className="mt-8 text-center py-8">
          <p className="text-sm text-gray-400 mb-3">No activities completed yet.</p>
          <Link
            href="/activities"
            className="text-sm font-medium text-arise-navy underline underline-offset-2"
          >
            Browse activities to get started
          </Link>
        </div>
      )}

      {completedActivities.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Completed Activities</h2>
          <div className="space-y-2">
            {completedActivities.map((a) => (
              <div key={a.id} className="flex items-start gap-3 p-3 rounded-lg bg-white shadow-sm">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: DIMENSION_COLORS[a.dimension].base }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800">{a.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {QUORUM_LABELS[a.quorum].label} · {DIMENSION_LABELS[a.dimension]} ·{' '}
                    {formatDate(a.entry.completedAt)}
                  </div>
                  {a.entry.note && (
                    <div className="text-xs text-gray-500 mt-1 italic">{a.entry.note}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {totalCompleted > 0 && (
        <div className="mt-8 pb-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="min-h-[44px] px-4 py-2 text-sm text-red-500 border border-red-200 rounded-md hover:bg-red-50 transition-colors">
                Clear all progress
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear all progress?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove all completion records from this browser. This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    clearAllProgress()
                    setProgress({})
                  }}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Clear all
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  )
}

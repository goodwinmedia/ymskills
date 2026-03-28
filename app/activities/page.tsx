import { Suspense } from 'react'
import { ActivityBrowser } from '@/components/arise/ActivityBrowser'

export default function ActivitiesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading…</div>}>
      <ActivityBrowser />
    </Suspense>
  )
}

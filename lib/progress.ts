export interface CompletionEntry {
  completedAt: string
  note?: string
}

export type ProgressStore = Record<string, CompletionEntry>

const KEY = 'arise_progress'

export function getProgress(): ProgressStore {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function markComplete(activityId: string, note?: string): void {
  const store = getProgress()
  store[activityId] = { completedAt: new Date().toISOString(), note }
  localStorage.setItem(KEY, JSON.stringify(store))
}

export function markIncomplete(activityId: string): void {
  const store = getProgress()
  delete store[activityId]
  localStorage.setItem(KEY, JSON.stringify(store))
}

export function isComplete(activityId: string): boolean {
  return !!getProgress()[activityId]
}

export function getCompletionEntry(activityId: string): CompletionEntry | null {
  return getProgress()[activityId] ?? null
}

export function clearAllProgress(): void {
  localStorage.removeItem(KEY)
}

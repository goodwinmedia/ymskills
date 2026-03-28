import { Activity } from './data/types'

const KEY = 'arise_custom_activities'

export function getCustomActivities(): Activity[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]')
  } catch {
    return []
  }
}

export function addCustomActivity(
  activity: Omit<Activity, 'id'>
): Activity {
  const items = getCustomActivities()
  const newActivity: Activity = {
    ...activity,
    id: `custom-${Date.now()}`,
  }
  items.push(newActivity)
  localStorage.setItem(KEY, JSON.stringify(items))
  return newActivity
}

export function deleteCustomActivity(id: string): void {
  const items = getCustomActivities().filter((a) => a.id !== id)
  localStorage.setItem(KEY, JSON.stringify(items))
}

export function isCustomActivity(id: string): boolean {
  return id.startsWith('custom-')
}

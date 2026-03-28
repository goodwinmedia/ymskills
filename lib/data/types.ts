export type Quorum = 'deacons' | 'teachers' | 'priests'
export type Dimension = 'spiritual' | 'social' | 'physical' | 'intellectual'
export type ActivityType = 'group' | 'personal' | 'both'
export type Tag = 'mission' | 'father' | 'career'

export interface Activity {
  id: string
  quorum: Quorum
  dimension: Dimension
  type: ActivityType
  title: string
  principle: string
  description: string
  tags: Tag[]
}

export const QUORUM_LABELS: Record<Quorum, { label: string; ages: string }> = {
  deacons: { label: 'Deacons', ages: '12–13' },
  teachers: { label: 'Teachers', ages: '14–15' },
  priests: { label: 'Priests', ages: '16–18' },
}

export const DIMENSION_LABELS: Record<Dimension, string> = {
  spiritual: 'Spiritual',
  social: 'Social',
  physical: 'Physical',
  intellectual: 'Intellectual',
}

export const DIMENSION_SUBTITLES: Record<Dimension, string> = {
  spiritual: 'Favor with God',
  social: 'Favor with Man',
  physical: 'Stature',
  intellectual: 'Wisdom',
}

export const DIMENSION_COLORS: Record<Dimension, { base: string; light: string }> = {
  spiritual: { base: '#1B3968', light: '#EAF0F8' },
  social: { base: '#5C3A8A', light: '#F0EBF8' },
  physical: { base: '#7A3B1E', light: '#F6EDDF' },
  intellectual: { base: '#0F6E56', light: '#E4F4EC' },
}

export const TAG_LABELS: Record<Tag, string> = {
  mission: 'Mission prep',
  father: 'Fatherhood',
  career: 'Career',
}

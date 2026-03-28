import { DIMENSION_COLORS } from '@/lib/data/types'

interface ThemeLine {
  text: string
  dimensions: { label: string; color: string }[]
}

const THEME_LINES: ThemeLine[] = [
  {
    text: 'I am a beloved son of God, and He has a work for me to do.',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
      { label: 'Social', color: DIMENSION_COLORS.social.base },
    ],
  },
  {
    text: 'With all my heart, might, mind, and strength,',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
      { label: 'Intellectual', color: DIMENSION_COLORS.intellectual.base },
      { label: 'Physical', color: DIMENSION_COLORS.physical.base },
      { label: 'Social', color: DIMENSION_COLORS.social.base },
    ],
  },
  {
    text: 'I will love God, keep my covenants, and use His priesthood to serve others, beginning in my own home.',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
      { label: 'Social', color: DIMENSION_COLORS.social.base },
    ],
  },
  {
    text: 'As I strive to serve, exercise faith, repent, and improve each day,',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
      { label: 'Intellectual', color: DIMENSION_COLORS.intellectual.base },
    ],
  },
  {
    text: 'I will qualify to receive temple blessings and the enduring joy of the gospel.',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
    ],
  },
  {
    text: 'I will prepare to become a diligent missionary,',
    dimensions: [
      { label: 'Mission prep', color: DIMENSION_COLORS.spiritual.base },
      { label: 'All dimensions', color: DIMENSION_COLORS.intellectual.base },
    ],
  },
  {
    text: 'loyal husband, and loving father',
    dimensions: [
      { label: 'Fatherhood', color: DIMENSION_COLORS.social.base },
      { label: 'Social', color: DIMENSION_COLORS.social.base },
    ],
  },
  {
    text: 'by being a true disciple of Jesus Christ.',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
    ],
  },
  {
    text: 'I will help prepare the world for the Savior\'s return by inviting all to come unto Christ and receive the blessings of His Atonement.',
    dimensions: [
      { label: 'Spiritual', color: DIMENSION_COLORS.spiritual.base },
      { label: 'Social', color: DIMENSION_COLORS.social.base },
    ],
  },
]

export default function ThemePage() {
  return (
    <div className="px-4 py-8 max-w-2xl mx-auto">
      <h1 className="text-xl font-serif font-semibold text-arise-navy mb-2 text-center">
        Young Men Theme
      </h1>
      <p className="text-xs text-gray-400 text-center mb-8 uppercase tracking-wider">
        Mapped to ARISE Dimensions
      </p>

      <div className="space-y-6">
        {THEME_LINES.map((line, i) => (
          <div key={i} className="text-center">
            <p className="text-base font-serif text-arise-navy leading-relaxed">
              {line.text}
            </p>
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {line.dimensions.map((dim, j) => (
                <span
                  key={j}
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-medium text-white"
                  style={{ backgroundColor: dim.color }}
                >
                  {dim.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-4 bg-arise-navy-lt rounded-lg">
        <h2 className="text-sm font-medium text-arise-navy mb-2">About ARISE</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          ARISE is a development framework for Young Men built around four areas of growth
          based on Luke 2:52: Spiritual (Favor with God), Social (Favor with Man),
          Physical (Stature), and Intellectual (Wisdom). Each area contains activities
          designed to help young men grow into prepared missionaries, loyal husbands,
          loving fathers, and contributing members of their communities.
        </p>
      </div>
    </div>
  )
}

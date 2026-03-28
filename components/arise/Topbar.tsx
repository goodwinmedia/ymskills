'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AriseMark } from './AriseMark'

const NAV_ITEMS = [
  { href: '/activities', label: 'Activities' },
  { href: '/progress', label: 'Progress' },
  { href: '/theme', label: 'Theme' },
]

export function Topbar() {
  const pathname = usePathname()

  return (
    <header className="bg-arise-navy text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/activities" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
            <AriseMark size={36} />
          </div>
          <div>
            <div className="text-lg font-serif font-semibold leading-tight">ARISE</div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">
              Young Men&apos;s Development
            </div>
          </div>
        </Link>
        <nav className="flex gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[44px] px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

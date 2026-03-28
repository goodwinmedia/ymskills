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
      <div className="bg-arise-navy border-b border-white/10 px-3 py-1 text-center">
        <span className="text-[9px] uppercase tracking-[0.15em] text-white/50 font-medium">
          Young Men&apos;s Development Framework
        </span>
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <Link href="/activities" className="flex items-center gap-2">
          <AriseMark size={28} />
          <span className="text-base font-serif font-semibold">ARISE</span>
        </Link>
        <nav className="flex gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[44px] px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center ${
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

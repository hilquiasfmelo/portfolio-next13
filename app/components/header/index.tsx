'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export function Header() {
  return (
    <header className="absolute top-0 flex items-center justify-center w-full h-24 z-10 ">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/images/logo.svg" alt="" />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}

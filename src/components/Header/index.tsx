'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_kasa.png'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()
  return (
    <header className="flex flex-row justify-between items-center mt-5 mx-14">
      <Image src={logo} alt="logo_kasa" />
      <nav className="flex gap-12">
        <Link
          className={
            pathname === '/'
              ? 'text-redKasa text-2xl font-medium underline'
              : 'text-redKasa text-2xl font-medium'
          }
          href="/"
        >
          Accueil
        </Link>
        <Link
          className={
            pathname === '/about'
              ? 'text-redKasa text-2xl font-medium underline'
              : 'text-redKasa text-2xl font-medium'
          }
          href="/about"
        >
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header

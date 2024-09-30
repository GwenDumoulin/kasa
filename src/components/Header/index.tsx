'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_kasa.png'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()
  const styleClassBase: string =
    'text-redKasa lg:text-[24px] text-[14px] font-medium lg:normal-case uppercase'
  return (
    <header className="flex flex-row justify-between items-center mt-[20px] mx-[3%]">
      <Link href="/">
        <Image src={logo} alt="logo_kasa" className="md:w-[211px] w-[9rem]" />
      </Link>
      <nav className="flex gap-[20px] md:gap-[50px]">
        <Link
          className={
            pathname === '/' ? styleClassBase + ' underline' : styleClassBase
          }
          href="/"
        >
          Accueil
        </Link>
        <Link
          className={
            pathname === '/about'
              ? styleClassBase + ' underline'
              : styleClassBase
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

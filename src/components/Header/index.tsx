import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo_kasa.png'

function Header() {
  return (
    <header className="header">
      <Image src={logo} alt="logo_kasa" />
      <nav className="header__nav">
        <Link href="/">Accueil</Link>
        <Link href="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header

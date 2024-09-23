import logo from '../../../public/logo_blanc_kasa.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="footer">
      <Image className="footer__logo" src={logo} alt="logo kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

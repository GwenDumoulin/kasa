import logo from '../../../public/logo_blanc_kasa.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex items-center justify-center flex-col bg-black gap-5 h-[209px]">
      <Image className="text-white" src={logo} alt="logo kasa" />
      <p className="text-white text-[24px]">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

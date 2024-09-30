import Banner from '../components/Banner'
import Card from '../components/Card'
import banniere from '../../public/Image_source.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kasa',
}

export default function Home() {
  return (
    <main className="md:mx-[100px] mx-[10px] my-0">
      <Banner banniere={banniere} text="Chez vous, partout, et ailleurs" />
      <Card />
    </main>
  )
}

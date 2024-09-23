import Banner from '../../components/Banner'
import banniere from '../../../public/Image_source.png'

export default function Home() {
  return (
    <main>
      <Banner banniere={banniere} text="Chez vous, partout, et ailleurs" />
    </main>
  )
}

import Banner from '../../components/Banner'
import banniere from '../../../public/Image_source.png'

export default function Home() {
  return (
    <main className="mx-[100px] my-0">
      <Banner banniere={banniere} text="Chez vous, partout, et ailleurs" />
    </main>
  )
}

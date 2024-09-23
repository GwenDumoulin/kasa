import Image from 'next/image'
import banniere from '../../../public/Image_source.png'

type Props = {
  text: string
}

function Banner(props: Props) {
  return (
    <section className="banner">
      <div className="banner__txt">
        <Image src={banniere} alt="bannière" />
      </div>
      <div className="banner__txt">
        <h1>{props.text}</h1>
      </div>
    </section>
  )
}

export default Banner

import Image from 'next/image'

type Props = {
  banniere: HTMLImageElement
  text: string
}

function Banner(props: Props) {
  return (
    <section className="banner">
      <div className="banner__txt">
        <Image src={props.banniere} width="1000" height="1000" alt="bannière" />
      </div>
      <div className="banner__txt">
        <h1>{props.text}</h1>
      </div>
    </section>
  )
}

export default Banner

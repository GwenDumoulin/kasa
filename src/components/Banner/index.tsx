import Image, { StaticImageData } from 'next/image'

type Props = {
  banniere: StaticImageData
  text: string
}

function Banner(props: Props) {
  return (
    <section className="flex h-[230px] m-[3%] relative">
      <div className="flex items-center justify-center w-full h-[230px] absolute">
        <Image
          src={props.banniere}
          alt="bannière"
          className="rounded-3xl brightness-75 h-full w-full object-cover"
        />
        <h1 className="absolute text-white text-[45px] font-medium">
          {props.text}
        </h1>
      </div>
    </section>
  )
}

export default Banner

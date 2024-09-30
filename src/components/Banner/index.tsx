import Image, { StaticImageData } from 'next/image'

type Props = {
  banniere: StaticImageData
  text: string
}

function Banner(props: Props) {
  return (
    <section className="flex h-[111px] md:h-[230px] m-[3%] relative">
      <div className="flex items-center justify-start md:justify-center w-full h-[111px] md:h-[230px] absolute">
        <Image
          src={props.banniere}
          alt="bannière"
          className="rounded-3xl brightness-75 h-full w-full object-cover"
        />
        <h1 className="absolute text-white md:text-[45px] text-[24px] ml-[30px] md:ml-[0] font-medium">
          {props.text}
        </h1>
      </div>
    </section>
  )
}

export default Banner

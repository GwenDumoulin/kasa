import EtoileRouge from '../../../public/etoile_rouge.png'
import EtoileGris from '../../../public/etoile_grise.png'
import Image from 'next/image'

type Props = {
  rate: number
}
function Rating(props: Props) {
  const etoiles = []

  for (let i = 0; i < props.rate; i++) {
    etoiles.push(
      <Image
        className="rate__etoile"
        key={i}
        src={EtoileRouge}
        alt="etoile rouge"
      />
    )
  }

  for (let i = props.rate; i < 5; i++) {
    etoiles.push(
      <Image
        className="rate__etoile"
        key={i}
        src={EtoileGris}
        alt="etoile grise"
      />
    )
  }
  return <div className="flex gap-[7px] p-[7px]">{etoiles}</div>
}

export default Rating

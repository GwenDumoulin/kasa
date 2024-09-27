'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../../data/apartment.json'
import Image from 'next/image'

type Props = {
  logementId: string
}

function ResponsiveCarousel(props: Props) {
  const apartment = data.find((el) => (el.id = props.logementId))
  return (
    <section>
      <Carousel
        showArrows={true}
        showStatus={true}
        showThumbs={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={false}
      >
        {apartment?.pictures.map((picture) => (
          <div key={picture} className="h-[415px]">
            <div>
              <Image src={picture} alt="slides" height="415" width="2000" />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default ResponsiveCarousel

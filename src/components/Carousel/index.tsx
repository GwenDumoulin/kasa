'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../../data/apartment.json'
import Image from 'next/image'

type Props = {
  logementId: string
}

function ResponsiveCarousel(props: Props) {
  const apartment = data.find((el) => el.id === props.logementId)
  return (
    <section className="my-[20px]">
      <Carousel
        showArrows={true}
        showStatus={true}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
      >
        {apartment?.pictures.map((picture) => (
          <div key={picture} className="md:h-[500px] h-[300px]">
            <div className="md:h-[500px] h-[300px]">
              <Image
                src={picture}
                alt="slides"
                height="500"
                width="2000"
                className="md:h-[500px] h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default ResponsiveCarousel

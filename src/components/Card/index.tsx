import data from '../../data/apartment.json'
import Link from 'next/link'
import Image from 'next/image'

function Card() {
  return (
    <section className="bg-[#f6f6f6] rounded-[25px] grid md:gap-[40px] gap-[20px] grid-cols-1 md:grid-cols-3 md:my-[50px] my-[20px] mx-[3%] md:p-[50px] p-[0]">
      {data.map((appartement) => (
        <Link key={appartement.id} href={`/apartment/${appartement.id}`}>
          <article className="flex items-end relative rounded-[10px] h-[300px]">
            <Image
              className="w-full h-full rounded-[10px] object-cover"
              src={appartement.cover}
              alt={appartement.title}
              width="1000"
              height="1000"
            />
            <div className="flex justify-center bg-[linear-gradient(180deg,hsla(0,0%,100%,0),rgba(0,0,0,.5))] rounded-[10px] h-full w-full absolute">
              <h2 className="bottom-[3%] text-white text-[18px] font-medium m-[15px] absolute text-center">
                {appartement.title}
              </h2>
            </div>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Card

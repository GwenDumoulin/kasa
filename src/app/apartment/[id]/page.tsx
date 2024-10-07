import data from '../../../data/apartment.json'
import ResponsiveCarousel from '../../../components/Carousel'
import Rating from '../../../components/Rating'
import Accordion from '../../../components/Accordion'
import Image from 'next/image'

export async function generateStaticParams() {
  return data.map((appartement) => ({
    id: appartement.id.toString(),
  }))
}

function Apartment({ params }: { params: { id: string } }) {
  const appartementCourant = data.find(
    (appartement) => appartement.id === params.id
  )

  if (!appartementCourant) {
    return 'error'
  }
  return (
    <main className="lg:min-h-[953px]">
      <ResponsiveCarousel
        logementId={appartementCourant.id}
      ></ResponsiveCarousel>
      <section className=" md:mx-[100px] mx-[10px] my-[30px]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#ff6060] text-[34px] font-medium mb-[10px]">
              {appartementCourant.title}
            </h1>
            <p className="text-[18px] font-medium">
              {appartementCourant.location}
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {appartementCourant.tags.map((tag, index) => (
                <p
                  className="bg-[#ff6060] rounded-[25px] text-white text-[14px] px-[20px] py-[5px] my-[10px]"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex gap-[10px] items-center w-[80px]">
              <p className="text-[#ff6060] text-[18px] m-[10px] text-right font-medium">
                {appartementCourant.host.name}
              </p>
              <Image
                src={appartementCourant.host.picture}
                alt="Photo du propriètaire"
                width="64"
                height="64"
                className="rounded-[100%]"
              />
            </div>
            <Rating rate={Number(appartementCourant.rating)} />
          </div>
        </div>

        <div className="flex w-[100%] gap-[15px] mt-[20px] md:flex-row flex-col items-center md:items-start">
          <Accordion
            title="Description"
            content={appartementCourant.description}
          />
          <Accordion
            title="Equipements"
            content={appartementCourant.equipments}
          />
        </div>
      </section>
    </main>
  )
}

export default Apartment

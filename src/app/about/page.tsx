import Banner from '../../components/Banner'
import banniere2 from '../../../public/image_source2.png'
import Accordion from '../../components/Accordion'
import data from '../../data/about.json'

function About() {
  return (
    <main className=" md:mx-[100px] mx-[10px] my-0 lg:min-h-[953px]">
      <Banner banniere={banniere2} text="A propos de Kasa" />

      <div className="flex jestify-center flex-col items-center gap-[30px] py-[50px]">
        {data.map((element, index) => (
          <Accordion
            key={index}
            title={element.title}
            content={element.description}
          />
        ))}
      </div>
    </main>
  )
}

export default About

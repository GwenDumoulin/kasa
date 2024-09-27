import data from '../../../data/apartment.json'
import Image from 'next/image'

function Apartment({ params }: { params: { id: string } }) {
  const appartementCourant = data.find(
    (appartement) => appartement.id === params.id
  )

  if (!appartementCourant) {
    return 'error'
  }
  return (
    <main>
      <p>Titre : {appartementCourant.title}</p>
      <p>Localisation : {appartementCourant.location}</p>
      <p>Tags : {appartementCourant.tags}</p>
      <p>Nom du propriétaire : {appartementCourant.host.name}</p>
      <Image
        src={appartementCourant.host.picture}
        alt="Photo du propriètaire"
        width="100"
        height="100"
      />
      <p>Notation : {appartementCourant.rating} / 5</p>
      <p>Description : {appartementCourant.description}</p>
      <p>Equipements : {appartementCourant.equipments}</p>
    </main>
  )
}

export default Apartment

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LogementCard from '../components/LogementCard'

const ListeAnnonces = () => {
  const [annonces, setAnnonces] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/annonces/')
      .then(res => setAnnonces(res.data))
      .catch(err => console.error("Erreur API :", err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {annonces.map(annonce => (
          <LogementCard
            key={annonce.id}
            titre={annonce.titre}
            prix={annonce.prix}
            image={annonce.image_Principale}
            adresse={annonce.adresse}
            description={annonce.description}
            lien={annonce.lien}
            images={annonce.images}
          />
        ))}
      </div>
    </div>
  )
}

export default ListeAnnonces

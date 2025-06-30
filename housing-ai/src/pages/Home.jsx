import { Link } from 'react-router-dom'

const Home = () => (
  <div className="flex items-center justify-center text-center bg-gradient-to-b from-blue-50 to-white py-20 px-4">
    <div>
      <h2 className="text-4xl font-bold mb-4 text-blue-800">Bienvenue sur Housing AI</h2>
      <p className="text-gray-600 mb-6">Trouvez le logement idéal grâce à l'intelligence artificielle.</p>
      <Link to="/annonces" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Voir les annonces
      </Link>
    </div>
  </div>
)

export default Home

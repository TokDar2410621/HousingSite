import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `hover:text-white/80 ${isActive ? 'text-white' : 'text-white/90'}`

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          <NavLink to="/">🏠 Housing AI</NavLink>
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <NavLink to="/" className={linkClass}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/annonces" className={linkClass}>Annonces</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink to="/profile" className={linkClass}>Mon profil</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white/90 hover:text-white/80">Se déconnecter</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={linkClass}>Se connecter</NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={linkClass}>S'inscrire</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;

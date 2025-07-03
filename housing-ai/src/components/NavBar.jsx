import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `hover:text-white/80 ${isActive ? 'text-white' : 'text-white/90'}`

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
            <li>
              <NavLink to="/register" className={linkClass}>S'inscrire</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={linkClass}>Profil</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;

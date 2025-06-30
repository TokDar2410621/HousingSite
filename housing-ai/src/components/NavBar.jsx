function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">🏠 Housing AI</h1>
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 text-sm text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Accueil</a></li>
            <li><a href="#" className="hover:text-blue-600">Annonces</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;

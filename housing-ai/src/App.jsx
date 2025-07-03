import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ListeAnnonces from './pages/ListeAnnonces'
import Contact from './pages/Contact'
import Register from './pages/register'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-[Inter, sans-serif]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/annonces" element={<ListeAnnonces />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;
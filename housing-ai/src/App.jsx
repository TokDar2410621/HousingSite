import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ListeAnnonces from './pages/ListeAnnonces';
import Register from './pages/register';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Register /> {/* temporairement à la place de ListeAnnonces */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
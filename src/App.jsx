import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Highlights />
      </main>
      <Footer />
    </div>
  )
}

export default App

import Header from './components/Header'
import Hero from './components/Hero'
import Ardoise from './components/Ardoise'
import About from './components/About'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ardoise />
        <About />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}

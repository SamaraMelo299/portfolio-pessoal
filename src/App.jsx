import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
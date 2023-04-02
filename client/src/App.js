import { About, Footer, Header, Testimonials, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      {/* <Skills /> */}
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

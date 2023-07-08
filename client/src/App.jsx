import React, { lazy, Suspense } from 'react'
import { Navbar } from './components'
import './styles/App.scss'

const About = lazy(() => import('./container/About/About.jsx'))
const Footer = lazy(() => import('./container/Footer/Footer.jsx'))
const Header = lazy(() => import('./container/Header/Header.jsx'))
const Testimonial = lazy(() =>
  import('./container/Testimonial/Testimonial.jsx'),
)
const Work = lazy(() => import('./container/Work/Work.jsx'))

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <About />
        <Work />
        <Testimonial />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

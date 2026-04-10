import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import VisitorCounter from './components/VisitorCounter'
import BackgroundMusic from './components/BackgroundMusic'
import { trackPageView } from './utils/analytics'

function App() {
  // Track initial page view for Google Analytics
  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <ScrollToTop />
      
      <BackgroundMusic 
        audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      />
      
      <VisitorCounter 
        showCounter={true}
        useCountAPI={false}
        countAPINamespace="" // Your CountAPI namespace (e.g., 'your-portfolio.com')
      />
    </div>
  )
}

export default App
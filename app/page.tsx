import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Projects from './Components/Projects'
import About from './Components/About'
import Footer from './Components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <Intro />
    <Projects />
    <About />
    <Footer />
    </>
  )
}

export default page
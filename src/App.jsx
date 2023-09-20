import { useState } from 'react'
import './App.css'
import Navbar from './components/1. Header component/navbar'
import Footer from './components/3. Footer component/footer'
import Projects from './components/2. Content comp/Projects component/projects'
import About from './components/2. Content comp/About component/about'

const App = () =>  {



  return (
    <>
    <Navbar />
    <About />
    <Projects />
    <Footer />

    </>
  )
}

export default App

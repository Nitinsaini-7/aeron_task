import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Demo content */}
      <div className="">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}


export default App
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './assets/components/About'
import Certification from './assets/components/Certification'
import Education from './assets/components/Education'
import Header from './assets/components/Header'
import Navbar from './assets/components/Navbar'
import Projects from './assets/components/Projects'
import './App.css'


function App() {


  return (

      <div>
        
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/Certification" element={<Certification/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </div>


  )
}

export default App

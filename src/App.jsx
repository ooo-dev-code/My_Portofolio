import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './scenes/Home/Home'
import Resume from './scenes/Resume/Resume'
import AboutMe from './scenes/AboutMe/AboutMe'
import Contact from './scenes/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/resume' element={<Resume />} ></Route>
        <Route path='/aboutme' element={<AboutMe />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
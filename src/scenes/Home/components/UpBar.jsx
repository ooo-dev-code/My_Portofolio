import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DownBar from './DownBar'

function UpBar() {
  
  // Light/Dark button
  const [light, setLight] = useState(0)
  const [lighted, setLighted] = useState("white")
  const [dark, setDark] = useState(true)
  const colorButton = {
    "1": "linear-gradient(90deg, rgba(10,3,131,1) 0%, rgba(3,3,96,1) 36%, rgba(4,21,56,1) 100%)",
    "2": "linear-gradient(48deg, rgba(255,255,255,1) 0%, rgba(218,218,221,1) 36%, rgba(173,173,173,1) 100%)",
  }
  const [lightcolor, setLightColor] = useState(colorButton["1"])
  const lights = () => {
    if (dark == true) {
      setLight(30)
      setDark(false)
      setLightColor(colorButton["2"])
      setLighted("black")
    }
    else {
      setLight(0)
      setDark(true)
      setLightColor(colorButton["1"])
      setLighted("white")
    }
    if (change == true) {
      setBg("black")
      setButton("white")
      setFont("white")
      setFontB("black")
      setChange(false)
    }
    else {
      setBg("white")
      setButton("black")
      setFont("black")
      setFontB("white")
      setChange(true)
    }
  }

  // Use LightDark Button
  const [change, setChange] = useState(false)
  const [bg, setBg] = useState("black")
  const [button, setButton] = useState("white")
  const [font, setFont] = useState("white")
  const [fontb, setFontB] = useState("black")

  // Navigate on other pages
  const navigate = useNavigate()

  const resume = () => {
    navigate("/resume")
  }
  const aboutme = () => {
    navigate("/aboutme")
  }
  const contact = () => {
    navigate("/contact")
  }

  return (
    <div className='UpBar' style={{ background: `${bg}`, transition: "0.5s all ease-out"}}>
      <div className='TextUpBar' style={{ color: `${font}`, transition: "0.5s all ease-out"}}>
        Kaouachi
      </div>
      <div className='End'>
        <div className='ListOptions'>
          <button className="Options" onClick={resume} style={{ color: `${fontb}`, background: `${button}`, transition: "0.5s all ease-out"}}>Resume</button>
          <button className="Options" onClick={aboutme} style={{ color: `${fontb}`, background: `${button}`, transition: "0.5s all ease-out"}}>Me</button>
          <button className="Options" onClick={contact} style={{ color: `${fontb}`, background: `${button}`, transition: "0.5s all ease-out"}}>Contact</button>
        </div>
        <button className='LightDark' onClick={lights} style={{ background: `${lighted}`}}>
          <div className='LightDarkClick' style={{ left: `${light}px`, transition: "0.5s all ease-out", background: `${lightcolor}`}}/>
        </button>
      </div>
    </div>
    
  )
}

export default UpBar
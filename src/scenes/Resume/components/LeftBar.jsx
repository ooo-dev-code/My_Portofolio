import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function LeftBar() {

  const navigate = useNavigate()

  const navi = () => {
    navigate(`/`)
  }

  const [drop, setDrop] = useState(0)

  const dropdown = () => {
    setDrop(10)
    console.log(drop)
  }
  return (
    <div className="resume_left_bar">
        <div className="resume_title">
          My Name
          <div className="buttons_drop">
            <button className="dropdown" onClick={navi}>
              DropDown
              </button>
              <div className="subDrop">
                <button>
                  Home
                </button>
                  About-Me
                <button>
                  Work
                </button>
                <button>
                  Contact
                </button>
              </div>
          </div>
        </div>
        <div className="resume_stats">
          Statistics
          <div class="btn-group" role="group" aria-label="Basic example" className="button_list">
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
          </div>
        </div>
        <div className="resume_app">
          Other App
          <div class="btn-group" role="group" aria-label="Basic example" className="button_list">
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
          </div>
        </div>
        <div className="resume_bottom">
        </div>
    </div>
  )
}

export default LeftBar
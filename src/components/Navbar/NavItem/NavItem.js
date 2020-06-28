import React, { useState } from "react"

import "../../../scss/main.scss"

const NavItem = ({ children, icon }) => {
  const [darkmode, setDarkmode] = useState(true)

  return (
    <li className="nav-item">
      <button className="icon-button" onClick={() => setDarkmode(!darkmode)}>
        {darkmode
          ? (document.body.classList.add("darkmode"))
          : (document.body.classList.remove("darkmode"))}

          {darkmode 
          ? {icon} = '🌞' : {icon} = '🌛'}
      </button>

      {darkmode && children}
    </li>
  )
}

export default NavItem

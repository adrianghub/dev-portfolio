import React, { useState } from "react"

import "../../../scss/main.scss"

const NavItem = ({ children, icon }) => {
  const [darkmode, setDarkmode] = useState(false)

  return (
    <li className="nav-item">
      <button className="icon-button" onClick={() => setDarkmode(!darkmode)}>
        {darkmode ? (icon = "🌞") : (icon = "🌛")}
      </button>

      {darkmode && children}
    </li>
  )
}

export default NavItem

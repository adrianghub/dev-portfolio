import React from "react"

import "../../scss/main.scss"
import logo from "../../images/logo.png"

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
          <img className="navbar__logo--image" src={logo} alt="Personal logo" />
      <ul className="navbar__nav"> {children} </ul>
    </nav>
  )
}

export default Navbar

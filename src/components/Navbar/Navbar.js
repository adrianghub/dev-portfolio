import React from "react"
import Link from "gatsby-link"

import "../../scss/main.scss"
import logo from "../../images/logo.png"

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="navbar__logo--image" src={logo} alt="Personal logo" />
      </Link>
      <ul className="navbar__nav"> {children} </ul>
    </nav>
  )
}

export default Navbar

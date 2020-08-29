import React from "react"
import Link from "gatsby-link"

import "../../scss/main.scss"
import logo from "../../images/logo.png"
import HomeIcon from '@material-ui/icons/Home';

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <Link className="navbar__home--icon-wrapper" to="/">
        <HomeIcon className="navbar__home--icon" />
      </Link>
      <Link to="/">
        <img className="navbar__logo--image" src={logo} alt="Personal logo" />
      </Link>
      <ul className="navbar__nav"> {children} </ul>
    </nav>
  )
}

export default Navbar

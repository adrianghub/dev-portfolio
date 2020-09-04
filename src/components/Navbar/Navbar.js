import React, { useState } from "react"
import Link from "gatsby-link"

import "../../scss/main.scss"
import logo from "../../images/logo.png"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const Navbar = ({ children }) => {
  const [click, setClick] = useState(false)

  const handleKeyDown = (e) => {
  if (e.keyCode === 13) {
    setClick(!click)
  }
}

  return (
    <nav className="navbar">
        <Link to="/">
          <img className="navbar__logo--image" src={logo} alt="Personal logo" />
        </Link>
        <div role="menu" tabIndex="0" className="navbar__ham-menu" onKeyDown={handleKeyDown} onClick={() => setClick(!click)}>
          {click ? (
            <CloseIcon className="navbar__menu-icon--close" />
          ) : (
            <MenuIcon className="navbar__menu-icon--open" />
          )}
        </div>
      <ul className={click ? "navbar__nav active" : "navbar__nav"}>
        {" "}
        {children}{" "}
      </ul>
    </nav>
  )
}

export default Navbar

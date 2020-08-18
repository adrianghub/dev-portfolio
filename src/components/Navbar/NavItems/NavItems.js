import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "../../../scss/main.scss"

const NavItem = ({ children, icon }) => {
  const [darkmode, setDarkmode] = useState(true)

  useEffect(() => {
    darkmode
      ? document.body.classList.add("darkmode")
      : document.body.classList.remove("darkmode")
  })

  return (
    <>
    <Link className="nav__item" to='/blog'>
      <li  className="nav__item--blog">BLOG</li>
    </Link>
    <Link className="nav__item" to='/login'>
      <li className="nav__item--login">LOGIN</li>
    </Link>
      <li className="nav__item nav__item--darkmode">
        <button className="icon__button" onClick={() => setDarkmode(!darkmode)}>
          {darkmode ? (icon = "🌞") : (icon = "🌛")}
        </button>
        {darkmode && children}
      </li>
    </>
  )
}

export default NavItem

import React, { useState, useEffect } from "react"

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
      <li className="nav__item nav__item--blog">BLOG</li>
      <li className="nav__item nav__item--login">LOGIN</li>
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

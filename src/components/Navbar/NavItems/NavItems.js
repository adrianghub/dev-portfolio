import React, { useState, useEffect } from "react"
import Link from "gatsby-link"

import "../../../scss/main.scss"

import { NavItemsData } from "./data/navitems-data"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const NavItem = ({ children, icon }) => {
  const [darkmode, setDarkmode] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    darkmode
      ? document.body.classList.add("darkmode")
      : document.body.classList.remove("darkmode")
  })

  return (
    <>
      {NavItemsData.map((item, index) => (
        <Link to={item.url} key={index} className={item.class}>
          <li>{item.title}</li>
        </Link>
      ))}
      {!user ? (
        <Link to={"/login"} className="nav__item">
          <li>Login</li>
        </Link>
      ) : (
        <li>{user} <AccountCircleIcon /></li>
      )}

      <li className="nav__item nav__item--darkmode">
        <button className="icon__button" onClick={() => setDarkmode(!darkmode)}>
          {darkmode ? ({ icon } = "🌞") : ({ icon } = "🌛")}
        </button>
        {darkmode && children}
      </li>
    </>
  )
}

export default NavItem

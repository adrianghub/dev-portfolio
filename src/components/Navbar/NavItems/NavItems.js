import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import { useStateValue } from "../../../StateProvider"

import "../../../scss/main.scss"

import { NavItemsData } from "./data/navitems-data"
import { Avatar } from "@material-ui/core"

const NavItem = ({ children, icon }) => {
  const [darkmode, setDarkmode] = useState(true)
  const [{ user }, dispatch] = useStateValue()

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
          <li>Sign In</li>
        </Link>
      ) : (
        <li className="nav__item__logged">
          {user?.displayName}{" "}
          <Avatar className="nav__item__avatar" src={user?.photoURL} alt={user?.displayName} />
        </li>
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

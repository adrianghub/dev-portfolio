/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar/Navbar"
import NavItems from "../Navbar/NavItems/NavItems"
import Header from "../Header/Header"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

import Scroll from "../Scroll/Scroll"

import { fetchProjects } from "../../api/index"

const Layout = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchedData() {
      const response = await fetchProjects()
      setData(response)
    }
    fetchedData()
  }, [])

  return (
    <div id="particle-container">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div>
        <Scroll showBelow={250} />
        <Navbar>
          <NavItems icon="🌛" />
        </Navbar>
        <Header />
        <Skills />
        <Projects data={data} />
        <Contact />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

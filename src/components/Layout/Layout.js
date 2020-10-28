/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Modal from '../Modal/Modal'
import Navbar from "../Navbar/Navbar"
import NavItems from "../Navbar/NavItems/NavItems"
import Header from "../Header/Header"
import Cla from '../CLA/CLA'
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

import { fetchProjects } from "../../api/index"

import classes from "./Layout.module.css"

const Layout = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchedData() {
      const response = await fetchProjects()
      setData(response)
    } 
    fetchedData();
  }, [])

  return (
    <div className={classes.Container}>
      <Modal />
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Header />
      <Cla />
      <Skills />
      <Projects data={data} />
      <Contact />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

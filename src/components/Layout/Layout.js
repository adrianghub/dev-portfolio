/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar/Navbar"
import NavItem from "../Navbar/NavItem/NavItem"
import Header from "../Header/Header"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

import { fetchProjects } from "../../api/index"

import classes from "./Layout.module.css"

class Layout extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchProjects()

    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state

    return (
      <div className={classes.Container}>
        <Navbar>
          <NavItem icon="🌛"></NavItem>
        </Navbar>
        <Header />
        <Skills />
        <Projects data={data} />
        <Contact />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

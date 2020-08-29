import React from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import PdfReader from '../components/PdfReader/PdfReader'

const Resume = () => (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <PdfReader />
    </>
)

export default Resume;



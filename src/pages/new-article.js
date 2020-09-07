import React, { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import Editor from "../components/Editor/Editor"

const NewArticle = () => {

  return (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Editor />
    </>
  )
}

export default NewArticle

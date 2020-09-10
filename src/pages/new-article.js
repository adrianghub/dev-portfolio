import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import Editor from "../components/Editor/Editor"

const NewArticle = ({location}) => {
  const { state = {} } = location
  const [ createUserId, setcreateUserId ] = useState(null)
  const [ author, setAuthor ] = useState(null)

  useEffect(() => {
    if (typeof state !== "undefined") {
        setcreateUserId({
          createUserId: state.createUserId,
        })
        setAuthor({
          author: state.author,
        })
    }
  }, [])

  return (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Editor createUserId={createUserId?.createUserId} displayName={author?.author}/>
    </>
  )
}

export default NewArticle

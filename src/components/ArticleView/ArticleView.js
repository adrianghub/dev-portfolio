import React from "react"
import Navbar from "../Navbar/Navbar"
import NavItems from "../Navbar/NavItems/NavItems"
import { Location } from "@reach/router"

const ArticleView = () => {
  return (
    <>
      <Location>
        {({ location }) => {
          const { state = {} } = location
          const { data = {} } = state
          const { title, categoryLabel, createdAt } = data
          console.log(title, categoryLabel, createdAt)
          return (
            <>
              <Navbar>
                <NavItems icon="🌛" />
              </Navbar>
              <h1>View Article</h1>
            </>
          )
        }}
      </Location>
    </>
  )
}

export default ArticleView

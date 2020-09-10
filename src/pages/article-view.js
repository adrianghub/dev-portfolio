import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import ArticlePage from "../components/ArticlePage/ArticlePage"

const ArticleView = ({ location }) => {
  const { state = {} } = location
  const [articleData, setArticleData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof state !== "undefined") {
      if (state.hasOwnProperty("data")) {
        setArticleData({
          articleData: state.data,
        })
        setIsLoaded(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      {isLoaded ? (
        <ArticlePage articleData={articleData} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default ArticleView

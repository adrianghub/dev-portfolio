import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"

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
  }, [])

  const timestampToString = timestamp => {
    const date = new Date(timestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      {isLoaded ? (
        <div>
          <h1>{articleData.articleData.title}</h1>
          <p>{articleData.articleData.categoryLabel}</p>
          <p>{timestampToString(articleData.articleData.createdAt.seconds)}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default ArticleView

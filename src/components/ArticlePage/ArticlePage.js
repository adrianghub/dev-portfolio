import React from "react"

const ArticlePage = ({ articleData }) => {

  const timestampToString = timestamp => {
    const date = new Date(timestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const { title, categoryLabel, createdAt } =  articleData.articleData;

  return (
    <>
      <h1>{title}</h1>
      <p>{categoryLabel}</p>
      <p>{timestampToString(createdAt.seconds)}</p>
    </>
  )
}

export default ArticlePage

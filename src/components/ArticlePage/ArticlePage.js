import React from "react"
import Link from 'gatsby-link'
import { Container } from "@material-ui/core"
import classes from "./ArticlePage.module.css"
import parse from 'html-react-parser'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ArticlePage = ({ articleData }) => {
  const timestampToString = timestamp => {
    const date = new Date(timestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const {
    title,
    content,
    lastModified,
    featuredImage,
  } = articleData.articleData

  return (
    <Container>
      <Link class={classes.Back} to="/blog"><ArrowBackIcon /></Link>
      <div className={classes.Article}>
        <div className={classes.ImageContainer}>
          <img className={classes.Image} src={featuredImage} alt={title} />
          <div className={classes.ArticleInfo}>
            <h1 className={classes.Title}>{title}</h1>
          </div>
        </div>
        <div className={classes.Date}>
          {timestampToString(lastModified.seconds)}
        </div>
        <div className={classes.ArticleMain}>
          {parse(content)}
        </div>
      </div>
    </Container>
  )
}

export default ArticlePage

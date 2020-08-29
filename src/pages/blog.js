import React, { useState, useEffect } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import CardComponent from "../components/CardComponent/CardComponent"
import blogBanner from "../images/blog-banner.png"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { fetchArticles } from "../api/index"

const useStyles = makeStyles(theme => ({
  heroImage: {
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 300,
    paddingBottom: theme.spacing(3),
    opacity: 0.5,
  },
}))

const Blog = () => {
  const classes = useStyles()
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ articles, setArticles ] = useState([])

  useEffect(() => {
    async function fetchedData() {
      const response = await fetchArticles()
      if(!response.empty) {
        let allArticles = []
        response.forEach(doc => {
          const article = {
            id: doc,
            ...doc.data()
          }

          allArticles.push(article)
        })
        setArticles(allArticles)
      }
    } 
    fetchedData();
    setIsLoaded(true)
  }, [])


  return (
    <div>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Box>
        <img src={blogBanner} alt="Blog banner" className={classes.heroImage} />
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          All Articles
        </Typography>
        <Grid container spacing={3}>
          {isLoaded ?
            articles.map((article, articleId) => (
              <Grid item xs={12} sm={6} md={4}>
                <CardComponent key={articleId} data={article}/>
              </Grid>
            ))
            : null          
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Blog

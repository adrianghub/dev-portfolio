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
import { Parallax } from 'react-parallax';


import { fetchArticles } from "../api/index"

const useStyles = makeStyles(theme => ({
  heroImage: {
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
    height: '500px'
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 300,
    paddingBottom: theme.spacing(3),
    opacity: 0.5,
  },
  [theme.breakpoints.down('sm')]: {
    heroImage: {
      height: '300px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    heroImage: {
      height: '700px',
    },
  }
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
        setArticles(allArticles, setIsLoaded(true))
      }
    } 
    fetchedData();
  }, [])


  return (
    <div>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Parallax
            className={classes.heroImage}
            blur={{ min: -15, max: 15 }}
            bgImage={blogBanner}
            bgImageAlt="the dog"
            strength={-200}
        >
        </Parallax>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          All Articles
        </Typography>
        <Grid container spacing={3}>
          {isLoaded ?
            articles.map((article, articleId) => (
              <Grid key={articleId} item xs={12} sm={6} md={4}>
                <CardComponent data={article}/>
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

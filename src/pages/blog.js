import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import CardComponent from "../components/CardComponent/CardComponent"
import blogBanner from "../images/blog-banner.png"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container, Typography, Grid, Tooltip } from "@material-ui/core"
import { Parallax } from "react-parallax"
import PostAddIcon from "@material-ui/icons/PostAdd"
import { useStateValue } from "../StateProvider"

import { fetchArticles } from "../api/index"

const useStyles = makeStyles(theme => ({
  heroImage: {
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position: "relative",
    height: "500px",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 300,
    paddingBottom: theme.spacing(3),
    opacity: 0.5,
  },
  createPostLink: {
    marginLeft: "40px",
  },
  createPostIcon: {
    marginLeft: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    heroImage: {
      height: "300px",
    },
    createPostLink: {
      width: "100%",
    },
  },
  [theme.breakpoints.up("lg")]: {
    heroImage: {
      height: "700px",
    },
    createPostLink: {
      width: "20%",
    },
  },
}))

const Blog = () => {
  const classes = useStyles()
  const [isLoaded, setIsLoaded] = useState(false)
  const [articles, setArticles] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    async function fetchedData() {
      const response = await fetchArticles()
      if (!response.empty) {
        let allArticles = []
        response.forEach(doc => {
          const article = {
            id: doc.id,
            ...doc.data(),
          }

          allArticles.push(article)
        })
        setArticles(allArticles, setIsLoaded(true))
      }
    }
    fetchedData()
  }, [])

  return (
    <div>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <Box>
        <Parallax
          className={classes.heroImage}
          blur={{ min: -15, max: 15 }}
          bgImage={blogBanner}
          bgImageAlt="the dog"
          strength={-200}
        ></Parallax>
      </Box>
      {!user ? (
        <Tooltip title="Sign in to create new article">
          <span className={classes.createPostLink}>
            Create New Article
            <PostAddIcon className={classes.createPostIcon} />
          </span>
        </Tooltip>
      ) : (
        <Link className={classes.createPostLink} to={"/new-article"}>
          Create New Article
          <PostAddIcon className={classes.createPostIcon} />
        </Link>
      )}
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          All Articles
        </Typography>
        <Grid container spacing={3}>
          {isLoaded
            ? articles.map((article, articleId) => (
                <Grid key={articleId} item xs={12} sm={6} md={4}>
                  <CardComponent data={article} />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </div>
  )
}

export default Blog

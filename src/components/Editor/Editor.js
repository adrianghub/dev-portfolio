import React, { Component } from "react"
import Link from "gatsby-link"

import {
  Container,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  Typography,
  MenuItem,
} from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import classes from "./Editor.module.css"
import "react-quill/dist/quill.snow.css"
import db from "../../firebase"

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleData: {
        author: "",
        avatarImage: "",
        title: "",
        content: "",
        createdAt: new Date(),
        featuredImage: "",
        isPublish: false,
        lastModified: new Date(),
        createUserId: "",
      },
    }
  }

  modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  }

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ]

  onChangeArticleTitle = value => {
    return this.setState({
      articleData: {
        ...this.state.articleData,
        title: value,
      },
    })
  }

  onChangeArticleContent = value => {
    return this.setState({
      articleData: {
        ...this.state.articleData,
        content: value,
      },
    })
  }

  onChangePublish = value => {
    return this.setState({
      articleData: {
        ...this.state.articleData,
        isPublish: value === "true",
      },
    })
  }

  onSubmitArticle = async () => {
    if (
      this.state.articleData.title === "" ||
      this.state.articleData.content === ""
    ) {
      return alert("First fill the title and content fields.")
    }
    try {
      const article = this.state.articleData
      article.createUserId = this.props.createUserId
      article.author = this.props.displayName
      article.avatarImage = this.props.photoURL
      const articlesCollection = await db.collection("Articles").add(article)
      return articlesCollection
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      title,
      content,
      createdAt,
      featuredImage,
      isPublish,
      lastModified,
    } = this.state.articleData

    const ReactQuill =
      typeof window === "object" ? require("react-quill") : () => false

    return (
      <>
        <Container>
          <Link className={classes.Back} to="/blog">
            <ArrowBackIcon />
            <span className={classes.BackText}>All Articles</span>
          </Link>
          <h2 className={classes.Title}>Create New Article</h2>
          <Grid container spacing={3}>
            <Grid item xl={9} lg={9} md={8} sm={12} xs={12}>
              <FormControl fullWidth>
                <InputLabel color="primary" className={classes.Label}>Title</InputLabel>
                <Input
                  className={classes.Input}
                  name="articleTitle"
                  id="articleTitle"
                  placeholder="Tak jak Pan Jezus powiedział..."
                  onChange={e => this.onChangeArticleTitle(e.target.value)}
                  value={title}
                />
              </FormControl>
              <FormControl fullWidth>
                <ReactQuill
                  ref={el => {
                    this.reactQuillRef = el
                  }}
                  onChange={e => this.onChangeArticleContent(e)}
                  theme={"snow"}
                  modules={this.modules}
                  format={this.formats}
                  value={content}
                />
              </FormControl>
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
              <Card className={classes.Card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Settings
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="publish">Publish</InputLabel>
                    <Select
                      defaultValue
                      labelId="publish"
                      id="publish"
                      onChange={e => this.onChangePublish(e.target.value)}
                    >
                      <MenuItem value="false">False</MenuItem>
                      <MenuItem value="true">True</MenuItem>
                    </Select>
                  </FormControl>
                  <div className={classes.buttonWrapper}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => this.onSubmitArticle()}
                    >
                      {content !== "" && title !== "" ? (
                        <Link to="/blog">Submit</Link>
                      ) : (
                        <a>Submit</a>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}

export default Editor

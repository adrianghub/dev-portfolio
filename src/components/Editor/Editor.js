import React, { Component } from "react"
import Link from "gatsby-link"
import { v4 as uuidv4 } from "uuid"

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
import * as firebase from '../../firebase';

const storage = firebase.storage();

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleData: {
        author: "",
        avatarImage: "",
        title: "",
        content: "",
        categoryLabel: "",
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

  onChangeCategoryLabel = value => {
    return this.setState({
      articleData: {
        ...this.state.articleData,
        categoryLabel: value,
      },
    })
  }

  onSubmitArticle = async () => {
    if (
      this.state.articleData.title === "" ||
      this.state.articleData.content === "" ||
      this.state.articleData.categoryLabel === ""
    ) {
      return alert("First fill the title, content and category label fields.")
    }
    if (this.state.articleData.isPublish === false) {
      return alert("Make sure you've set content to be published.")
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

  handleImageUpload = e => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[0]
      const fileName = uuidv4()
      storage
        .ref()
        .child(`Articles/${fileName}`)
        .put(file)
        .then(async snapshot => {
          const downloadURL = await storage
            .ref()
            .child(`Articles/${fileName}`)
            .getDownloadURL()
          resolve({
            success: true,
            data: { link: downloadURL },
          })
        })
    })
  }

  render() {
    const {
      title,
      content,
      createdAt,
      featuredImage,
      categoryLabel,
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
                <InputLabel color="primary" className={classes.Label}>
                  Title
                </InputLabel>
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
                    <InputLabel>Category Label</InputLabel>
                    <Input
                      name="categoryLabel"
                      id="categoryLabel"
                      onChange={e => this.onChangeCategoryLabel(e.target.value)}
                      value={categoryLabel}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel name="featuredImage">
                      Featured Label
                    </InputLabel>
                    <Input
                      inputProps={{
                        type: "file",
                        accept: "image/*",
                        required: true
                      }}
                      className={classes.imageUploader}
                      name="featuredLabel"
                      id="featuredLabel"
                      onChange={async e => {
                        const uploadState = await this.handleImageUpload(e)
                        if (uploadState.success) {
                          this.setState({
                            hasFeaturedImage: true,
                            articleData: {
                              ...this.state.articleData,
                              featuredImage: uploadState.data.link,
                            },
                          })
                        }
                      }}
                    />

                    {
                      this.state.hasFeaturedImage ?
                      <img src={this.state.articleData.featuredImage} /> : null
                    }


                  </FormControl>
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
                      {content !== "" &&
                      title !== "" &&
                      categoryLabel !== "" &&
                      isPublish !== false ? (
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

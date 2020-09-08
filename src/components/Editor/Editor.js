import React, { Component } from "react"
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core"
import classes from "./Editor.module.css"
import "react-quill/dist/quill.snow.css"

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleData: {
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
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
        ["code-block"],
      ],
    },
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

  render() {
    const {
      title,
      content,
      createUserId,
      createdAt,
      featuredImage,
      isPublish,
      lastModified,
    } = this.state.articleData

    const ReactQuill =
      typeof window === "object" ? require("react-quill") : () => false

    return (
      <Container>
        <h2 className={classes.Title}>Create New Article</h2>
        <Grid container spacing={3}>
          <Grid item xl={9} lg={9} md={8} sm={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel className={classes.Label}>Title</InputLabel>
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
            <Button onClick={() => console.log(this.state.articleData)}>
              CLICK
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Editor

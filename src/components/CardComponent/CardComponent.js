import React from "react"
import Link from "gatsby-link"

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  Typography,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Badge,
  Box,
  Avatar,
} from "@material-ui/core"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import parse from "html-react-parser"
import { deleteRecord } from '../../api/index'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  categoryLabel: {
    position: "relative",
    top: "0",
    left: "12%",
  },
  timestampLabel: {
    position: "relative",
    top: "0",
    left: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    categoryLabel: {
      left: "10%",
    },
  },
  [theme.breakpoints.down("xs")]: {
    categoryLabel: {
      left: "10%",
    },
    timestampLabel: {
      left: "25%",
    },
  },
}))

const CardComponent = ({
  data: {
    avatarImage,
    author,
    title,
    content,
    categoryLabel,
    createdAt,
    id,
    featuredImage,
    lastModified,
  },
}) => {
  const classes = useStyles()

  const timestampToString = timestamp => {
    const date = new Date(timestamp * 1000)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const trimmedStr = (str, num) => {
    const slicedStr = str.slice(0, num)
    const lengthOfStr = str.length

    return lengthOfStr > slicedStr.length ? `${slicedStr}...` : slicedStr 
  }

  const deleteCard = (e) => {
    deleteRecord(id);

    const elementoToDelete = e.target.parentNode.parentNode.parentNode.parentNode
    const del = window.confirm("Are you sure you want to delete this record?");
    if (del === true) {
      return elementoToDelete.remove();
    }
  }

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <Link
            to={`/article-view/${id}`}
            state={{
              data: {
                author,
                avatarImage,
                title,
                content,
                categoryLabel,
                createdAt,
                featuredImage,
                lastModified,
              },
            }}
          >
            <CardMedia
              className={classes.media}
              image={featuredImage}
              title="A bottle of vodka"
            />
          </Link>
          <Badge
            className={classes.categoryLabel}
            badgeContent={categoryLabel}
            color="primary"
          />
          <Badge
            className={classes.timestampLabel}
            badgeContent={timestampToString(createdAt.seconds)}
            color="secondary"
          />
          <CardContent>
            <Link
              to={`/article-view/${id}`}
              state={{
                data: {
                  author,
                  avatarImage,
                  title,
                  content,
                  categoryLabel,
                  createdAt,
                  featuredImage,
                  lastModified,
                },
              }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="div">
              {parse(trimmedStr(content, 95))}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={avatarImage} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {author}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                <strong>{timestampToString(lastModified.seconds)}</strong>
              </Typography>
            </Box>
          </Box>
          <Box>
            <DeleteOutlineIcon style={{ cursor: 'pointer' }} onClick={deleteCard}/>
          </Box>
        </CardActions>
      </Card>
    </>
  )
}

export default CardComponent

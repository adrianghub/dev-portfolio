import React from "react"
import avatarImage from "../../images/my-avatar.jpg"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
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
})

const CardComponent = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1598509524136-421cbe2c19f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=878&q=80"
          title="A bottle of vodka"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src={avatarImage} />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              Author
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              29 Sierpnia, 2020 roku
            </Typography>
          </Box>
        </Box>
        <Box>
          <FavoriteBorderIcon />
        </Box>
      </CardActions>
    </Card>
  )
}

export default CardComponent
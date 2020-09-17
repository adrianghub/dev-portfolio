import React from 'react';
import Link from "gatsby-link"
import ChatIcon from '@material-ui/icons/Chat';
import { Button } from "@material-ui/core"
import { Parallax } from "react-parallax"
import { makeStyles } from "@material-ui/core/styles"

import image from '../../images/vinicius-henrique-photography-tlCzxI2RQAc-unsplash.jpg';

const chatRoomURL = "https://5f6298509448358487ff91e2--happy-brown-3e3745.netlify.app/"

const useStyles = makeStyles(theme => ({
  image: {
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginBottom: "100px",
  },
  linkButton: {
    top: '50%',
    left: '80%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
  },
  createPostIcon: {
    marginLeft: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    linkButton: {
      left: '50%',
    }
  }
}))

const Cla = () => {
  const classes = useStyles()
  return (
    <Parallax bgImage={image} strength={500}  className={classes.image}>
      <div style={{ height: '300px' }}>
      <Button color="primary" variant="contained" className={classes.linkButton}>
      <Link className={classes.createPostLink} to={chatRoomURL}>
        Chat with me - room 48656C6C6F
        <ChatIcon className={classes.createPostIcon} />
      </Link>
      </Button>
      </div>
    </Parallax>
  );
};

export default Cla;
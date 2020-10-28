import React from "react"
import Link from "gatsby-link"
import { makeStyles } from "@material-ui/core/styles"
import { Modal, Backdrop, Fade } from "@material-ui/core/"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  paper: {
    backgroundColor: "snow",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function ModalPopup() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        disableEscapeKeyDown={true}
        disableScrollLock={true}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>How Do You Feel Today?</h2>
            <p>
              <Link to="/" onClick={handleClose}>
                <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                  🙈
                </span>
              </Link>{" "}
              <Link to="/">
                <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                  🙈
                </span>
              </Link>{" "}
              <Link to="/">
                <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
                  🙈
                </span>
              </Link>
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

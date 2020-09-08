import React from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import "../scss/main.scss"
import logoImage from "../images/logo.png"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from 'gatsby-link'


const Login = () => {
  const [{ user }, dispatch] = useStateValue()

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return user ? (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <div className="login">
        <div className="login__container">
          <img src={user?.photoURL} alt="Logged user avatar" />
          <h1>
            Hello, {user?.displayName}
          </h1>
          <Link to="/blog"><ArrowBackIcon /><span>Back To Blog Page</span></Link>
        </div>
      </div>
    </>
  ) : (
    <>
      <Navbar>
        <NavItems icon="🌛" />
      </Navbar>
      <div className="login">
        <div className="login__container">
          <img src={logoImage} alt="Logo describes author's creativity" />
          <h1>
            Sign in to my website and become premium ⭐ member of my website
            with exclusive access to my additional blog page content
          </h1>
          <p>zinko.adrian00@gmail.com</p>
          <Button onClick={handleSignIn}>Sign In with Google</Button>
        </div>
      </div>
    </>
  )
}

export default Login

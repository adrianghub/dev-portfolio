import React from "react"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import "../scss/main.scss"
import logoImage from "../images/logo.png"
import { Button } from "@material-ui/core"
import { auth, provider } from '../firebase';

const login = () => {

  const handleSignIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => {
      console.log(result);
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
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

export default login

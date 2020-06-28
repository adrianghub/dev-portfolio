import React from "react"

import {
  FaGithub,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"

import "../../scss/main.scss"

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <h2 className="contact__title">Contact me</h2>
      <div className="container">
        <p className="contact__description">
          I’m open for new opportunities and challanges. Let me know if you have
          one for me!
        </p>
        <ul className="social">
          <li className="social__item">
            <a
              className="social__link"
              href="https://www.facebook.com/adrian.zinko.9"
            >
              {<FaFacebook className="social__icon--fb" />}
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="https://twitter.com/adrian_zinko">
              {<FaTwitterSquare className="social__icon--twitter" />}
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href="https://github.com/AdrianGHub">
              {<FaGithub className="social__icon--gh" />}
            </a>
          </li>
          <li className="social__item">
            <a
              className="social__link"
              href="https://www.linkedin.com/in/adrian-zinko-b7947b166/"
            >
              <FaLinkedin className="social__icon--linkedin" />
            </a>
          </li>
        </ul>
        <a className="contact__mail" href="mailto:zinko.adrian00@gmail.com">
          zinko.adrian00@gmail.com
        </a>
      </div>
      <p className="contact__bottom">
        Result of work during the "WTF: Co ten frontend" Project. &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Contact

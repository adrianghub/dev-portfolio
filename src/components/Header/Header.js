import React from "react"

import avatar from "../../images/my-avatar.png"

import "../../scss/main.scss"

const Header = () => {
  return (
    <section className="hero">
      <img src={avatar} className="hero__image" alt="Adrian CV avatar." />
      <h1 className="hero__title">
        Hi there{" "}
        <span role="img" aria-label="Shaking hand.">
          👋
        </span>
        I'm Adrian - third-year IT student{" "}
        <span role="img" aria-label="Student person.">
          👨‍🎓
        </span>
        Software Engineer Intern at Allegro 💻 passionate about web development
        and heavy lifting{" "}
        <span role="img" aria-label="Heavy lifters.">
          🏋️‍♀️🏋️‍♂️
        </span>
      </h1>
      <p className="hero__description">
        Check out
        <a className="hero__link" href="#my-skills">
          my skills
        </a>{" "}
        section. Catch a glimpse of my
        <a className="hero__link" href="#projects">
          recent workshop
        </a>
        . If you are willing to keep in touch don't hesitate to
        <a className="hero__link" href="#contact">
          contact me
        </a>
        .{" "}
        <span role="img" aria-label="Happy face.">
          😉
        </span>
      </p>
      <p className="hero__quote">
        <i>Stop by and think out of the box with me.</i>
      </p>
      <a href="mailto:zinko.adrian00@gmail.com" className="hero__mail">
        zinko.adrian00@gmail.com
      </a>
    </section>
  )
}

export default Header

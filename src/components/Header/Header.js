import React, { useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import avatar from "../../images/my-avatar.jpg"

import "../../scss/main.scss"

const Header = () => {
  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  })

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    })
  }

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -100,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    })
  }

  useEffect(() => {
    intersection && intersection.intersectionRatio < 1
    ? fadeIn(".fadeIn")
    : fadeOut(".fadeOut")
  })

  return (
    <section className="hero" ref={sectionRef}>
      <img src={avatar} className="hero__image fadeIn" alt="Adrian CV avatar." />
      <h1 className="hero__title fadeIn">
        Hi there{" "}
        <span role="img" aria-label="Shaking hand.">
          👋
        </span>
        I'm Adrian
      </h1>
      <p className="hero__subtitle fadeIn">
        Third-year IT student{" "}
        <span role="img" aria-label="Student person.">
          👨‍🎓
        </span>
        Software Engineer Intern at Allegro 💻 passionate about web development
        and heavy lifting{" "}
        <span role="img" aria-label="Heavy lifters.">
          🏋️‍♀️🏋️‍♂️
        </span>
      </p>
      <p className="hero__description fadeIn">
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

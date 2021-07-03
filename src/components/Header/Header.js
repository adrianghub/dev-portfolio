import React, { useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import avatar from "../../images/my-avatar.png"

import Emoji from '../Emoji/Emoji'
import "../../scss/main.scss"

const Header = () => {
  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  })

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
    && fadeIn(".fadeIn")
  })

  return (
    <section className="hero" ref={sectionRef}>
      <img src={avatar} className="hero__image fadeIn" alt="Adrian CV avatar." />
      <h1 className="hero__title fadeIn">
        Hi there <img className="hero__gif" src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" alt="Friendly moving hand." />
        I'm Adrian
      </h1>
      <p className="hero__subtitle fadeIn">
      <span className="break"> {">"} JS Developer <Emoji symbol="💻" label="laptop"/></span>
      <span className="break"> {">"} Bachelor of Engineering - 03/21 <Emoji symbol="👨‍🎓" label="male student"/> </span>
      <span className="break"> {">"} Looking for new opportunities. 🐱‍🏍</span>
      <span className="break"> {">"} In my spare time I enjoy heavy lifting <Emoji symbol="🏋️‍♀️🏋️‍♂️" label="male weightlifters"/></span>
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
        . <Emoji symbol="😉" label="smiling face"/>
      </p>
      <p className="hero__quote">
        <i>Stop by and think outside the box with me.</i>
      </p>
      <a href="mailto:zinko.adrian00@gmail.com" className="hero__mail">
        zinko.adrian00@gmail.com
      </a>
    </section>
  )
}

export default Header

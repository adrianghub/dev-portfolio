import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import {
  FaGithub,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"

import "../scss/main.scss"

import avatar from "../images/my-avatar.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <img src={avatar} className="hero__image" alt="Adrian CV Image." />
      <h1 className="hero__title">
        Hi there 👋 I'm Adrian - third-year IT student 👨‍🎓 Software Engineer
        Intern at Allegro 💻 passionate about web development and heavy lifting
        🏋️‍♀️🏋️‍♂️
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
        . 😉
      </p>
      <p className="hero__quote">
        <i>Stop by and think out of the box with me.</i>
      </p>
      <a href="mailto:zinko.adrian00@gmail.com" className="hero__mail">
        zinko.adrian00@gmail.com
      </a>
    </section>
    <section id="my-skills" className="skills">
      <h2 className="skills__title">My skills</h2>
      <section className="skills-list">
        <h3 className="skills-list__title">Working knowledge</h3>
        <ul className="skills-list__list">
          <li className="skills-list__item">Semantic HTML5</li>
          <li className="skills-list__item">CSS Flexbox&Grid</li>
          <li className="skills-list__item">CSS Animations</li>
          <li className="skills-list__item">Sass</li>
          <li className="skills-list__item">Markdown</li>
          <li className="skills-list__item">Figma</li>
          <li className="skills-list__item">Forms</li>
          <li className="skills-list__item">Git</li>
          <li className="skills-list__item">JS ES6+ Features</li>
          <li className="skills-list__item">JS Web Storage API</li>
          <li className="skills-list__item">JS DOM Manipulations</li>
          <li className="skills-list__item">NPM Scripts</li>
          <li className="skills-list__item">Regex</li>
          <li className="skills-list__item">Webpack Config</li>
          <li className="skills-list__item">PHP</li>
          <li className="skills-list__item">MySQL</li>
        </ul>
      </section>
      <section className="skills-list skills-list--violet">
        <h3 className="skills-list__title">Know something about</h3>
        <ul className="skills-list__list">
          <li className="skills-list__item">Working with API</li>
          <li className="skills-list__item">Unit Testing</li>
          <li className="skills-list__item">React JS</li>
          <li className="skills-list__item">Express JS</li>
          <li className="skills-list__item">Progressive Web Apps</li>
          <li className="skills-list__item">REST API</li>
          <li className="skills-list__item">Web Accessibility</li>
          <li className="skills-list__item">Server Side Rendering</li>
          <li className="skills-list__item">MongoDB</li>
          <li className="skills-list__item">Docker</li>
          <li className="skills-list__item">Typescript</li>
          <li className="skills-list__item">Arduino Programming with C</li>
          <li className="skills-list__item">Linux Command Line</li>
          <li className="skills-list__item">Wordpress</li>
        </ul>
      </section>
      <section className="skills-list skills-list--blue">
        <h3 className="skills-list__title">Want to learn</h3>
        <ul className="skills-list__list">
          <li className="skills-list__item">Linux on RaspberryPi</li>
          <li className="skills-list__item">JerryScript</li>
          <li className="skills-list__item">Web Components</li>
          <li className="skills-list__item">Hooks in React JS</li>
          <li className="skills-list__item">Redux</li>
          <li className="skills-list__item">Gatsby</li>
          <li className="skills-list__item">Electron</li>
          <li className="skills-list__item">Web Assembly</li>
          <li className="skills-list__item">Symfony</li>
          <li className="skills-list__item">Laravel</li>
        </ul>
      </section>
    </section>
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Recent projects</h2>
        <p className="projects__description">
          I started my frontend developer path in early 2018. Since then, I’ve
          built some projects. Here’s the list of the things I’ve done so far.
        </p>
        <ul className="projects-list projects__list--js"></ul>
      </div>
    </section>
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
        This is a part of the results of work during the "WTF: Co ten frontend"
        Course.
      </p>
    </footer>
  </Layout>
)

export default IndexPage

console.log(`Here you are! You're truly a discoverer 😉 For that occasion I've noted some of my secret facts about myself: 
- I'm a Morning Lark person (6 a.m. it's a perfect time to wake up and move),
- I've trained at the gym for over a 4 years, but I'm into powerlifting for just about a year, 
- When I was young I was overweighted, not active person,
- Everything has changed after I graduated from primary school and became interested in running and tennis sport
- besides my main intrests such as programming and strenght training I'm also taking care of my spendings and consistently reading articles about investments and money management.
That's about it for now -  Happy exploring! 🐱‍👓🔥💪
`)

import React from "react"

import "../../scss/main.scss"

const Skills = () => {
  return (
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
  )
}

export default Skills

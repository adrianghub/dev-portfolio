import React from "react"
import ghAvatar from "../../images/github-avatar.svg"

import "../../scss/main.scss"

const Projects = ({ data: { data } }) => {
  if (!data) {
    return "Loading..."
  }

  const reposInfo = data.map(
    ({ description, html_url, name, homepage, id }) => {
      const repoInfo = (
        <li className="project" key={id}>
          <div className="project__container">
            <img
              className="project__logo "
              src={ghAvatar}
              alt="Github avatar."
            />
            <h3 className="project__title">{name}</h3>
            {description ? (
              <p className="project__description ">{description}</p>
            ) : (
              "No description 😟"
            )}
          </div>
          <div className="project__footer ">
            {homepage ? (
              <a
                className="project__link project__link--demo "
                href={homepage}
                target="_blank"
                rel="nofollow noreferrer"
                title={`Demo: ${name}`}
              >
                Demo
              </a>
            ) : (
              ""
            )}
            <a
              className="project__link project__link--code"
              href={html_url}
              target="_blank"
              rel="nofollow noreferrer"
              title={name}
            >
              Github
            </a>
          </div>
        </li>
      )
      return repoInfo
    }
  )

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Recent projects</h2>
        <p className="projects__description">
          I started my frontend developer path in early 2018. Since then, I’ve
          built some projects. Here’s the list of repositories I've worked on recently.
        </p>
        <ul className="projects-list projects__list--js">{reposInfo}</ul>
      </div>
    </section>
  )
}

export default Projects

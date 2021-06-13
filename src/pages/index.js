import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import { setConfig } from "react-hot-loader"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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

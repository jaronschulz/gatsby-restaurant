import React from "react"
// import styled from "styled-components"
// import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}> Hello From HomeHeader</HomeHeader>
  </Layout>
)

export default IndexPage

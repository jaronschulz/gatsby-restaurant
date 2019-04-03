import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import aboutImg from "../images/bcg/aboutBCG.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>Hello From About</PageHeader>
  </Layout>
)

export default AboutPage

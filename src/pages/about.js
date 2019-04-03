import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBCG.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="about" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage

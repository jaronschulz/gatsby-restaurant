import React from "react"
import styled from "styled-components"
import { FaBeer } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>This is Home</h3>
  </Layout>
)

export default IndexPage

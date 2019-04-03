import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

const HomeHeader = ({ img, children }) => (
  <IndexHeader img={img}>{children}</IndexHeader>
)

const PageHeader = ({ img, children }) => (
  <DefaultHeader img={img}>{children}</DefaultHeader>
)

const IndexHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }

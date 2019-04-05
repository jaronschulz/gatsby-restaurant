import React from "react"
import Product from "./product"
import { StaticQuery, graphql, Link } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section>
      <Title title="feature items" messages="little taste" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(item => (
              <Product key={item.node.id} product={item.node} />
            ))
          }}
        />
      </ProductList>
    </Section>
  )
}

export default Menu

const ProductList = styled.div`
  margin: 3rem o;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
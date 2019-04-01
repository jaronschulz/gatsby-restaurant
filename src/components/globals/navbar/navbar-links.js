import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/menu/",
        name: "menu",
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => (
          <li key={link.id}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        ))}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    transition: ${styles.transDefault};
    :hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding-left: 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : 0)};
  overflow: hidden;
`

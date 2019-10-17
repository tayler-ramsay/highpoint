import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "../../node_modules/@fortawesome/fontawesome-free"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        @media (min-width: 950px) {
          flex-direction: row;
          align-items: center;
        }
      `}
    >
      {" "}
      {/*
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          {data.site.siteMetadata.title}
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
        </ul>
    </header> */}
      {children}
    </div>
  )
}

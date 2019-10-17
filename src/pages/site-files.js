import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Site Files</h1>
      {data.allFile.edges.map(({ node }, index) => (
        <ul key={index}>
          <li>{node.name}</li>
          <li>{node.prettySize}</li>
          <li>{node.relativePath}</li>
          <li>{node.extension}</li>
          <li>{node.birthRime}</li>
        </ul>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          name
          size
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

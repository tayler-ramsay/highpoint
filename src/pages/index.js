import React from "react"
import Layout from "../components/Layout"
import VideoHTML from "../components/VideoHTML"
import { css, jsx } from "@emotion/core"
import Form from "../components/Form"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.Offer}</h1>
    <div
      css={css`
        z-index: -10;
        top: 20;
        height: 100vh;
        position: fixed;
        width: 100vw;
      `}
    >
      <VideoHTML />
    </div>
    <div
      css={css`
        width: 100%;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 15px;
      `}
    >
      <div
        css={css`
          width: 500px;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          padding: 42px 55px 45px 55px;
        `}
      >
        <h3
          css={css`
            display: block;
            font-size: 39px;
            color: #333333;
            line-height: 1.2;
            text-align: center;
            padding-bottom: 44px;
          `}
        >
          Snap 2 Apply!
        </h3>
        <Form />
      </div>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        Offer
      }
    }
  }
`

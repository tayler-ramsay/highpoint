import React from "react"
import Layout from "../components/Layout"
import VideoHTML from "../components/VideoHTML"
import { css } from "@emotion/core"
import Form from "../components/Form"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div
      css={css`
        #myVid {
          max-width: 100vw;
        }
        max-width: 50%;
        @media (min-width: 950px) {
          max-width: 100%;
        }
      `}
    >
      <VideoHTML />
    </div>

    <div
      css={css`
        width: 100%;
        text-align: left;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        padding: 15px;
        @media (max-width: 950px) {
          position: relative;
          justify-content: center;
          max-width: 100vw;
        }
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

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"

export default () => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        
      </Layout>
    )}
  />
)

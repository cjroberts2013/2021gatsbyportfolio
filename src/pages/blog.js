import * as React from "react"
import {graphql} from 'gatsby'
import Layout from './../components/Layout'
import Heading from "./../components/Heading"
import Posts from './../components/Posts'

export const query = graphql `
query MyQuery {
  allContentfulBlogPost {
    edges {
      node {
        gatsbyPath(filePath: "/posts/{contentfulBlogPost.slug}")
        date
        body {
          body
        }
        id
        description {
          description
        }
        title
        image {
          file {
            url
          }
        }
        author
        slug
      }
    }
  }
}
` 


const Blog = ({data}) => {
  return (
    <Layout>
      <Heading header="Blog" />
      <Posts data={data} />
    </Layout>
  )
}



export default Blog
import React from 'react'
import {graphql} from 'gatsby'
import Layout from './../../components/Layout'
import Heading from "./../../components/Heading"

export const query = graphql`
query ($id: String = "") {
    contentfulBlogPost(id: {eq: $id}) {
      author
      body {
        childMarkdownRemark {
          html
        }
      }
      date
      image {
        file {
          url
        }
      }
      description {
        description
      }
      id
      title
      slug
    }
  }
`

export default function Post({data}) {
  console.log(data)
    return (
        <Layout>
            <Heading header={data.contentfulBlogPost.title} />
            <div className="container mx-auto px-4">
                <article>
                    <div className="max-w-5xl mx-auto">
                        <div>
                            <img className="rounded-lg object-cover w-full transform duration-200" src={data.contentfulBlogPost.image.file.url} alt="blog post header" style={{width: 100 + '%'}}/>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 my-8">
                            <div className="col-span-2 md:order-last my-6">
                                <p className="text-lg font-semibold mb-0">
                                    {data.contentfulBlogPost.description.description}
                                </p>
                            </div>
                            <div className="flex items-center my-6">
                                <div className="">
                                    <p className="text-lg font-semibold mb-0">
                                        {data.contentfulBlogPost.author}
                                    </p>
                                    <p className="font-light mb-0">
                                        Posted {data.contentfulBlogPost.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative max-w-3xl mx-auto" dangerouslySetInnerHTML={{
                      __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
                    }}>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

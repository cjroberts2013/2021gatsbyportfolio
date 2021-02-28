import React from 'react'
import {Link} from 'gatsby'

export default function Posts({data}) {

    let postsList = [];
    for (let i = 1; i < data.allContentfulBlogPost.edges.length; i++) {
        postsList.push(data.allContentfulBlogPost.edges[i]);
    }

    return (
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto mb-32">
                    <Link to={data.allContentfulBlogPost.edges[0].node.gatsbyPath} className="group hover:no-underline focus:no-underline">
                        <div className="lg:grid lg:grid-cols-12 gap-12 items-center max-w-lg lg:max-w-none mx-auto rounded-lg">
                            <div className="lg:col-span-7">
                                <div className="">
                                    <img src={data.allContentfulBlogPost.edges[0].node.image.file.url} alt="Blog post header" className="rounded-lg object-cover w-full transform duration-200" />
                                </div>
                            </div>
                            <div className="lg:col-span-5 mt-6 md:p-5">
                                <p className="text-4xl leading-tight text-inverted group-hover:underline group-focus:underline">{data.allContentfulBlogPost.edges[0].node.title}</p>
                                <p className="text-xs my-2">Posted {data.allContentfulBlogPost.edges[0].node.date}</p>
                                <p className="mb-4">{data.allContentfulBlogPost.edges[0].node.description.description}</p>
                                <p className="flex items-center text-xl text-green-400 group-hover:underline group-focus:underline">Read More </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {postsList.map((x) => (
                        <div className="mb-12" key={x.node.title}>
                            <Link to={x.node.gatsbyPath} className="group hover:no-underline focus:no-underline">
                                <div>
                                    <img className="rounded-lg object-cover w-full transform duration-200" src={x.node.image.file.url} alt="Blog post header" style={{width: 100 + '%'}} />
                                </div>
                                <div className="mt-6">
                                    <p className="text-xs my-2">Posted {x.node.date}</p>
                                    <p className=" mb-4 text-3xl leading-tight text-inverted group-hover:underline group-focus:underline">{x.node.title}</p>
                                    <p className="mb-4">{x.node.description.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
}

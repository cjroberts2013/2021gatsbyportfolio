import React from 'react'
import {Link} from 'gatsby'

export default function Heading(props) {
    return (
        <div className="container">
            <div className="text-center lg:w-3/4 xl:w-2/3 mx-auto my-20 xl:my-40">
                {props.preheading && <p className="text-2xl font-semibold antialiased my-6 max-w-prose mx-auto">{props.preheading}</p>}
                <h1 className="mb-14 text-4xl sm:text-5xl md:text-7xl font-semibold">{props.header}</h1>
                {props.postheading && <p className="font-semibold text-2xl ">{props.postheading}</p>}
                {props.cta && <Link to={props.ctalink} className="btn btn-primary bg-green-400 hover:bg-green-300 font-semibold tracking-normal px-6 py-3 rounded-lg">{props.cta}</Link>}
            </div>
        </div>
    )
}

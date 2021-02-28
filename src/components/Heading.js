import React from 'react'
import Button from './Button'

export default function Heading(props) {
    return (
        <div className="container mx-auto">
            <div className="text-center lg:w-3/4 xl:w-2/3 mx-auto my-20 xl:my-40">
                {props.preheading && <p className="text-2xl font-semibold antialiased my-6 max-w-prose mx-auto">{props.preheading}</p>}
                <h1 className="mb-14 text-4xl sm:text-5xl md:text-7xl font-semibold">{props.header}</h1>
                {props.postheading && <p className="font-semibold text-2xl ">{props.postheading}</p>}
                {props.cta && <Button ctalink={props.ctalink} cta={props.cta} />}
            </div>
        </div>
    )
}

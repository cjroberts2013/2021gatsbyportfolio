import React from 'react'
import {Link} from 'gatsby'

export default function Button(props) {
    return (
        <Link to={props.ctalink} className="btn btn-primary bg-green-400 hover:bg-green-300 font-semibold tracking-normal px-6 py-3 rounded-lg">{props.cta}</Link>
    )
}

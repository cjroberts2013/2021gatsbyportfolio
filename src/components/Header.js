import React from 'react'
import {Link} from 'gatsby'

export default function Header() {
    return (
        <div className="container mx-auto px-4 ">
            <nav className="relative flex justify-between my-4">
                <Link to="/" className="font-semibold flex items-center justify-start hover:no-underline">Charles Roberts </Link>
                <div className="relative">
                    <Link to="/" activeClassName="text-gray-800 " className="btn text-gray-400 font-semibold hover:bg-green-200 tracking-normal px-3 py-2 lg:px-4 lg:py-2 mr-2 rounded-lg">Home</Link>
                    <Link to="/about" activeClassName="text-gray-800 " className="btn text-gray-400 font-semibold hover:bg-green-200 tracking-normal px-3 py-2 lg:px-4 lg:py-2 mr-2 rounded-lg">About</Link>
                    <Link to="/project" activeClassName="text-gray-800 " className="btn text-gray-400 font-semibold hover:bg-green-200 tracking-normal px-3 py-2 lg:px-4 lg:py-2 mr-2 rounded-lg">Projects</Link>
                    <Link to="/blog" activeClassName="text-gray-800 " className="btn text-gray-400 font-semibold hover:bg-green-200 tracking-normal px-3 py-2 lg:px-4 lg:py-2 mr-2 rounded-lg">Blog</Link>
                    <Link to="/contact" activeClassName="text-gray-800 " className="btn text-gray-400 font-semibold hover:bg-green-200 tracking-normal px-3 py-2 lg:px-4 lg:py-2 rounded-lg">Contact</Link>
                </div>
            </nav>
        </div>
    )
}

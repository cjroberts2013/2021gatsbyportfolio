import React, {useState} from 'react'
import {Link} from 'gatsby'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        
                        {!isOpen && <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}
                        
                        {isOpen && <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:justify-between sm:items-stretch ">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="font-semibold flex items-center justify-start hover:no-underline">Charles Roberts</Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/about" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                <Link to="/projects" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                                <Link to="/blog" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                                <Link to="/contact" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/about" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/projects" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                <Link to="/blog" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                <Link to="/contact" activeClassName="text-gray-900 bg-green-200" className="text-gray-500 hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                </div>
            </div>}
        </nav>
    )
}

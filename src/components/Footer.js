import React from 'react'
import {Link} from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(faLinkedin, faGithub, faInstagram, faTwitter)

export default function Footer() {
    return (
        <div className="container mx-auto px-4">
            <div className="pt-32">
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-5 grid gap-4 mb-auto">
                        <p className="text-2xl font-semibold">Charles Roberts</p>
                        <div>
                            <p>My goal as a developer is to not only build beautiful, responsive and easy to use websites, but to also build websites that get results. My job is to showcase your skills, creativity and vision so that we can expand your brand and business.</p>
                        </div>
                        <div className="-mx-4">
                            <div className="flex mx-4">
                                <a rel="noreferrer" aria-label="Twitter" href="https://twitter.com/cjrobertstech" className="p-1 text-inverted text-xl text-gray-600 hover:text-green-500" target="_blank" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                <a rel="noreferrer" aria-label="Linkedin" href="https://linkedin.com/in/cjrobertstech" className="p-1 text-inverted text-xl text-gray-600 hover:text-green-500" target="_blank" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                <a rel="noreferrer" aria-label="Github" href="https://github.com/cjroberts2013" className="p-1 text-inverted text-xl text-gray-600 hover:text-green-500" target="_blank" title="Github"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                                <a rel="noreferrer" aria-label="Instagram" href="https://instagram.com/cj_roberts" className="p-1 text-inverted text-xl text-gray-600 hover:text-green-500" target="_blank" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 grid md:grid-cols-2 gap-4">
                        <div className="md:mx-auto my-4">
                            <p className="mb-6 font-semibold">Quick Links</p>
                            <div className="grid gap-2">
                                <p><Link className="text-gray-600 hover:text-green-500" to="/">Home</Link></p>
                                <p><Link className="text-gray-600 hover:text-green-500" to="/about">About</Link></p>
                                <p><Link className="text-gray-600 hover:text-green-500" to="/projects">Projects</Link></p>
                                <p><Link className="text-gray-600 hover:text-green-500" to="/blog">Blog</Link></p>
                                <p><Link className="text-gray-600 hover:text-green-500" to="/contact">Contact</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 mt-16 border-t-2 border-gray-100">
                <p className="text-sm"> &#169; 2021 Charles Roberts</p>
            </div>
        </div>
    )
}

import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import {Link} from 'gatsby'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// library.add(faLinkedin, faGithub, faInstagram, faTwitter)

export default function Layout(props) {
    return (
        <div>
            
            <div className="relative w-full overflow-hidden">
                <div className="relative xl:static shadow-2xl overflow-hidden transform transition-all duration-500">
                    <div className="relative bg-neutral w-full min-w-screen xl:pb-0 xl:overflow-auto transition-background overflow-auto max-w-screen-xl mx-auto ">
                        <Header />
                            {props.children}    
                        <Footer />
                    </div>
                </div>
            </div>
               
        </div>
    )
}

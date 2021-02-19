import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <div className="relative w-full overflow-hidden">
                <div className="relative bg-neutral w-full min-w-screen xl:pb-0 xl:overflow-auto transition-background overflow-auto max-w-screen-xl mx-auto ">
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import Navbar from './navbar'
import Utility_System from './Utility_System'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from './Footer'

function Utilities() {
    return (
    <>
    <div className={`fixed top-0 w-full transition-transform duration-300 z-50 `}>
        <Navbar />
    </div>

        <div className='h-auto w-full bg-[#1E1E1E]'>
            <Utility_System />
        </div>

    </>
    )
}

export default Utilities
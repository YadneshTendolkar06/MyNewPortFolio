import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaGitAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
    <>
    <div className='h-full w-full'>
    <div className='flex flex-col items-center justify-center gap-1 md:gap-10 mt-3 relative'>
    <h2 className='text-[#e1dfea] absolute top-14 md:top-8 left-[30px] md:left-80 xl:left-[280px] 2xl:left-[420px] text-xl md:text-3xl'>Yadnesh Tendolkar</h2>
    <div className='text-[#e1dfea] flex justify-center items-center gap-36 md:gap-[700px] absolute top-24 md:top-28 text-lg md:text-xl'>
        <div className='flex flex-col gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/state">State</Link>
        </div>
        <div className='flex flex-col gap-4'>
            <Link to="https://www.linkedin.com/in/yadnesh-tendolkar/" className='flex items-center'><FaLinkedin />LinkedIn</Link>
            <Link to="https://github.com/YadneshTendolkar06" className='flex items-center'><FaGitAlt />Github</Link>
            <Link to="https://www.instagram.com/yadneshtendolkar/" className='flex items-center'><FaInstagramSquare />Instagram</Link>
        </div>
    </div>

    <h2 className=' md:text-xl text-[#e1dfea] absolute top-56 md:top-72 left-5 md:left-[510px] xl:left-[450px] 2xl:left-[600px]'>Modified & design by Yadnesh Tendolkar @ 2025</h2>

    <Outlet />
    </div>
    </div>
    </>
    )
}

export default Footer
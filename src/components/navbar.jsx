import React,{useState} from 'react'
import {NavLink, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {motion} from 'framer-motion'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
    <>

        {/* Hamburger */}
        <div className="md:hidden absolute top-2 right-4 bg-[#ecf4e5] rounded shadow-xl border-2 border-black z-50">
                <motion.button onClick={()=> setMenuOpen(!menuOpen)} className='block mx-1 md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' animate={{
                y: [5, 10, 5, 10, 5, 10, 5],
                }}
                transition={{
                delay: 0.5,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                }}>
                    { menuOpen ? <ImCross className='text-3xl mx-8' /> : <GiHamburgerMenu className='text-3xl' />  }</motion.button>

                { menuOpen &&
                <motion.div className="flex flex-col gap-5 top-12 right-0 bg-[#ecf4e5] border rounded shadow-md p-8 z-50 h-screen w-screen text-3xl" animate={{ x: 100 }}
                transition={{ duration: 0.3, delay: .2, ease: "linear" }}>
                    <NavLink to="/" className=''>Home</NavLink>
            <NavLink to="/about" className=''>About</NavLink>
            <NavLink to="/state" className=''>State</NavLink>
            <NavLink to="/utilities" className=''>Utilities</NavLink>
        </motion.div>
                }
                </div>

        <div className={`text-[#ecf4e5] justify-center items-center gap-10 py-3 px-10 text-3xl bg-[#1E1E1E] z-50 hidden md:flex`}>
            <NavLink to="/" className=''>Home</NavLink>
            <NavLink to="/about" className=''>About</NavLink>
            <NavLink to="/state" className=''>State</NavLink>
            <NavLink to="/utilities" className=''>Utilities</NavLink>
        </div>

        <Outlet />
    </>
    )
}

export default Navbar
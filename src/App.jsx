import './App.css'
import {motion} from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Projects from './components/projects'
import Navbar from './components/navbar'
import LetsConnect from './components/LetsConnect'
import Footer from './components/Footer'
import IntroPage from './components/introPage'
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation()

  return (
    <>

    <div className={`fixed top-0 w-full transition-transform duration-300 z-50 `}>
    <Navbar />
    </div>
    {location.pathname === "/" && (
  <Parallax pages={6.3}>

  <ParallaxLayer offset={0} speed={0.5}>
    <div  className='bg-[#1E1E1E] h-screen flex flex-col justify-center items-center w-full text-[#ecf4e5]'>
      <IntroPage />
      <p className='md:text-xl text-lg font-light text-center leading-relaxed'>Computer Engineer &  Front-End Developer</p>

        <button className='bg-[#ecf4e5] text-2xl text-black rounded-lg px-5 py-2 mt-11'>Resume</button>
    </div>
  </ParallaxLayer>


  <ParallaxLayer sticky={{start: 0.2, end: 2}} style={{zIndex: -1}}>
    <div className='bg-[#ecf4e5] flex justify-center items-center h-screen w-full text-[#e1dfea]'>
      <div className='flex flex-col w-full h-96 justify-center items-center'>
        <h1 className='text-[#1E1E1E] md:text-[100px] text-5xl uppercase text-center'>Areas of</h1>
        <h2 className='text-[#1E1E1E] md:text-[150px] text-6xl uppercase'>Expertise</h2>
      </div>
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} style={{zIndex: 2}} speed={0.3}>
      <div className='bg-[#1E1E1E]/30 rounded-lg border border-white/20 backdrop-blur-sm h-64 w-52 relative flex justify-center left-2 md:left-[200px] 2xl:left-[320px] py-7'>
    <IoLogoJavascript className='text-yellow-300 text-9xl absolute' />
    <h3 className='top-44 absolute uppercase text-lg'>JavaScript</h3>
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.7} style={{zIndex: 2}} speed={0.6}>
      <div className='bg-[#1E1E1E]/30 rounded-lg border border-white/20 backdrop-blur-sm  h-64 w-52 relative flex justify-center left-[140px] top-20 md:top-0 md:left-[700px] 2xl:left-[760px] xl:left-[650px] py-7'>
    <FaReact className='text-blue-600 text-9xl absolute ' />
    <h3 className='top-44 absolute uppercase text-lg'>React JS</h3>
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} style={{zIndex: 2}} speed={0.2}>
        <div className='bg-[#1E1E1E]/30 rounded-lg border border-white/20 backdrop-blur-sm h-64 w-52 relative flex justify-center left-[10px] top-[550px] md:top-0 md:left-[1200px] xl:left-[1050px] 2xl:left-[1200px] py-7'>
    <FaHtml5 className='text-orange-600 text-9xl absolute' />
    <h3 className='top-44 absolute uppercase text-lg'>HTML5</h3>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} style={{zIndex: 2}} speed={0.6}>
      <div className='bg-blue-500/30 rounded-lg border border-white/20 backdrop-blur-sm h-64 w-52 relative flex justify-center left-[140px] md:left-[300px] xl:left-[200px] 2xl:left-[350px] top-60 md:top-0 py-7'>
      <RiTailwindCssFill className='text-blue-500 text-9xl absolute' />
      <h3 className='top-44 absolute uppercase text-lg'>Tailwind CSS</h3>
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} style={{zIndex: 2}} speed={.3}>
      <div className='bg-blue-500/30 rounded-lg border border-white/20 backdrop-blur-sm h-64 w-52 relative flex justify-center top-[530px] md:top-0 left-2 md:left-[1050px] xl:left-[1040px] 2xl:left-[1200px] py-7'>
      <FaGitAlt className='text-red-500 text-9xl absolute' />
      <h3 className='top-44 absolute uppercase text-lg'>git</h3>
      </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 3, end: 4.5}} style={{zIndex: -2}}>
        <div className='bg-[#ecf4e5] flex justify-center items-center h-screen w-full text-[#e1dfea]'>
          <motion.h2 className='text-[#1E1E1E] md:text-[150px] text-6xl uppercase'>Projects</motion.h2>
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} style={{zIndex: 2}} speed={2}>
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer offset={4.9} style={{zIndex: 3}} >
        <div className='bg-[#1E1E1E] h-screen w-full flex flex-col justify-center gap-5 items-center'>
            <LetsConnect />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5.9} style={{zIndex: -4}} >
        <div className='bg-[#171717] h-96 w-full flex justify-center'>
            <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
    )}
    </>
  )
}

export default App

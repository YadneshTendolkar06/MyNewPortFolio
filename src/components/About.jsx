import personalPhoto from '../assets/personalPhoto.png'
import pp from '../assets/pp.png'
import pp2 from '../assets/pp2.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useLocation } from "react-router-dom";
import Navbar from './navbar';
import Footer from './Footer';

function About(){

    const location = useLocation()
    return (
        <>
        <div className={`fixed top-0 w-full transition-transform duration-300 z-50 `}>
            <Navbar />
        </div>

        {location.pathname === "/about" && (
        <Parallax pages={5.5}>
            <ParallaxLayer offset={0}>
            <div className='bg-[#1E1E1E] sm:h-screen md:h-screen pt-20 w-full'>
                <div className='flex flex-col justify-center items-center h-full gap-3 md:gap-6 px-7 pt-[300px] md:pt-[350px] pb-4 md:pb-16 md:px-56 text-[#e1dfea] text-balance text-center'>
                <h1 className='text-4xl md:text-6xl text-[#e1dfea]'>About me</h1>
                <p className='text-[#e1dfea] text-lg font-sans leading-7'>Hi, I'm Yadnesh Tendolkar, a passionate front-end developer who focuses on building responsive and user-friendly web applications. I specialize in React.js, JavaScript, and Tailwind CSS and have experience delivering clean and efficient code for real-world projects like ezylube.in, E-commerce Website, etc.</p>
                    <p className='text-[#e1dfea] text-lg font-sans leading-7'>I constantly explore new technologies and best practices to enhance my skills and create seamless digital experiences. Let’s collaborate to bring innovative ideas to life!</p>
                </div>
            </div>
            </ParallaxLayer>

            <ParallaxLayer className='flex justify-center' sticky={{start: 0, end: 4}} style={-2}>
            <div className='h-60 w-60 md:h-72 md:w-72 border-4 border-[#ecf4e5] shadow-[6px_6px_0px_0px_#ecf4e5] rounded-xl bg-orange-100 object-contain overflow-hidden absolute left-16 md:left-[240px] 2xl:left-[620px] xl:left-[570px] lg:left-[1000px] top-28'>
                <img className='' src={pp2} />
                </div>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start: 1.8, end: 4}} style={{zIndex: 5, alignItems: "center"}}>
            <div className='md:h-72 w-80 md:w-1/2 absolute mt-24 left-6 md:left-[200px] rounded-2xl bg-[#ff6c45] md:p-12 p-7'>
            <p className='text-xl'>Adaptability & Continuous Learning:</p>
                <p className='text-base md:text-xl font-sans'>In the rapidly evolving field of computer engineering, I pride myself on my ability to quickly adapt to new technologies and tools. Whether it's exploring AI, Web Developement, or the latest in cloud computing, I am committed to continuously expanding my skill set to stay ahead in the tech industry.</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start: 2.9, end: 4}} style={{zIndex: 5}}>
            <div className='md:h-72 w-80 md:w-1/2 absolute mt-56 left-6 md:left-[400px] rounded-2xl bg-[#f5b22e] md:p-12 p-7'>
                <p className='text-xl'>Strong Programming & Web Development Skills:</p>
                <p className='text-base md:text-xl font-sans'>With a solid foundation in programming languages like JavaScript, React, and Tailwind CSS, I have the ability to build efficient software solutions. I’m proficient in developing both frontend and backend systems, making me versatile in tackling diverse engineering challenges, from application development to optimization.</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start: 3.3, end: 4}} style={{zIndex: 5}}>
            <div className='w-80 md:w-1/2 absolute mt-96 left-6 md:left-[600px] rounded-2xl bg-[#69955f] md:p-12 p-7'>
            <p className='text-xl'>Adaptability & Continuous Learning:</p>
                <p className='text-base md:text-xl font-sans'>In the rapidly evolving field of computer engineering, I pride myself on my ability to quickly adapt to new technologies and tools. Whether it's exploring AI, machine learning, or the latest in cloud computing, I am committed to continuously expanding my skill set to stay ahead in the tech industry.</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={5} style={{zIndex: 10}}>
                <div className='bg-[#1E1E1E] h-screen w-full mt-20 md:mt-0'>
                    <Footer />
                </div>
            </ParallaxLayer>
            </Parallax>
        )}

        </>
    )
}

export default About
import React, { useEffect, useState } from 'react'
import Navbar from './navbar';
import Footer from './Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function State() {
    const url = 'https://api.github.com/users/YadneshTendolkar06';

    const [gitData, setGitData] = useState({})
    useEffect(()=>{
        fetch(import.meta.env.VITE_URL , {
            headers: {
                Authorization: `token ${import.meta.env.VITE_TOKEN}`
            }
        })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setGitData(data)
        })
        .catch((err)=> console.log("error", err))
    }, [])
    return (
        <>
            <div className={`fixed top-0 w-full transition-transform duration-300 z-50 `}>
                <Navbar />
            </div>

            <Parallax pages={1.4}>
            <ParallaxLayer offset={0}>
            <div className='h-screen w-full bg-[#1E1E1E] px-4 md:px-96 2xl:px-[500px] pt-36'>
            <h1 className='text-5xl md:text-6xl text-center text-[#e1dfea]'>Statistics</h1>
            <div className='flex justify-center flex-wrap gap-4 md:gap-16 mt-12 md:mt-20'>

            <div className='text-5xl md:text-6xl h-32 md:w-60 font-bold bg-[#1E1E1E] border-2 text-[#e1dfea] rounded-xl p-5'>
                {
                    gitData.public_repos
                }
                <h4 className='text-lg md:text-xl'>Github repos</h4>
            </div>

            <div className='text-5xl md:text-6xl h-32 rounded-xl md:w-60 font-bold bg-[#1E1E1E] text-[#e1dfea] border-2 p-5'>
                {
                    gitData.public_gists

                }
                <h4 className='text-lg md:text-xl'>Github gists</h4>
            </div>

            <div className='text-5xl md:text-6xl h-32 rounded-xl w-40 md:w-60 font-bold bg-[#1E1E1E] text-[#e1dfea] border-2 p-5'>
                {
                    gitData.followers
                }
                <h4 className='text-lg md:text-xl'>Github Followers</h4>
            </div>

            <div className='text-5xl md:text-6xl h-32 rounded-xl w-36 md:w-60 font-bold bg-[#1E1E1E] text-[#e1dfea] border-2 p-5'>
                {
                    gitData.following
                }
                <h4 className='text-lg md:text-xl'>Github Following</h4>
            </div>

            </div>
            </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.8} style={{zIndex: 10}}>
                <div className='bg-[#171717] h-96 w-full flex justify-center md:mt-44 2xl:mt-40 mt-32'>
                    <Footer />
                </div>
            </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default State
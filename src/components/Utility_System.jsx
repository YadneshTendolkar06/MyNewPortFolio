import React from 'react'
import systemData from '../data/system_data'
import softwareData from '../data/softwares_data'
import Footer from './Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Utility_System() {
    return (
    <>
    <div className=''>

    <Parallax pages={2.4}>
    <ParallaxLayer offset={0}>
    <div className='w-full h-screen bg-[#1E1E1E] flex flex-col gap-5 md:px-80 pt-28 md:pt-44 pb-14'>
    <h1 className='text-4xl md:text-5xl text-white ml-8 md:ml-0'>System</h1>

    <div className='md:flex flex md:flex-nowrap flex-wrap gap-1 md:gap-8 justify-center'>
        {
        systemData.map(item =>
            <div className='h-auto flex flex-col md:gap-8 justify-center items-center w-6 md:w-28 px-20 py-5 rounded-xl bg-[#1E1E1E] border-2' key={item.id}>
                <div className='text-4xl md:text-7xl text-[#ecf4e5]'>{item.logo}</div>
                <h4 className='text-[#ecf4e5]'>{item.title}</h4>
            </div>
        )
        }
    </div>
    </div>
    </ParallaxLayer>

    <ParallaxLayer sticky={{start: 0.2, end: 1}} style={{zIndex: -2}}>
    <div className='w-full h-auto md:h-screen bg-[#1E1E1E] flex flex-col gap-5 md:px-80 pt-20 md:pt-20 pb-14'>
    <h1 className='text-2xl md:text-5xl text-white md:mt-20 ml-8 md:ml-0'>Software & Application</h1>
    <div className='flex flex-wrap gap-1 md:gap-5 justify-center'>
        {
            softwareData.map(item =>
                <div className=' h-auto flex flex-col gap-8 justify-center items-center w-6 md:w-28 px-20 py-5 rounded-xl bg-[#1E1E1E] border-2' key={item.id}>
                    <div className='text-4xl md:text-7xl text-[#ecf4e5]'>{item.logo}</div>
                <h4 className='text-[#ecf4e5]'>{item.title}</h4>
                </div>
            )
        }
    </div>
    </div>
    </ParallaxLayer>

    <ParallaxLayer offset={1.9} style={{zIndex: -5}}>
        <div className='bg-[#171717] h-96 w-full flex justify-center mt-[280px] md:mt-16'>
            <Footer />
        </div>
    </ParallaxLayer>
        </Parallax>
    </div>
    </>
    )
}

export default Utility_System
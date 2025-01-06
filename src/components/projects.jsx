import React from 'react'
import ShopEasyImg from '../assets/E-Commerce.png'
import EzylubeVid from '../../public/ezylube.mp4'
import EzyCar from '../assets/ezy.png'
import StudentMgt from '../assets/StudentMgt.png'
import StudentMgt2 from '../assets/StudentMgt2.png'
import portfolioImg from '../assets/portfolioImg.png'
import portfolioVid from '../../public/portfolioVid.mp4'
import ezyMob from '../assets/ezyMob.png'
import shopEasy from '../../public/shopeasy.mp4'

function Projects() {
    return (
        <>
        <div className='md:flex'>
        <div className='md:w-[420px] w-[350px] rounded-xl backdrop-blur-xl bg-[#9b463a] h-[500px] justify-center items-center relative left-1 md:left-10 xl:left-[50px] 2xl:left-[70px] top-10 p-5 md:mx-0 mx-1'>
        <div className='w-full h-full flex gap-8'>
          <div className='bg-green-300 w-full h-80 overflow-hidden rounded-t-xl'>
            <img src={StudentMgt} className='w-full h-full object-cover object-left left-11' alt="" />
          </div>
        </div>
        <div className='text-[#e1dfea] absolute left-0 top-[370px]'>
          <h2 className='md:text-4xl text-2xl text-center'>Student Management System</h2>
          <h2 className='text-2xl text-center'>NextJs Website</h2>
          </div>
      </div>

      <div className='md:w-[420px] w-[350px] rounded-xl backdrop-blur-xl bg-[#484881] h-[500px] justify-center items-center relative left-1 md:left-36 xl:left-[80px] 2xl:left-[130px] top-24 md:top-32 p-5 md:mx-0 mx-1'>
        <div className=' w-full h-full flex gap-8'>
          <div className='bg-green-300 w-44 h-80 rounded-xl'>
            <img src={ezyMob} className='h-full w-full object-cover' />
          </div>
          <div className='flex flex-col gap-8'>
          <div className='bg-orange-300 overflow-hidden w-44 h-28 rounded-xl'>
            <video src={EzylubeVid} autoPlay loop muted className="w-full h-full object-cover">
            </video>
          </div>
          <div className='bg-blue-300 w-44 h-44 overflow-hidden rounded-xl'>
            <img src={EzyCar} className='h-full w-full object-cover' />
          </div>
          </div>
        </div>
        <div className='absolute top-96 left-14 text-[#e1dfea]'>
          <h2 className='text-4xl text-center'>Ezylube</h2>
          <h2 className='md:text-2xl text-xl text-center'>Developed For Company</h2>
          </div>
      </div>

      <div className='md:w-[420px] w-[350px] backdrop-blur-xl rounded-xl bg-[#013F4D]/75 h-[500px] justify-center items-center relative left-1 md:left-60 xl:left-[120px] 2xl:left-[200px] top-40 md:top-52 p-5'>
        <div className='w-full h-full flex flex-col gap-2'>
          <div className='bg-green-300 w-full overflow-hidden h-52 rounded-xl'>
            <video src={shopEasy} autoPlay loop muted className="w-full h-full object-cover">
            </video>
          </div>
          <div className='text-[#e1dfea]'>
          <h2 className='text-4xl text-center'>ShopEasy</h2>
          <h2 className='text-2xl text-center'>E-Commerce Website</h2>
          </div>
          <div className='bg-orange-300 overflow-hidden w-full h-52 rounded-xl'>
            <img src={ShopEasyImg} className='w-full h-full object-fill ' />
          </div>
        </div>
      </div>
      </div>

      <div className='md:w-[420px] w-[350px] backdrop-blur-xl rounded-xl bg-[#013F4D]/75 h-[500px] justify-center items-center relative left-1 md:left-60 top-52 md:top-52 p-5'>
        <div className='w-full h-full flex flex-col gap-2'>
          <div className='bg-green-300 w-full overflow-hidden h-52 rounded-xl'>
            <video src={portfolioVid} autoPlay loop muted className="w-full h-full object-cover">
            </video>
          </div>
          <div className='text-[#e1dfea]'>
          <h2 className='text-4xl text-center'>PortFolio</h2>
          <h2 className='text-2xl text-center'>creative Website</h2>
          </div>
          <div className='bg-orange-300 overflow-hidden w-full h-52 rounded-xl'>
            <img src={portfolioImg} className='w-full h-full object-fill ' />
          </div>
        </div>
      </div>

      <div className='md:w-[420px] w-[350px] rounded-xl backdrop-blur-xl bg-[#484881]/75 h-[500px] justify-center items-center relative left-1 md:left-[850px] top-60 md:top-0 p-5'>
        <div className='absolute top-56 left-16 md:left-24 text-[#e1dfea]'>
          <h2 className='text-4xl text-center'>New Projects</h2>
          <h2 className='text-2xl text-center'>Coming Soon</h2>
          </div>
      </div>
        </>
    )
}

export default Projects
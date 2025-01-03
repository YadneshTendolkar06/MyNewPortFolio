import React from 'react'
import {motion} from 'framer-motion'

function IntroPage() {
    return (
    <>
        <div className='md:flex text-center'>
        <h1 className='flex justify-center md:text-9xl text-6xl'>Yadn<motion.h1 animate={{rotate: [0,30,0] }} transition={{ duration: 7, delay: 1, ease: "linear", repeat: Infinity}} >e</motion.h1>sh</h1>
        <h1 className='md:text-9xl flex text-6xl'>Tend<span className="relative ">
          <h1 className='bg-[#ecf4e5] rounded-full h-10 top-4 md:h-20 md:top-10 relative overflow-hidden'>o</h1>
          {/* Black area inside the O */}
          <motion.div
            className="absolute top-0 left-3 md:top-[30%] md:left-[30%] bg-[#1E1E1E] md:w-[30px] w-3 h-3 md:h-[30px] rounded-full"
            animate={{
              x: [0, 5, 10, 0, -10, -10, 0],
              y: [30, 30, 40, 20, 30, 30, 40],
            }}
            transition={{
              delay: 0.5,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </span>lkar</h1>
      </div>
    </>
    )
}

export default IntroPage
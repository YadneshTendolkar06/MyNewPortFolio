import React from 'react'

function LetsConnect() {
    return (
    <>
    <h1 className='text-[#ecf4e5] md:text-8xl text-4xl'>Let's Connect</h1>
    <div className='md:w-[900px] w-80 text-[#ecf4e5] bg-[#ecf4e5] rounded-xl px-5'>
        <form>
            <input className='py-5 px-5 ml-6 md:ml-0 md:w-96 my-5 bg-[#1E1E1E] rounded-xl' type="text" placeholder='First Name' />
            <input className='py-5 px-5 md:w-96 ml-6 md:ml-20 bg-[#1E1E1E] rounded-xl' type="text" placeholder='Last Name' />
            <input className='py-5 px-5 md:w-full ml-6 md:ml-0 my-5 bg-[#1E1E1E] rounded-xl' type="email" placeholder='Email Address' />
            <input className='py-5 px-5 md:w-full ml-6 md:ml-0 bg-[#1E1E1E] rounded-xl' type="text" placeholder='Subject' />
            <textarea className='py-5 px-5 md:w-full ml-6 md:ml-0 my-5 bg-[#1E1E1E] rounded-xl' placeholder='Message' ></textarea>
            <button className='bg-[#1E1E1E] py-2 px-10 md:px-28 text-2xl rounded-lg mb-8 mx-16 md:mx-72'>Send</button>
        </form>
    </div>
    </>
    )}

export default LetsConnect
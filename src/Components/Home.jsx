import React from 'react'
import TextChange from './TextChange'

function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tight'></h1>
              <p className="text-sm md:text-2xl tracking-tight ">
         <p>Frontend Developer,</p>
          I build responsive and interactive web applications using React & Tailwind CSS.
              </p>
             <a href="#Footer"> <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                  Hire Me
              </button></a>
        </div>
        <div className='flex justify-evenly'>
              <img className='w-2/5 ' src={"https://imgcdn.stablediffusionweb.com/2024/11/1/b51f49a9-82a1-4659-905d-c8cd8643bade.jpg"} alt="" />
        </div>
    </div>
  )
}

export default Home
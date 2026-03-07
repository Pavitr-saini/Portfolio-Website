import React from 'react'
import { IoArrowForward } from "react-icons/io5";
function About() {
  return (
      <div className='text-white md:flex overflow-hidden items-center justify-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
              <h2 id='About' className="text-2xl md:text-4xl font-bold my-5">About</h2>
              <div className="md:flex flex-wrap gap-5 flex-col md:flex-row items-center justify-center">
                  <img className='md:h-80' src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48" alt="" />
                  <div className="flex gap-3 py-4">
                      <IoArrowForward size={30} className="mt-1" />

                      <span className="w-100">
                          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                              Front-End Developer
                          </h1>
                          <p className="text-md md:text-2xl leading-tight">
                              Passionate Frontend Developer with experience in HTML, CSS, JavaScript, React.js, TypeScript, and Tailwind CSS. Skilled in building responsive web applications and integrating APIs using GET, POST, PUT, and DELETE methods. I enjoy creating real-world projects and improving my problem-solving skills through Data Structures & Algorithms.
                          </p>
                      </span>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default About
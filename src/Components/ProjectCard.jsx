import React from 'react'

const ProjectCard = ({title ,main ,demoLink,gitLink}) => {
  return (
    
      <div id='Projects' className="p- md:p-6 flex flex-col w-full sm:w-full lg:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl hover:opacity-85 duration-300 hover:scale-102">
          <img className="p-4" src="https://img.freepik.com/free-vector/project-word-concept_23-2147844145.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
          <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
              {title}
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
          <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
              <button onClick={demoLink}  className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                  Demo
              </button>
              <button onClick={gitLink} className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                  Source Code
              </button>
          </div>
      </div>
  )
}

export default ProjectCard

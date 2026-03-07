import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const zapGit ="https://github.com/Pavitr-saini/Zaptro"
    const zapDemoLink = "https://zaptro-one.vercel.app/"
    const ZapGithub = () => {
        window.open(zapGit, "_blank");
       };
    const ZapDemo = () => {
        window.open(zapDemoLink, "_blank");
    };
  return (
      <div className="p-1 sm:p-10 text-white ">
          <h1 className="text-2xl md:text-4xl text-white text-center font-bold">Projects</h1>
          <div className="py-12 px-8 flex flex-wrap gap-5">
              <ProjectCard
                  title="Zaptro"
                  main="A responsive e-commerce website with product browsing, filtering, wishlist, cart management, and order tracking functionality."
                  gitLink={ZapGithub}
                  demoLink={ZapDemo}
              />
              
              
          </div>
      </div>
  )
}

export default Projects
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
    const CurGit = "https://github.com/Pavitr-saini/Currency-Convertor"
    const CurDemoLink = "https://currency-convertor-tau-pink.vercel.app/"
    const CurGithub = () => {
        window.open(CurGit, "_blank");
    };
    const CurDemo = () => {
        window.open(CurDemoLink, "_blank");
    };
    const TodoGit = "https://github.com/Pavitr-saini/Todo-App"
    const TodoDemoLink = "https://todo-app-nine-inky-30.vercel.app/"
    const TodoGithub = () => {
        window.open(CurGit, "_blank");
    };
    const TodoDemo = () => {
        window.open(CurDemoLink, "_blank");
    };

    const PassGit = "https://github.com/Pavitr-saini/Password-Generator"
    const PassDemoLink = "https://password-generator-six-sigma.vercel.app/"
    const PassGithub = () => {
        window.open(zapGit, "_blank");
    };
    const PassDemo = () => {
        window.open(zapDemoLink, "_blank");
    };
  return (
      <section id="Projects" className="section">
          <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
          <div className="projects-grid">
              <ProjectCard
                  title="Zaptro"
                  main="Zaptro is a responsive e-commerce web application built with modern frontend technologies. It allows users to explore products, add items to the cart, manage a wishlist, and simulate the shopping experience with a smooth and user-friendly interface."
                  gitLink={ZapGithub}
                  demoLink={ZapDemo}
              />
              <ProjectCard
                  title="Currency-Convertor"
                  main="A Currency Converter application that enables users to convert between multiple international currencies using real-time exchange rates from an API. Built with modern frontend technologies, the app features a responsive UI, instant conversion, and a smooth user experience."
                  gitLink={CurGithub}
                  demoLink={CurDemo}
              />
              <ProjectCard
                  title="Todo-App"
                  main="A Todo List web application built with modern frontend technologies that allows users to add, edit, mark as complete, and delete tasks. The app provides a clean and user-friendly interface to help users track and manage their daily activities."
                  gitLink={TodoGithub}
                  demoLink={TodoDemo}
              />
              <ProjectCard
                  title="Password-Generator"
                  main="A Password Generator application that generates strong and secure random passwords. Users can customize the password by selecting the length and enabling options for numbers and special characters."
                  gitLink={PassGithub}
                  demoLink={PassDemo}
              />
          </div>
      </section>
  )
}

export default Projects
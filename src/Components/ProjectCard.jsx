import React from 'react'

const ProjectCard = ({title, main, demoLink, gitLink}) => {
  return (
      <div className="glass-panel project-card">
          <div className="project-image-container">
            <img className="project-image" src="https://img.freepik.com/free-vector/project-word-concept_23-2147844145.jpg?semt=ais_user_personalization&w=740&q=80" alt={title} />
          </div>
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{main}</p>
            <div className="project-actions">
                <button onClick={demoLink} className="btn-primary" style={{padding: '8px 20px', fontSize: '0.9rem'}}>
                    Demo
                </button>
                <button onClick={gitLink} className="btn-secondary" style={{padding: '8px 20px', fontSize: '0.9rem'}}>
                    Code
                </button>
            </div>
          </div>
      </div>
  )
}

export default ProjectCard

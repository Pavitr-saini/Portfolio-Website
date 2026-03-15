import React from 'react';
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <section id="About" className="section">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="glass-panel about-container">
          <img className="about-image" src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48" alt="About section" />
          <div className="about-content">
              <div className="about-role">
                  <IoArrowForward size={30} className="text-gradient" />
                  <span>Front-End Developer</span>
              </div>
              <p className="about-text">
                  Passionate Frontend Developer with experience in HTML, CSS, JavaScript, React.js, TypeScript, and Tailwind CSS. Skilled in building responsive web applications and integrating APIs using GET, POST, PUT, and DELETE methods. I enjoy creating real-world projects and improving my problem-solving skills through Data Structures & Algorithms.
              </p>
          </div>
      </div>
    </section>
  );
}

export default About;
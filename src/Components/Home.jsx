import React from 'react';
import TextChange from './TextChange';
import { FaBriefcase } from "react-icons/fa";

function Home() {
  return (
    <section id="Home" className="section hero-section">
        <div className="hero-content">
            <h1 className="hero-title">
               <TextChange />
            </h1>
            <p className="hero-subtitle">Frontend Developer</p>
            <p className="hero-description">
               React, TypeScript, JavaScript | Responsive UI, API Integration & Modern Web Development
            </p>
            <div className="hero-actions">
                <a href="#Footer" className="btn-primary" style={{ gap: '8px' }}>
                    <FaBriefcase /> Hire Me
                </a>
            </div>
        </div>
        <div className="hero-image-container">
            <img className="hero-image" src="https://imgcdn.stablediffusionweb.com/2024/11/1/b51f49a9-82a1-4659-905d-c8cd8643bade.jpg" alt="Pavitra Saini" />
        </div>
    </section>
  );
}

export default Home;
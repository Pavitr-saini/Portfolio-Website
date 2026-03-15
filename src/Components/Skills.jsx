import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaChrome,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#f97316" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#3b82f6" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "JavaScript", icon: <FaJs />, color: "#facc15" },
    { name: "React.js", icon: <FaReact />, color: "#22d3ee" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
];

const toolsSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "#ef4444" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "VS Code", icon: <FaCode />, color: "#60a5fa" },
    { name: "DevTools", icon: <FaChrome />, color: "#22c55e" },
];

const Skills = () => {
    return (
        <section id="Skills" className="section">
            <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>

            <div className="skills-category">
                <h3 className="skills-category-title">💻 Frontend</h3>
                <div className="skills-grid">
                    {frontendSkills.map((skill, index) => (
                        <div key={index} className="glass-panel skill-card">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h3 className="skills-category-title">🛠 Tools</h3>
                <div className="skills-grid">
                    {toolsSkills.map((skill, index) => (
                        <div key={index} className="glass-panel skill-card">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
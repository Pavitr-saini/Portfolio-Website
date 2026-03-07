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
// import { SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
// import { SiVisualstudiocode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript (ES6+)", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
];

const toolsSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "VS Code", icon: <FaCode />, color: "text-blue-400" },
    { name: "Chrome DevTools", icon: <FaChrome />, color: "text-green-500" },
];

const Skills = () => {
    return (
        <section id="Skills" className="bg-gray-900 text-white py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
                My <span className="text-blue-500">Skills</span>
            </h2>

            {/* Frontend Section */}
            <div className="max-w-6xl mx-auto mb-16">
                <h3 className="text-2xl font-semibold mb-8 text-blue-400">
                    💻 Frontend
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {frontendSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300"
                        >
                            <div className={`text-5xl mb-4 ${skill.color}`}>
                                {skill.icon}
                            </div>
                            <p className="text-lg font-medium text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Section */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8 text-blue-400">
                    🛠 Tools
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {toolsSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300"
                        >
                            <div className={`text-5xl mb-4 ${skill.color}`}>
                                {skill.icon}
                            </div>
                            <p className="text-lg font-medium text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
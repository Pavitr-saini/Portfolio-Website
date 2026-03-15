import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
      <footer id="Footer" className="footer">
          <div className="footer-container">
              <div className="footer-content">
                  <h2>Contact Me</h2>
                  <p>Feel free to reach out for collaborations or just a friendly hello!</p>
              </div>

              <ul className="footer-links">
                  <li>
                      <a href="mailto:Pavitrsaini2929@gmail.com" className="footer-link">
                          <MdOutlineEmail size={24} className="text-gradient" />
                          <span>Pavitrsaini2929@gmail.com</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/pavitr-saini-57756a323/" target="_blank" rel="noopener noreferrer" className="footer-link">
                          <CiLinkedin size={24} className="text-gradient" />
                          <span>LinkedIn Profile</span>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/Pavitr-saini" target="_blank" rel="noopener noreferrer" className="footer-link">
                          <FaGithub size={24} className="text-gradient" />
                          <span>GitHub Profile</span>
                      </a>
                  </li>
              </ul>
          </div>
      </footer>
  )
}

import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    Portfolio<span className="text-gradient">.</span>
                </a>
                
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#About" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Footer" className="nav-link btn-primary" onClick={() => setIsOpen(false)} style={{padding: '8px 24px', marginLeft: '10px'}}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
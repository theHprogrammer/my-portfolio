import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h2>Menu</h2>
                <nav>
                    <ul>
                        <li><NavLink to="/home" end>Home</NavLink></li>
                        <li><NavLink to="/about">About Me</NavLink></li>
                        <li><NavLink to="/academic">Academic</NavLink></li>
                        <li><NavLink to="/professional">Professional</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/certifications">Certifications</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;

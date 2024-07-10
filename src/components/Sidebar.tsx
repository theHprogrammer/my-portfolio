// src/components/Sidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    {/* Adicione mais links conforme necessário */}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

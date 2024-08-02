// src/pages/Projects.tsx

import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Projects: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-10 text-fuchsia-600 text-shadow-fuchsia">Projects</h1>
            <p className="text-2xl text-cyan-300 text-shadow-cyan text-center mb-5">
                This page is currently under development. My projects will be added here soon.
                In the meantime, you can check them out on my GitHub profile:
                <a href="https://github.com/theHprogrammer"
                    className="text-fuchsia-400 underline ml-1" target="_blank" rel="noopener noreferrer">
                    GitHub Projects
                </a>.
            </p>
        </div>
    );
}

export default Projects;

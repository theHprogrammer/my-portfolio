import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Projects: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-10 text-fuchsia-600 text-shadow-fuchsia">Projects</h1>
            <p className="text-2xl text-cyan-300 text-shadow-cyan text-center">
                This is the Projects page.
            </p>
        </div>
    );
}

export default Projects;

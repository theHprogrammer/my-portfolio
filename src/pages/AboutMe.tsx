import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const AboutMe: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-10 text-fuchsia-600 text-shadow-fuchsia">About Me</h1>
            <p className="text-2xl text-cyan-300 text-shadow-cyan text-center">
                Hello! I'm Helder, a passionate developer with a love for creating innovative solutions. Welcome to my portfolio!
            </p>
        </div>
    );
}

export default AboutMe;
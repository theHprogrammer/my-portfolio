import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Home: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center justify-center flex-grow p-5 text-center ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-4xl font-bold text-fuchsia-600 mb-5 text-shadow-fuchsia">Welcome to My Portfolio</h1>
            <p className="text-2xl text-cyan-300 text-shadow-cyan">Explore my work and projects</p>
        </div>
    );
}

export default Home;

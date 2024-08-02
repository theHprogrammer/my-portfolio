// src/pages/Certifications.tsx

import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Certifications: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-10 text-fuchsia-600 text-shadow-fuchsia">Certifications</h1>
            <p className="text-2xl text-cyan-300 text-shadow-cyan text-center mb-5">
                This page is currently under development. My certifications will be added here soon.
                In the meantime, you can verify them on my LinkedIn profile:
                <a href="https://www.linkedin.com/in/thehprogrammer/details/certifications/"
                    className="text-fuchsia-400 underline ml-1" target="_blank" rel="noopener noreferrer">
                    LinkedIn Certifications
                </a>.
            </p>
        </div>
    );
}

export default Certifications;

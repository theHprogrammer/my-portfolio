import React from 'react';
import ProfessionalTimeline from '../components/ProfessionalTimeline';
import { useSidebar } from '../context/SidebarContext';

const Professional: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-20 text-fuchsia-600 text-shadow-fuchsia">Professional History</h1>
            <ProfessionalTimeline />
        </div>
    );
}

export default Professional;

import React from 'react';
import AcademicsTimeline from '../components/AcademicsTimeline';
import { useSidebar } from '../context/SidebarContext';

const Academic: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-20 text-fuchsia-600 text-shadow-fuchsia">Academic History</h1>
            <AcademicsTimeline />
        </div>
    );
}

export default Academic;

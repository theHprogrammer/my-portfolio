import React from 'react';
import AcademicsTimeline from '../components/AcademicsTimeline';
import '../styles/Academic.css';

const Academic: React.FC = () => {
    return (
        <div className="academic">
            <h1>Academic History</h1>
            <AcademicsTimeline />
        </div>
    );
}

export default Academic;

import React from 'react';
import PageLayout from '../components/PageLayout';
import ProfessionalTimeline from '../components/ProfessionalTimeline';

const Professional: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Experience"
            title="Professional history"
            description="Research, software development, project management and engineering experiences that shaped how I approach complex problems."
        >
            <ProfessionalTimeline />
        </PageLayout>
    );
};

export default Professional;

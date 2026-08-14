import React from 'react';
import AcademicsTimeline from '../components/AcademicsTimeline';
import PageLayout from '../components/PageLayout';

const Academic: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Education"
            title="Academic history"
            description="A path across engineering and technology, with a foundation in both software and the physical systems it supports."
        >
            <AcademicsTimeline />
        </PageLayout>
    );
};

export default Academic;

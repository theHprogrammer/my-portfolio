import React from 'react';
import AcademicsTimeline from '../components/AcademicsTimeline';
import PageLayout from '../components/PageLayout';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Academic: React.FC = () => {
    const { content } = usePortfolioContent();
    const header = content.settings.academicHeader;

    return (
        <PageLayout
            eyebrow={header.eyebrow}
            title={header.title}
            description={header.description}
        >
            <AcademicsTimeline />
        </PageLayout>
    );
};

export default Academic;

import React from 'react';
import PageLayout from '../components/PageLayout';
import ProfessionalTimeline from '../components/ProfessionalTimeline';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Professional: React.FC = () => {
    const { content } = usePortfolioContent();
    const header = content.settings.professionalHeader;

    return (
        <PageLayout
            eyebrow={header.eyebrow}
            title={header.title}
            description={header.description}
        >
            <ProfessionalTimeline />
        </PageLayout>
    );
};

export default Professional;

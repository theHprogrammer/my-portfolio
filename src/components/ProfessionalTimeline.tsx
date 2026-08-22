import React from 'react';
import Timeline, { TimelineItem } from './Timeline';
import { timelineIcons } from '../content/iconMaps';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const ProfessionalTimeline: React.FC = () => {
    const { content } = usePortfolioContent();
    const professionalHistory: TimelineItem[] = content.professionalEntries.map(
        (entry) => {
            const Icon =
                timelineIcons[entry.iconKey] || timelineIcons.briefcase;

            return {
                id: entry.id,
                date: entry.period,
                title: entry.title,
                subtitle: entry.subtitle,
                location: entry.location,
                description: entry.descriptions,
                icon: <Icon aria-hidden="true" />,
            };
        },
    );

    return <Timeline items={professionalHistory} />;
};

export default ProfessionalTimeline;

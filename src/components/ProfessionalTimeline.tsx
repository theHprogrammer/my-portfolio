import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import Timeline, { TimelineItem } from './Timeline';

const professionalHistory: TimelineItem[] = [
    {
        date: 'Nov 2023 — Present',
        title: 'P&D Analytics2AI',
        subtitle: 'Research & Development · Liga Acadêmica de Inteligência Artificial',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Study group focused on business consultancy.',
            'Research and development of techniques, methods and tools for data analysis, machine learning and artificial intelligence.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Mar 2023 — Mar 2024',
        title: 'Mobile Developer (Flutter)',
        subtitle: 'Intern · Medical AI',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Assisted in the development and testing of mobile applications.',
            'Researched expert and generative AI for medication recommendation.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Dec 2021 — Sep 2022',
        title: 'Team Manager and Designer',
        subtitle: 'Scholar · LabTeC — Computational Technologies Laboratory, UFSC',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Organized meetings, monitored team activities and documented agendas and minutes.',
            'Created project assets and worked with image processing.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Dec 2021 — Jan 2023',
        title: 'Consultant',
        subtitle: 'Volunteer · EJEC — Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: ['Consultancy and advisory support in general management activities.'],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Jun 2021 — Dec 2021',
        title: 'Project Manager',
        subtitle: 'Volunteer · EJEC — Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Managed projects, teams, knowledge and the project pipeline using an adapted Scrum methodology.',
            'Participated in board meetings and supported project advisory activities.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Feb 2021 — Jun 2021',
        title: 'Project Advisor',
        subtitle: 'Volunteer · EJEC — Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Collected requirements and business rules, developed scopes and met with project stakeholders.',
            'Monitored active projects and researched opportunities for innovation.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
    {
        date: 'Aug 2016 — Aug 2017',
        title: 'Project Intern',
        subtitle: 'Intern · GRUPO ICEC',
        location: 'Mirassol, São Paulo, Brazil',
        description: [
            'Detailed metal structures and prepared project plots for verification.',
            'Created engineering checklists in Excel.',
        ],
        icon: <FaBriefcase aria-hidden="true" />,
    },
];

const ProfessionalTimeline: React.FC = () => <Timeline items={professionalHistory} />;

export default ProfessionalTimeline;

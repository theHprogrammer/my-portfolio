import React from 'react';
import { FaSchool, FaUniversity } from 'react-icons/fa';
import Timeline, { TimelineItem } from './Timeline';

const academicHistory: TimelineItem[] = [
    {
        date: '2021 — Present',
        title: 'Computer Engineering Undergraduate',
        subtitle: 'UFSC — Federal University of Santa Catarina',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: ['Academic Performance Index: 8.80'],
        icon: <FaUniversity aria-hidden="true" />,
    },
    {
        date: '2018 — 2020',
        title: 'Civil Engineering Undergraduate',
        subtitle: 'UNESP — São Paulo State University “Júlio de Mesquita Filho”',
        location: 'Ilha Solteira, São Paulo, Brazil',
        description: ['Interrupted for external transfer.', 'Academic Performance Index: 7.69'],
        icon: <FaUniversity aria-hidden="true" />,
    },
    {
        date: '2016 — 2017',
        title: 'Technical in Building Construction',
        subtitle: 'Etec Philadelpho Gouvêa Netto',
        location: 'São José do Rio Preto, São Paulo, Brazil',
        description: ['Professional technical qualification as an Assistant Technician in Building Installations.'],
        icon: <FaSchool aria-hidden="true" />,
    },
    {
        date: '2013 — 2015',
        title: 'High School',
        subtitle: 'E.E. Profª Amira Homsi Chalella',
        location: 'São José do Rio Preto, São Paulo, Brazil',
        icon: <FaSchool aria-hidden="true" />,
    },
];

const AcademicsTimeline: React.FC = () => <Timeline items={academicHistory} />;

export default AcademicsTimeline;

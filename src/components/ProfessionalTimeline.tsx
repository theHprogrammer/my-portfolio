import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import './Timeline.css';

const professionalHistory = [
    {
        yearRange: 'Nov 2023 - Present',
        title: 'P&D Analytics2AI',
        position: 'Research & Development',
        institution: 'Liga Acadêmica de Inteligência Artificial',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Study group focused on business consultancy.',
            'Research and development of techniques, methods, and tools for data analysis, machine learning, and artificial intelligence.'
        ]
    },
    {
        yearRange: 'Mar 2023 - Mar 2024',
        title: 'Mobile Developer (Flutter)',
        position: 'Intern',
        institution: 'Medical AI',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Assist in the development of mobile applications.',
            'Register information in the system.',
            'Perform system development tests.',
            'Research and development of Expert and Generative AI for medication recommendation.'
        ]
    },
    {
        yearRange: 'Dec 2021 - Sep 2022',
        title: 'Team Manager and Designer',
        position: 'Scholar',
        institution: 'LabTeC - Computational Technologies Laboratory - UFSC',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Team management:',
            'Organization of meetings;',
            'Monitoring of activities by team;',
            'Description of agendas and meeting minutes via Trello;',
            'Support in general activities.',
            'Designer:',
            'Creation of items for project objects;',
            'Image processing.'
        ]
    },
    {
        yearRange: 'Dec 2021 - Jan 2023',
        title: 'Consultant',
        position: 'Voluntary',
        institution: 'EJEC - Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Consultancy/Advice in general management activities.'
        ]
    },
    {
        yearRange: 'Jun 2021 - Dec 2021',
        title: 'Project Manager',
        position: 'Voluntary',
        institution: 'EJEC - Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Participation in Board Meetings with the application of adapted SCRUM methodology;',
            'Management of the Project Pipefy (Backlog via Pipefy - adapted for projects);',
            'Team Management;',
            'Project Management;',
            'Knowledge Management;',
            'Activities related to the role of Project Advisor.'
        ]
    },
    {
        yearRange: 'Feb 2021 - Jun 2021',
        title: 'Project Advisor',
        position: 'Voluntary',
        institution: 'EJEC - Junior Enterprise of Computer Engineering',
        location: 'Araranguá, Santa Catarina, Brazil',
        description: [
            'Participation in fixed activities following the adapted SCRUM methodology.',
            'Development of Feedbacks;',
            'Collection of Functional, Non-Functional Requirements, and Business Rules;',
            'Development of Scopes;',
            'Meetings with Project Stakeholders;',
            'Monitoring of projects under development;',
            'Research on innovation.'
        ]
    },
    {
        yearRange: 'Aug 2016 - Aug 2017',
        title: 'Project Intern',
        position: 'Intern',
        institution: 'GRUPO ICEC',
        location: 'Mirassol, SP, Brazil',
        description: [
            'Engineering Projects Department',
            'Elaboration and detailing of metal structures;',
            'Plotting of projects for verification;',
            'Preparation of checklists in Excel.'
        ]
    },
    // Add other positions similarly...
];

const ProfessionalTimeline: React.FC = () => {
    return (
        <VerticalTimeline   >
            {professionalHistory.map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={item.yearRange}
                    iconStyle={{ background: 'rgb(255, 0, 255)', color: '#fff' }}
                    icon={<FaBriefcase />}
                    contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 255)' }}          
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.position} at {item.institution}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{item.location}</h5>
                    <ul>
                        {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ProfessionalTimeline;

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import '../styles/AcademicsTimeline.css';

const academicHistory = [
    {
        yearRange: '2021 - Now',
        institution: 'UFSC - Federal University of Santa Catarina',
        course: 'Computer Engineering Undergraduate',
        local: 'Araranguá - SC',
        note: 'Academic Performance Index: 8.79'
    },
    {
        yearRange: '2018 - 2020 (Interrupted for external transfer)',
        institution: 'UNESP - São Paulo State University "Júlio de Mesquita Filho"',
        course: 'Civil Engineering Undergraduate',
        local: 'Ilha Solteira - SP',
        note: 'Academic Performance Index: 7.69'
    },
    {
        yearRange: '2016 - 2017',
        institution: 'Etec Philadelpho Gouvêa Netto',
        course: 'Technical in Building Construction',
        local: 'São José do Rio Preto - SP',
        note: 'Technical in Building Construction, with a professional technical qualification of medium level as an Assistant Technician in Building Installations'
    },
    {
        yearRange: '2013 - 2015',
        institution: 'E.E. Profª Amira Homsi Chalella',
        local: 'São José do Rio Preto - SP',
        course: 'High School'
    }
];

const AcademicsTimeline: React.FC = () => {
    return (
        <VerticalTimeline>
            {academicHistory.map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={item.yearRange}
                    iconStyle={{ background: 'rgb(255, 0, 255)', color: '#fff' }}
                    icon={index < 2 ? <FaUniversity /> : <FaSchool />}
                    contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 0, 255)' }}
                >
                    <h3 className="vertical-timeline-element-title">{item.course}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
                    
                    {item.local && <p>{item.local}</p>}
                    {item.note && <p>{item.note}</p>}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default AcademicsTimeline;

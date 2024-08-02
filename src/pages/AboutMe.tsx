// src/pages/AboutMe.tsx

import React from 'react';
import profilePic from '../assets/me-Photoroom.png';
import { useSidebar } from '../context/SidebarContext';
import Skills from '../components/Skills';
import Tabs from '../components/Tabs';

interface TabContent {
    title: string;
    content: React.ReactNode;
}

const AboutMe: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    const tabContent: TabContent[] = [
        {
            title: 'Interests & Hobbies',
            content: (
                <p className="text-white text-lg mb-10">
                    In my free time, I love immersing myself in various activities that challenge both my mind and body. I have a passion for coding and enjoy experimenting with new technologies and programming languages. Gaming is another hobby of mine, providing both entertainment and a way to sharpen my problem-solving skills. I find peace and inspiration in hiking, exploring nature trails, and enjoying the serenity of the outdoors. Additionally, I am an avid reader of science fiction novels, which fuel my imagination and creativity. My interests also extend to artificial intelligence and machine learning, areas that continuously inspire me to learn and innovate.
                </p>
            ),
        },
        {
            title: 'About My Course',
            content: (
                <p className="text-white text-lg mb-10">
                    <b>Engineering - Universidade Federal de Santa Catarina</b> <br />

                    <br />The Computer Engineer has his formation strongly based on Computer Science, Engineering Sciences, Mathematics, Electrical and Digital Electronics. The great technological advances have the computer as the main element, which is formed by hardware (equipment) and software (programs). The perception that a high-tech product has an embedded computer is not always evident. The area that studies this integration is called Embedded Computational Systems.

                    Thus, we deal today and will increasingly interact with a variety of intelligent day-to-day products and objects, due to the hidden/embedded presence of computers and programs in these products. A futuristic, but not necessarily science fiction, scenario is one where all human interaction objects have an embedded computer. Therefore, the challenge of building this scenario mainly falls to the Computer Engineer who has the skills to create, analyze, design, and implement large-scale construction processes of innovations originated by the intersection of sciences and technologies that support it.<br />

                    <br /><b>RELEVANT INFORMATION</b>
                    <br /><b>Activity Hours:</b> Day and Night (Full-time)
                    <br /><b>Slots:</b> 60 (sixty) annual slots, 30 (thirty) per semester.
                    <br /><b>MEC Concept:</b> 4
                    <br /><b>ENADE:</b> Score 5 out of a scale of 1 to 5.
                    <br /><b>Total workload:</b> 4320 class hours (50min) = 3600 hours.
                    <br /><b>Integration Period:</b> – Minimum: 5 years – Maximum: 9 years
                </p>
            ),
        },
        {
            title: 'Oath',
            content: (
                <p className="text-white text-lg mb-10">
                    <b>OATH</b><br />
                    By this solemn oath, <br />
                    I promise to honor the profession of computer engineer, <br />
                    strive for development, <br />
                    and application of science and technology, <br />
                    observe the postulates of professional ethics, <br />
                    so as not to forget that I work <br />
                    for the good of Man and not the machine. <br />
                    I will respect nature, <br />
                    avoiding designing or building equipment <br />
                    that destroy the ecological balance or pollute, <br />
                    besides putting all my scientific knowledge <br />
                    at the service of comfort <br />
                    and development of humanity.
                </p>
            ),
        },
    ];

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold text-fuchsia-500 text-shadow-fuchsia mb-10">About Me</h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
                <div className="flex flex-col items-start">
                    <h2 className="text-5xl font-bold text-fuchsia-500 text-shadow-fuchsia mb-4">Hello, I'm</h2>
                    <h1 className="text-6xl font-bold text-fuchsia-500 text-shadow-fuchsia mb-4">Helder Henrique da Silva</h1>
                    <h2 className="text-3xl font-medium text-cyan-300 text-shadow-cyan mb-4">Computer Engineer</h2>
                    <p className="text-white text-xl mb-4">
                        Currently pursuing a degree in Computer Engineering, I have been working since 2022 in research and development in areas related to data science, machine learning, artificial intelligence, and application development with Python, integrating them into projects and systems using various languages and frameworks.
                    </p>
                    <p className="text-white text-xl mb-4">
                        I have practical experience in frontend, backend, and mobile development, creating functional and responsive systems and applications. I am seeking new challenges and opportunities to collaborate on projects that require problem-solving with creative thinking and advanced technological solutions.
                    </p>
                </div>
                <div className="flex-shrink-0 mt-10 md:mt-0">
                    <img src={profilePic} alt="Profile" className="w-96 h-96 object-contain rounded-full animate-pulse duration-3000" />
                </div>
            </div>

            <div className="w-full max-w-7xl mt-10 text-center">
                <Tabs tabs={tabContent} />
            </div>

            <div className="w-full max-w-7xl mt-10 text-center">
                <h2 className="text-4xl font-bold text-fuchsia-500 text-shadow-fuchsia mb-5">Skills</h2>
                <div className="flex w-full justify-center">
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

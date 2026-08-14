import React from 'react';
import profilePic from '../assets/me-Photoroom.png';
import PageLayout, { SectionHeading } from '../components/PageLayout';
import Skills from '../components/Skills';
import Tabs from '../components/Tabs';

const tabContent = [
    {
        title: 'Interests & Hobbies',
        content: (
            <p>
                In my free time, I love immersing myself in activities that challenge both my mind and body. I enjoy coding experiments, gaming, hiking and science fiction. Artificial intelligence and machine learning are also enduring interests that continuously inspire me to learn and innovate.
            </p>
        ),
    },
    {
        title: 'About My Course',
        content: (
            <div className="space-y-4">
                <p><strong className="text-ink">Computer Engineering — Universidade Federal de Santa Catarina</strong></p>
                <p>
                    Computer Engineering combines Computer Science, engineering, mathematics, electrical engineering and digital electronics. The course explores how hardware and software come together in embedded computational systems and intelligent products.
                </p>
                <dl className="grid gap-3 rounded-xl bg-soft p-4 sm:grid-cols-2">
                    <div><dt className="text-xs uppercase tracking-wide">Activity hours</dt><dd className="font-semibold text-ink">Day and night, full-time</dd></div>
                    <div><dt className="text-xs uppercase tracking-wide">MEC concept</dt><dd className="font-semibold text-ink">4</dd></div>
                    <div><dt className="text-xs uppercase tracking-wide">ENADE</dt><dd className="font-semibold text-ink">5 out of 5</dd></div>
                    <div><dt className="text-xs uppercase tracking-wide">Total workload</dt><dd className="font-semibold text-ink">3,600 hours</dd></div>
                </dl>
            </div>
        ),
    },
    {
        title: 'Oath',
        content: (
            <p>
                I promise to honor the profession of computer engineer, strive for the development and application of science and technology, observe professional ethics, respect nature and place my scientific knowledge at the service of humanity.
            </p>
        ),
    },
];

const AboutMe: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Profile"
            title="About me"
            description="A multidisciplinary engineer interested in software, data and intelligent systems."
        >
            <section className="surface-card grid items-center gap-8 overflow-hidden p-6 md:grid-cols-[1fr_18rem] md:p-8 lg:grid-cols-[1fr_22rem]">
                <div>
                    <span className="eyebrow">Hello, I’m</span>
                    <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Helder Henrique da Silva</h2>
                    <p className="mt-2 text-lg font-semibold text-brand">Computer Engineer</p>
                    <div className="mt-6 space-y-4 leading-7 text-muted">
                        <p>
                            Currently pursuing a degree in Computer Engineering, I have worked since 2022 in research and development related to data science, machine learning, artificial intelligence and Python application development.
                        </p>
                        <p>
                            I also have practical experience in frontend, backend and mobile development, creating responsive applications and seeking challenges that combine creative problem-solving with advanced technology.
                        </p>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-xs">
                    <div className="rounded-[1.75rem] bg-brand-soft p-3">
                        <img
                            src={profilePic}
                            alt="Portrait of Helder Henrique"
                            width="384"
                            height="384"
                            className="aspect-square w-full rounded-2xl object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-14">
                <SectionHeading title="More about my journey" />
                <Tabs label="About Helder" tabs={tabContent} />
            </section>

            <section className="mt-14">
                <SectionHeading
                    eyebrow="Toolkit"
                    title="Skills"
                    description="Technologies, practices and capabilities developed through academic, professional and personal projects."
                />
                <Skills />
            </section>
        </PageLayout>
    );
};

export default AboutMe;

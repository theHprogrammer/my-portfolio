import React from 'react';
import profilePic from '../assets/me-Photoroom.png';
import PageLayout, { SectionHeading } from '../components/PageLayout';
import Skills from '../components/Skills';
import Tabs from '../components/Tabs';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const AboutMe: React.FC = () => {
    const { content } = usePortfolioContent();
    const about = content.settings.about;
    const tabContent = about.tabs.map((tab) => ({
        title: tab.title,
        content: (
            <div className="space-y-4">
                {tab.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {tab.facts.length > 0 ? (
                    <dl className="grid gap-3 rounded-xl bg-soft p-4 sm:grid-cols-2">
                        {tab.facts.map((fact) => (
                            <div key={fact.id}>
                                <dt className="text-xs uppercase tracking-wide">{fact.label}</dt>
                                <dd className="font-semibold text-ink">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                ) : null}
            </div>
        ),
    }));

    return (
        <PageLayout
            eyebrow={about.header.eyebrow}
            title={about.header.title}
            description={about.header.description}
        >
            <section className="surface-card grid items-center gap-8 overflow-hidden p-6 md:grid-cols-[1fr_18rem] md:p-8 lg:grid-cols-[1fr_22rem]">
                <div>
                    <span className="eyebrow">{about.greeting}</span>
                    <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{about.fullName}</h2>
                    <p className="mt-2 text-lg font-semibold text-brand">{about.role}</p>
                    <div className="mt-6 space-y-4 leading-7 text-muted">
                        {about.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </div>
                <div className="mx-auto w-full max-w-xs">
                    <div className="rounded-[1.75rem] bg-brand-soft p-3">
                        <img
                            src={about.profileImageUrl || profilePic}
                            alt={about.profileImageAlt}
                            width="384"
                            height="384"
                            className="aspect-square w-full rounded-2xl object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-14">
                <SectionHeading title={about.journeyTitle} />
                <Tabs label="About Helder" tabs={tabContent} />
            </section>

            <section className="mt-14">
                <SectionHeading
                    eyebrow={about.skillsHeader.eyebrow}
                    title={about.skillsHeader.title}
                    description={about.skillsHeader.description}
                />
                <Skills />
            </section>
        </PageLayout>
    );
};

export default AboutMe;

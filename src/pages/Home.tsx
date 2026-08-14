import React from 'react';
import { FaArrowRight, FaBrain, FaCode, FaLayerGroup } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/PageLayout';

const focusAreas = [
    {
        title: 'Intelligent systems',
        description: 'Machine learning, artificial intelligence and data workflows designed around real problems.',
        icon: <FaBrain aria-hidden="true" />,
    },
    {
        title: 'Software development',
        description: 'Responsive frontend, backend and mobile applications built with a practical engineering approach.',
        icon: <FaCode aria-hidden="true" />,
    },
    {
        title: 'End-to-end thinking',
        description: 'From requirements and research to implementation, testing and continuous improvement.',
        icon: <FaLayerGroup aria-hidden="true" />,
    },
];

const Home: React.FC = () => {
    return (
        <article className="page-container">
            <section className="grid min-h-[calc(100vh-13rem)] items-center gap-10 py-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="eyebrow">Computer Engineer · AI & Software</span>
                    <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
                        Engineering useful products with clarity and purpose.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                        I work across software development, data science and artificial intelligence, turning complex challenges into practical, maintainable solutions.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link className="primary-button" to="/about">
                            Explore my profile
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                        <Link className="secondary-button" to="/contact">Let’s connect</Link>
                    </div>
                </div>

                <aside className="surface-card p-6 sm:p-8" aria-label="Current focus">
                    <span className="eyebrow">Current focus</span>
                    <p className="text-2xl font-bold leading-tight text-ink">Research and development at the intersection of engineering and intelligent software.</p>
                    <dl className="mt-8 space-y-5 border-t border-line pt-6">
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Core areas</dt>
                            <dd className="mt-1 font-semibold text-ink">AI · Data · Applications</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Approach</dt>
                            <dd className="mt-1 font-semibold text-ink">Research-driven and user-focused</dd>
                        </div>
                    </dl>
                </aside>
            </section>

            <section className="border-t border-line py-16">
                <SectionHeading
                    eyebrow="What I do"
                    title="A broad technical foundation, applied with focus."
                    description="My experience connects engineering fundamentals with modern software and data tools."
                />
                <div className="grid gap-5 md:grid-cols-3">
                    {focusAreas.map((area) => (
                        <article key={area.title} className="surface-card p-6">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand" aria-hidden="true">
                                {area.icon}
                            </span>
                            <h2 className="mt-5 text-xl font-bold text-ink">{area.title}</h2>
                            <p className="mt-3 leading-7 text-muted">{area.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Home;

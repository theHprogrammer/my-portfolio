import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import PageLayout from '../components/PageLayout';

const Projects: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Selected work"
            title="Projects"
            description="A curated project showcase is being prepared with context, technical decisions and measurable outcomes."
        >
            <section className="surface-card grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
                        In progress
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-ink">The complete project archive is available on GitHub.</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">
                        Until the case studies are published here, explore repositories, experiments and ongoing work directly on my profile.
                    </p>
                </div>
                <a
                    className="primary-button"
                    href="https://github.com/theHprogrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub aria-hidden="true" />
                    GitHub projects
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
            </section>
        </PageLayout>
    );
};

export default Projects;

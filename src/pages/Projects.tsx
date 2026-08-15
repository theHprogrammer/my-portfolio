import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import PageLayout from '../components/PageLayout';
import { getSafeExternalHref } from '../content/urlSafety';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Projects: React.FC = () => {
    const { content } = usePortfolioContent();
    const page = content.settings.projectsPage;

    return (
        <PageLayout eyebrow={page.header.eyebrow} title={page.header.title} description={page.header.description}>
            {content.projects.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                    {content.projects.map((project) => {
                        const repositoryUrl = getSafeExternalHref(project.repositoryUrl);
                        const demoUrl = getSafeExternalHref(project.demoUrl);

                        return <article key={project.id} className="surface-card overflow-hidden">
                            {project.imageUrl ? <img src={project.imageUrl} alt="" className="aspect-video w-full object-cover" loading="lazy" /> : null}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-ink">{project.title}</h2>
                                <p className="mt-3 leading-7 text-muted">{project.summary}</p>
                                {project.technologies.length > 0 ? (
                                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                                        {project.technologies.map((technology) => <li key={technology} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-strong">{technology}</li>)}
                                    </ul>
                                ) : null}
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {repositoryUrl ? <a className="secondary-button" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" />Repository</a> : null}
                                    {demoUrl ? <a className="primary-button" href={demoUrl} target="_blank" rel="noopener noreferrer">View project<FaArrowUpRightFromSquare aria-hidden="true" /></a> : null}
                                </div>
                            </div>
                        </article>;
                    })}
                </div>
            ) : (
                <section className="surface-card grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">{page.emptyState.badge}</span>
                        <h2 className="mt-5 text-2xl font-bold text-ink">{page.emptyState.title}</h2>
                        <p className="mt-3 max-w-2xl leading-7 text-muted">{page.emptyState.description}</p>
                    </div>
                    <a className="primary-button" href={getSafeExternalHref(page.emptyState.action.href) || '#'} target="_blank" rel="noopener noreferrer">
                        <FaGithub aria-hidden="true" />
                        {page.emptyState.action.label}
                        <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                </section>
            )}
        </PageLayout>
    );
};

export default Projects;

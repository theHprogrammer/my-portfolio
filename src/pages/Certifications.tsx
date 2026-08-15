import React from 'react';
import { FaArrowUpRightFromSquare, FaLinkedin } from 'react-icons/fa6';
import PageLayout from '../components/PageLayout';
import { getSafeExternalHref } from '../content/urlSafety';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Certifications: React.FC = () => {
    const { content } = usePortfolioContent();
    const page = content.settings.certificationsPage;

    return (
        <PageLayout eyebrow={page.header.eyebrow} title={page.header.title} description={page.header.description}>
            {content.certifications.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {content.certifications.map((certification) => {
                        const credentialUrl = getSafeExternalHref(certification.credentialUrl);

                        return <article key={certification.id} className="surface-card overflow-hidden">
                            {certification.imageUrl ? <img src={certification.imageUrl} alt="" className="aspect-video w-full object-cover" loading="lazy" /> : null}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-ink">{certification.title}</h2>
                                <p className="mt-2 font-semibold text-muted">{certification.issuer}</p>
                                {certification.date ? <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">{certification.date}</p> : null}
                                {credentialUrl ? (
                                    <a className="secondary-button mt-6" href={credentialUrl} target="_blank" rel="noopener noreferrer">
                                        View credential
                                        <FaArrowUpRightFromSquare aria-hidden="true" />
                                    </a>
                                ) : null}
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
                        <FaLinkedin aria-hidden="true" />
                        {page.emptyState.action.label}
                        <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                </section>
            )}
        </PageLayout>
    );
};

export default Certifications;

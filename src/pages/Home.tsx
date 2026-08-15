import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/PageLayout';
import { focusIcons } from '../content/iconMaps';
import { getSafeInternalPath } from '../content/urlSafety';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Home: React.FC = () => {
    const { content } = usePortfolioContent();
    const home = content.settings.home;

    return (
        <article className="page-container">
            <section className="grid min-h-[calc(100vh-13rem)] items-center gap-10 py-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <span className="eyebrow">{home.eyebrow}</span>
                    <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
                        {home.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                        {home.introduction}
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link className="primary-button" to={getSafeInternalPath(home.primaryAction.href)}>
                            {home.primaryAction.label}
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                        <Link className="secondary-button" to={getSafeInternalPath(home.secondaryAction.href)}>{home.secondaryAction.label}</Link>
                    </div>
                </div>

                <aside className="surface-card p-6 sm:p-8" aria-label="Current focus">
                    <span className="eyebrow">{home.currentFocusEyebrow}</span>
                    <p className="text-2xl font-bold leading-tight text-ink">{home.currentFocus}</p>
                    <dl className="mt-8 space-y-5 border-t border-line pt-6">
                        {home.focusDetails.map((detail) => (
                            <div key={detail.id}>
                                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{detail.label}</dt>
                                <dd className="mt-1 font-semibold text-ink">{detail.value}</dd>
                            </div>
                        ))}
                    </dl>
                </aside>
            </section>

            <section className="border-t border-line py-16">
                <SectionHeading
                    eyebrow={home.areasHeader.eyebrow}
                    title={home.areasHeader.title}
                    description={home.areasHeader.description}
                />
                <div className="grid gap-5 md:grid-cols-3">
                    {home.focusAreas.map((area) => {
                        const Icon = focusIcons[area.iconKey] || focusIcons.layers;

                        return <article key={area.id} className="surface-card p-6">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand" aria-hidden="true">
                                <Icon />
                            </span>
                            <h2 className="mt-5 text-xl font-bold text-ink">{area.title}</h2>
                            <p className="mt-3 leading-7 text-muted">{area.description}</p>
                        </article>;
                    })}
                </div>
            </section>
        </article>
    );
};

export default Home;

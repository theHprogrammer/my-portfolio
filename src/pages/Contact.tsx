import React from 'react';
import ContactCard from '../components/ContactCard';
import PageLayout, { SectionHeading } from '../components/PageLayout';
import { contactIcons } from '../content/iconMaps';
import { getSafeExternalHref } from '../content/urlSafety';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Contact: React.FC = () => {
    const { content } = usePortfolioContent();
    const page = content.settings.contactPage;

    return (
        <PageLayout
            eyebrow={page.header.eyebrow}
            title={page.header.title}
            description={page.header.description}
        >
            <section aria-label="Contact channels">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {content.contactLinks.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            title={contact.title}
                            link={contact.url}
                            image={contact.imageUrl || (contact.iconKey ? contactIcons[contact.iconKey] : undefined)}
                            actionLabel={page.cardActionLabel}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <SectionHeading title={page.creditsTitle} description={page.creditsDescription} />
                <details className="surface-card group p-5">
                    <summary className="cursor-pointer font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        View icon attributions
                    </summary>
                    <ul className="mt-5 grid gap-3 border-t border-line pt-5 text-sm sm:grid-cols-2">
                        {content.iconCredits.map((credit) => (
                            <li key={credit.id}>
                                <a
                                    href={getSafeExternalHref(credit.url) || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-link"
                                >
                                    {credit.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </details>
            </section>
        </PageLayout>
    );
};

export default Contact;

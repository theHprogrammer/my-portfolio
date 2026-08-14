import React, { ReactNode } from 'react';

interface PageLayoutProps {
    eyebrow: string;
    title: string;
    description?: string;
    children: ReactNode;
}

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description }) => {
    return (
        <header className="mb-7 max-w-3xl">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 className="section-title">{title}</h2>
            {description ? <p className="mt-3 leading-7 text-muted">{description}</p> : null}
        </header>
    );
};

const PageLayout: React.FC<PageLayoutProps> = ({ eyebrow, title, description, children }) => {
    return (
        <article className="page-container">
            <header className="page-header">
                <span className="eyebrow">{eyebrow}</span>
                <h1 className="page-title">{title}</h1>
                {description ? <p className="page-description">{description}</p> : null}
            </header>
            {children}
        </article>
    );
};

export default PageLayout;

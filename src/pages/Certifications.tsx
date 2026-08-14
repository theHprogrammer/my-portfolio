import React from 'react';
import { FaArrowUpRightFromSquare, FaLinkedin } from 'react-icons/fa6';
import PageLayout from '../components/PageLayout';

const Certifications: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Continuous learning"
            title="Certifications"
            description="Courses and credentials that complement my academic background and practical experience."
        >
            <section className="surface-card grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
                        Catalog in progress
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-ink">Verified credentials are available on LinkedIn.</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">
                        The dedicated catalog will be added here. For now, LinkedIn contains the current certificates and issuing organizations.
                    </p>
                </div>
                <a
                    className="primary-button"
                    href="https://www.linkedin.com/in/thehprogrammer/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin aria-hidden="true" />
                    View certifications
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
            </section>
        </PageLayout>
    );
};

export default Certifications;

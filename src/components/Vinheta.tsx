import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import profileImage from '../assets/me.jpg';
import ThemeToggle from './ThemeToggle';

const Vinheta: React.FC = () => {
    return (
        <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-20 sm:px-8">
            <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">
                <ThemeToggle />
            </div>

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="max-w-3xl">
                    <span className="eyebrow">Portfolio · 2026</span>
                    <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
                        Welcome dear visitor.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                        I am Helder, a Computer Engineer building thoughtful software and intelligent systems at the intersection of engineering, data and artificial intelligence.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link className="primary-button" to="/home">
                            Access my portfolio
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                        <a
                            className="secondary-button"
                            href="https://github.com/theHprogrammer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-brand-soft" aria-hidden="true" />
                    <img
                        src={profileImage}
                        alt="Helder Henrique"
                        width="480"
                        height="480"
                        className="aspect-square w-full rounded-[1.75rem] border border-line object-cover shadow-soft"
                    />
                    <div className="absolute -bottom-5 -left-5 rounded-2xl border border-line bg-surface px-5 py-4 shadow-soft sm:-left-10">
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Based in Brazil</p>
                        <p className="mt-1 font-semibold text-ink">Engineering with purpose.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vinheta;

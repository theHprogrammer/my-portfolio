import React, { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaXmark } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavigationListProps {
    onNavigate?: () => void;
}

const navigationItems = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About me' },
    { to: '/academic', label: 'Academic' },
    { to: '/professional', label: 'Professional' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
];

const NavigationList: React.FC<NavigationListProps> = ({ onNavigate }) => {
    return (
        <nav aria-label="Primary navigation">
            <ul className="space-y-1">
                {navigationItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                                    isActive
                                        ? 'bg-brand-soft text-brand-strong'
                                        : 'text-muted hover:bg-soft hover:text-ink'
                                }`
                            }
                            onClick={onNavigate}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const Brand: React.FC = () => {
    return (
        <Link
            to="/home"
            className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Helder Henrique, home"
        >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-action text-sm font-bold text-white">
                H.
            </span>
            <span>
                <span className="block text-sm font-bold text-ink">
                    Helder Henrique
                </span>
                <span className="block text-xs text-muted">
                    Computer Engineer
                </span>
            </span>
        </Link>
    );
};

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMobileOpen) {
            return undefined;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileOpen]);

    return (
        <>
            <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-line bg-surface px-6 py-7 lg:flex">
                <Brand />
                <div className="mt-10 flex-1">
                    <p className="mb-3 px-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                        Explore
                    </p>
                    <NavigationList />
                </div>
                <div className="space-y-3 border-t border-line pt-5">
                    <ThemeToggle showLabel />
                    <a
                        href="https://github.com/theHprogrammer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-muted transition-colors hover:bg-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                        <FaGithub aria-hidden="true" />
                        GitHub profile
                    </a>
                </div>
            </aside>

            <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-surface/95 px-4 backdrop-blur lg:hidden">
                <Brand />
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        onClick={() =>
                            setIsMobileOpen((currentValue) => !currentValue)
                        }
                        aria-label={
                            isMobileOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-expanded={isMobileOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMobileOpen ? (
                            <FaXmark aria-hidden="true" />
                        ) : (
                            <FaBars aria-hidden="true" />
                        )}
                    </button>
                </div>
            </header>

            {isMobileOpen ? (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Close navigation menu"
                        tabIndex={-1}
                    />
                    <div
                        id="mobile-navigation"
                        className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-line bg-surface p-4 shadow-soft lg:hidden"
                    >
                        <NavigationList
                            onNavigate={() => setIsMobileOpen(false)}
                        />
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Sidebar;

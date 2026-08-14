import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
    showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return (
        <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
        >
            {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            {showLabel ? <span>{isDark ? 'Light mode' : 'Dark mode'}</span> : null}
        </button>
    );
};

export default ThemeToggle;

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'portfolio-theme';
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getInitialTheme = (): Theme => {
    if (typeof document === 'undefined') {
        return 'light';
    }

    try {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }
    } catch (error) {
        // Storage can be unavailable in privacy-restricted browser contexts.
    }

    if (document.documentElement.classList.contains('dark')) {
        return 'dark';
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        const isDark = theme === 'dark';

        root.classList.toggle('dark', isDark);
        root.style.colorScheme = theme;

        const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
        themeColor?.setAttribute('content', isDark ? '#0d121b' : '#f7f8fa');

        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (error) {
            // The selected theme still applies for the current session.
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

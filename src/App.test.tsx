import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
    document.documentElement.classList.remove('dark');
});

test('renders the portfolio introduction', () => {
    render(<App />);

    expect(
        screen.getByRole('heading', { name: /welcome dear visitor/i }),
    ).toBeInTheDocument();
    expect(
        screen.getByRole('link', { name: /access my portfolio/i }),
    ).toHaveAttribute('href', '/home');
});

test('toggles and persists the selected theme', () => {
    render(<App />);

    fireEvent.click(
        screen.getByRole('button', { name: /switch to dark mode/i }),
    );

    expect(document.documentElement).toHaveClass('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
});

test.each<[string, RegExp]>([
    ['/home', /engineering useful products/i],
    ['/about', /about me/i],
    ['/academic', /academic history/i],
    ['/professional', /professional history/i],
    ['/projects', /^projects$/i],
    ['/certifications', /^certifications$/i],
    ['/contact', /contact me/i],
])('renders the %s route', (path, heading) => {
    window.history.replaceState({}, '', path);

    render(<App />);

    expect(
        screen.getByRole('heading', { name: heading, level: 1 }),
    ).toBeInTheDocument();
});

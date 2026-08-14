import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-line bg-surface px-5 py-6 text-sm text-muted sm:px-8 lg:px-12">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p>Designed and built by Helder Henrique.</p>
                <p>React · TypeScript · Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;

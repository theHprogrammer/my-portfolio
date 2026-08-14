import React, { ReactNode } from 'react';

export interface TimelineItem {
    date: string;
    title: string;
    subtitle: string;
    location?: string;
    description?: string[];
    icon: ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <ol className="relative ml-4 border-l border-line sm:ml-5">
            {items.map((item) => (
                <li key={`${item.date}-${item.title}`} className="relative mb-8 pl-8 last:mb-0 sm:pl-10">
                    <span className="absolute -left-5 top-5 grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-brand shadow-sm">
                        {item.icon}
                    </span>
                    <article className="surface-card p-5 sm:p-7">
                        <time className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                            {item.date}
                        </time>
                        <h2 className="mt-3 text-xl font-bold text-ink sm:text-2xl">{item.title}</h2>
                        <p className="mt-1 font-semibold text-muted">{item.subtitle}</p>
                        {item.location ? <p className="mt-1 text-sm text-muted">{item.location}</p> : null}
                        {item.description ? (
                            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted sm:text-base">
                                {item.description.map((description) => (
                                    <li key={description}>{description}</li>
                                ))}
                            </ul>
                        ) : null}
                    </article>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;

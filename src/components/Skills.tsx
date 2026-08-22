import React from 'react';
import { skillIcons } from '../content/iconMaps';
import { usePortfolioContent } from '../context/PortfolioContentContext';

const Skills: React.FC = () => {
    const { content } = usePortfolioContent();

    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {content.skillGroups.map((group) => (
                <section key={group.id} className="surface-card p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-ink">
                        {group.title}
                    </h3>
                    <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {group.skills.map((skill) => {
                            const Icon = skill.iconKey
                                ? skillIcons[skill.iconKey]
                                : undefined;

                            return (
                                <li
                                    key={skill.id}
                                    className="flex min-w-0 items-center gap-3 rounded-xl bg-soft p-3"
                                >
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-lg text-brand">
                                        {Icon ? (
                                            <Icon aria-hidden="true" />
                                        ) : (
                                            <span className="font-mono text-xs font-bold">
                                                {skill.name.slice(0, 2)}
                                            </span>
                                        )}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-semibold text-ink">
                                            {skill.name}
                                        </span>
                                        {skill.level ? (
                                            <span className="block truncate text-xs text-muted">
                                                {skill.level}
                                            </span>
                                        ) : null}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default Skills;

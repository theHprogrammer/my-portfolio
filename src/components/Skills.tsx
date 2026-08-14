import React from 'react';
import type { IconType } from 'react-icons';
import { FaDocker, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaReact, FaWordpress } from 'react-icons/fa';
import {
    SiCplusplus,
    SiDjango,
    SiElasticsearch,
    SiFastapi,
    SiFlask,
    SiFlutter,
    SiJavascript,
    SiJupyter,
    SiKeras,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiNumpy,
    SiOpencv,
    SiPandas,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
} from 'react-icons/si';

interface Skill {
    icon: IconType | null;
    name: string;
    level?: string;
}

interface SkillGroup {
    title: string;
    skills: Skill[];
}

const skillGroups: SkillGroup[] = [
    {
        title: 'Languages',
        skills: [
            { icon: SiPython, name: 'Python', level: 'Advanced' },
            { icon: SiCplusplus, name: 'C/C++', level: 'Intermediate' },
            { icon: SiFlutter, name: 'Dart', level: 'Intermediate' },
            { icon: SiJavascript, name: 'JavaScript', level: 'Basic' },
            { icon: SiTypescript, name: 'TypeScript', level: 'Basic' },
            { icon: null, name: 'VHDL', level: 'Basic' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { icon: SiDjango, name: 'Django', level: 'Advanced' },
            { icon: SiFastapi, name: 'FastAPI', level: 'Intermediate' },
            { icon: SiFlask, name: 'Flask', level: 'Intermediate' },
            { icon: SiFlutter, name: 'Flutter', level: 'Intermediate' },
            { icon: FaReact, name: 'React', level: 'Basic' },
            { icon: FaNodeJs, name: 'Node.js', level: 'Basic' },
            { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Basic' },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { icon: SiMysql, name: 'MySQL', level: 'Advanced' },
            { icon: SiPostgresql, name: 'PostgreSQL', level: 'Advanced' },
            { icon: SiMongodb, name: 'MongoDB', level: 'Intermediate' },
            { icon: SiElasticsearch, name: 'Elasticsearch', level: 'Intermediate' },
            { icon: null, name: 'Qdrant', level: 'Intermediate' },
        ],
    },
    {
        title: 'Data Science & AI',
        skills: [
            { icon: SiPandas, name: 'Pandas', level: 'Advanced' },
            { icon: SiNumpy, name: 'NumPy', level: 'Advanced' },
            { icon: SiPython, name: 'Seaborn', level: 'Advanced' },
            { icon: SiJupyter, name: 'Jupyter', level: 'Advanced' },
            { icon: SiPython, name: 'Matplotlib', level: 'Advanced' },
            { icon: SiTensorflow, name: 'TensorFlow', level: 'Intermediate' },
            { icon: SiKeras, name: 'Keras', level: 'Intermediate' },
            { icon: SiPytorch, name: 'PyTorch', level: 'Intermediate' },
            { icon: SiOpencv, name: 'OpenCV', level: 'Intermediate' },
            { icon: SiPython, name: 'NLTK', level: 'Intermediate' },
        ],
    },
    {
        title: 'DevOps & Tools',
        skills: [
            { icon: FaGitAlt, name: 'Git', level: 'Advanced' },
            { icon: FaGithub, name: 'GitHub', level: 'Intermediate' },
            { icon: FaLinux, name: 'Linux', level: 'Intermediate' },
            { icon: FaDocker, name: 'Docker', level: 'Intermediate' },
            { icon: SiKubernetes, name: 'Kubernetes', level: 'Intermediate' },
        ],
    },
    {
        title: 'Communication',
        skills: [
            { icon: null, name: 'Communication' },
            { icon: null, name: 'Teamwork' },
            { icon: null, name: 'Resilience' },
            { icon: null, name: 'Conflict Resolution' },
        ],
    },
    {
        title: 'Methodologies',
        skills: [
            { icon: null, name: 'Scrum' },
            { icon: null, name: 'Kanban' },
            { icon: null, name: 'Extreme Programming' },
        ],
    },
    {
        title: 'Languages spoken',
        skills: [
            { icon: null, name: 'English', level: 'Intermediate' },
            { icon: null, name: 'Portuguese', level: 'Native' },
            { icon: null, name: 'Libras', level: 'Basic' },
        ],
    },
    {
        title: 'Other',
        skills: [
            { icon: FaWordpress, name: 'WordPress', level: 'Intermediate' },
            { icon: null, name: 'OpenAI', level: 'Advanced' },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <div className="grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
                <section key={group.title} className="surface-card p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-ink">{group.title}</h3>
                    <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {group.skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <li key={skill.name} className="flex min-w-0 items-center gap-3 rounded-xl bg-soft p-3">
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-lg text-brand">
                                        {Icon ? <Icon aria-hidden="true" /> : <span className="font-mono text-xs font-bold">{skill.name.slice(0, 2)}</span>}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-semibold text-ink">{skill.name}</span>
                                        {skill.level ? <span className="block truncate text-xs text-muted">{skill.level}</span> : null}
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

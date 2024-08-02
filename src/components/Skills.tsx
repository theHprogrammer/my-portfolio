// src/components/Skills.tsx

import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaLinux, FaDocker, FaWordpress, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiJavascript, SiMongodb, SiPython, SiDjango, SiMysql, SiPostgresql, SiCplusplus, SiPandas, SiNumpy, SiTensorflow, SiKeras, SiPytorch, SiOpencv, SiKubernetes, SiFastapi, SiFlask, SiJupyter, SiElasticsearch } from 'react-icons/si';

interface Skill {
    icon: React.ReactElement | null;
    name: string;
    level?: string;
}

const skills: Record<string, Skill[]> = {
    languages: [
        { icon: <SiPython style={{ color: '#3776AB' }} />, name: 'Python', level: 'Advanced' },
        { icon: <SiCplusplus style={{ color: '#00599C' }} />, name: 'C/C++', level: 'Intermediate' },
        { icon: <SiFlutter style={{ color: '#02569B' }} />, name: 'Dart', level: 'Intermediate' },
        { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, name: 'JavaScript', level: 'Basic' },
        { icon: <SiTypescript style={{ color: '#3178C6' }} />, name: 'TypeScript', level: 'Basic' },
        { icon: null, name: 'VHDL', level: 'Basic' }
    ],
    frameworks: [
        { icon: <SiDjango style={{ color: '#092E20' }} />, name: 'Django', level: 'Advanced' },
        { icon: <SiFastapi style={{ color: '#009688' }} />, name: 'FastAPI', level: 'Intermediate' },
        { icon: <SiFlask style={{ color: '#000000' }} />, name: 'Flask', level: 'Intermediate' },
        { icon: <SiFlutter style={{ color: '#02569B' }} />, name: 'Flutter', level: 'Intermediate' },
        { icon: <FaReact style={{ color: '#61DAFB' }} />, name: 'React', level: 'Basic' },
        { icon: <FaNodeJs style={{ color: '#339933' }} />, name: 'Node.js', level: 'Basic' },
        { icon: <SiTailwindcss style={{ color: '#38B2AC' }} />, name: 'Tailwind CSS', level: 'Basic' },
    ],
    databases: [
        { icon: <SiMysql style={{ color: '#4479A1' }} />, name: 'MySQL', level: 'Advanced' },
        { icon: <SiPostgresql style={{ color: '#336791' }} />, name: 'PostgreSQL', level: 'Advanced' },
        { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB', level: 'Intermediate' },
        { icon: <SiElasticsearch style={{ color: '#005571' }} />, name: 'Elasticsearch', level: 'Intermediate' },
        { icon: null, name: 'Qdrant', level: 'Intermediate' }
    ],
    dataScience: [
        { icon: <SiPandas style={{ color: '#150458' }} />, name: 'Pandas', level: 'Advanced' },
        { icon: <SiNumpy style={{ color: '#013243' }} />, name: 'Numpy', level: 'Advanced' },
        { icon: <SiPython style={{ color: '#1E88E5' }} />, name: 'Seaborn', level: 'Advanced' },
        { icon: <SiJupyter style={{ color: '#F37626' }} />, name: 'Jupyter', level: 'Advanced' },
        { icon: <SiPython style={{ color: '#11557C' }} />, name: 'Matplotlib', level: 'Advanced' },
        { icon: <SiTensorflow style={{ color: '#FF6F00' }} />, name: 'TensorFlow', level: 'Intermediate' },
        { icon: <SiKeras style={{ color: '#D00000' }} />, name: 'Keras', level: 'Intermediate' },
        { icon: <SiPytorch style={{ color: '#EE4C2C' }} />, name: 'PyTorch', level: 'Intermediate' },
        { icon: <SiOpencv style={{ color: '#5C3EE8' }} />, name: 'OpenCV', level: 'Intermediate' },
        { icon: <SiPython style={{ color: '#8C8A8A' }} />, name: 'NLTK', level: 'Intermediate' }
    ],
    devOps: [
        { icon: <FaGitAlt style={{ color: '#F05032' }} />, name: 'Git', level: 'Advanced' },
        { icon: <FaGithub style={{ color: '#181717' }} />, name: 'GitHub', level: 'Intermediate' },
        { icon: <FaLinux style={{ color: '#FCC624' }} />, name: 'Linux', level: 'Intermediate' },
        { icon: <FaDocker style={{ color: '#2496ED' }} />, name: 'Docker', level: 'Intermediate' },
        { icon: <SiKubernetes style={{ color: '#326CE5' }} />, name: 'Kubernetes', level: 'Intermediate' },
    ],
    communication: [
        { icon: null, name: 'Communication' },
        { icon: null, name: 'Teamwork' },
        { icon: null, name: 'Resilience' },
        { icon: null, name: 'Conflict Resolution' },
    ],
    methodologies: [
        { icon: null, name: 'Scrum' },
        { icon: null, name: 'Kanban' },
        { icon: null, name: 'Extreme Programming' },
    ],
    idioms: [
        { icon: null, name: 'English', level: 'Intermediate' },
        { icon: null, name: 'Portuguese', level: 'Native' },
        { icon: null, name: 'Libras', level: 'Basic' },
    ],
    other: [
        { icon: <FaWordpress style={{ color: '#21759B' }} />, name: 'WordPress', level: 'Intermediate' },
        { icon: null, name: 'OpenAI', level: 'Advanced' },
    ],
};

const Skills: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center space-y-10 px-5">
            {Object.keys(skills).map((category, idx) => (
                <div key={idx} className="w-full max-w-7xl bg-gray-900 p-5 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-bold text-fuchsia-400 text-shadow-fuchsia mb-5 capitalize">{category}</h3>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center">
                        {skills[category].map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {skill.icon && <div className="text-4xl mb-2">{skill.icon}</div>}
                                <p className="text-lg text-white">{skill.name}</p>
                                {skill.level && <p className="text-sm text-cyan-300 text-shadow-cyan">{skill.level}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;

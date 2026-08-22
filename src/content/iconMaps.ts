import type { IconType } from 'react-icons';
import {
    FaBriefcase,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaLinux,
    FaNodeJs,
    FaReact,
    FaSchool,
    FaUniversity,
    FaWordpress,
} from 'react-icons/fa';
import { FaBrain, FaCode, FaLayerGroup } from 'react-icons/fa6';
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
import discordLogo from '../assets/discordia.png';
import emailLogo from '../assets/email.png';
import facebookLogo from '../assets/facebook.png';
import githubLogo from '../assets/github.png';
import instagramLogo from '../assets/instagram.png';
import lattesLogo from '../assets/lattes.png';
import linkedinLogo from '../assets/linkedin.png';
import spotifyLogo from '../assets/spotify.png';
import whatsappLogo from '../assets/whatsapp.png';
import youtubeLogo from '../assets/youtube.png';

export const focusIcons: Record<string, IconType> = {
    brain: FaBrain,
    code: FaCode,
    layers: FaLayerGroup,
};

export const timelineIcons: Record<string, IconType> = {
    briefcase: FaBriefcase,
    school: FaSchool,
    university: FaUniversity,
};

export const skillIcons: Record<string, IconType> = {
    cplusplus: SiCplusplus,
    django: SiDjango,
    docker: FaDocker,
    elasticsearch: SiElasticsearch,
    fastapi: SiFastapi,
    flask: SiFlask,
    flutter: SiFlutter,
    git: FaGitAlt,
    github: FaGithub,
    javascript: SiJavascript,
    jupyter: SiJupyter,
    keras: SiKeras,
    kubernetes: SiKubernetes,
    linux: FaLinux,
    mongodb: SiMongodb,
    mysql: SiMysql,
    nodejs: FaNodeJs,
    numpy: SiNumpy,
    opencv: SiOpencv,
    pandas: SiPandas,
    postgresql: SiPostgresql,
    python: SiPython,
    pytorch: SiPytorch,
    react: FaReact,
    tailwindcss: SiTailwindcss,
    tensorflow: SiTensorflow,
    typescript: SiTypescript,
    wordpress: FaWordpress,
};

export const contactIcons: Record<string, string> = {
    discord: discordLogo,
    email: emailLogo,
    facebook: facebookLogo,
    github: githubLogo,
    instagram: instagramLogo,
    lattes: lattesLogo,
    linkedin: linkedinLogo,
    spotify: spotifyLogo,
    whatsapp: whatsappLogo,
    youtube: youtubeLogo,
};

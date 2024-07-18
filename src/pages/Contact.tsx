// src/pages/Contact/Contact.tsx

import React from 'react';
import ContactCard from '../components/ContactCard';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import emailLogo from '../assets/email.png';
import whatsappLogo from '../assets/whatsapp.png';
import lattesLogo from '../assets/lattes.png';
import youtubeLogo from '../assets/youtube.png';
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import spotifyLogo from '../assets/spotify.png';
import discordLogo from '../assets/discordia.png';
import { useSidebar } from '../context/SidebarContext';

const Contact: React.FC = () => {
    const { isSidebarOpen } = useSidebar();

    return (
        <div className={`flex flex-col items-center p-5 ${isSidebarOpen ? 'lg:ml-[220px]' : ''}`}>
            <h1 className="text-5xl font-bold mb-10 text-fuchsia-600 text-shadow-fuchsia">Contact Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-5xl">
                <ContactCard title="LinkedIn" image={linkedinLogo} link="https://www.linkedin.com/in/theHprogrammer" />
                <ContactCard title="GitHub" image={githubLogo} link="https://github.com/theHprogrammer" />
                <ContactCard title="Email" image={emailLogo} link="mailto:helder.hen.silva@gmail.com" />
                <ContactCard title="WhatsApp" image={whatsappLogo} link="https://wa.me/+5517992288143" />
                <ContactCard title="Lattes" image={lattesLogo} link="http://lattes.cnpq.br/2072583923430990" />
                <ContactCard title="YouTube" image={youtubeLogo} link="https://www.youtube.com/channel/UC0oSqkRhIz82pcjx1WRIZnA" />
                <ContactCard title="Facebook" image={facebookLogo} link="https://www.facebook.com/HHS.Helder" />
                <ContactCard title="Instagram" image={instagramLogo} link="https://www.instagram.com/hhs_hen/" />
                <ContactCard title="Spotify" image={spotifyLogo} link="https://open.spotify.com/user/31jogjcje3s3vtvk7ryqyhdr5hy4?si=537f69e9d8b745fb" />
                <ContactCard title="Discord" image={discordLogo} link="https://discord.gg/reuHeBFQkd" />
                {/* Adicione mais cards conforme necessário */}
            </div>
            <h2 className="text-4xl mt-20 mb-10 text-fuchsia-600 text-shadow-fuchsia">Créditos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-cyan-300 text-xs">
                <p className="flex items-center justify-start text-justify">
                    <img src={emailLogo} alt="Enviar Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/enviar" title="enviar ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Enviar ícones criados por Freepik - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={githubLogo} alt="Github Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Github ícones criados por Pixel perfect - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={linkedinLogo} alt="LinkedIn Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Linkedin ícones criados por Freepik - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={whatsappLogo} alt="Whatsapp Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/whatsapp" title="whatsapp ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Whatsapp ícones criados por Fathema Khanom - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={youtubeLogo} alt="Youtube Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/youtube" title="youtube ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Youtube ícones criados por Md Tanvirul Haque - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={facebookLogo} alt="Facebook Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/facebook" title="facebook ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Facebook ícones criados por Freepik - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={instagramLogo} alt="Instagram Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/logotipo-do-instagram" title="logotipo do instagram ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Logotipo do instagram ícones criados por Laisa Islam Ani - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={spotifyLogo} alt="Spotify Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/spotify" title="spotify ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Spotify ícones criados por Freepik - Flaticon</a>
                </p>
                <p className="flex items-center justify-start text-justify">
                    <img src={discordLogo} alt="Discord Ícones" className="w-5 h-5 mr-2" />
                    <a href="https://www.flaticon.com/br/icones-gratis/discordia" title="discórdia ícones" className="hover:text-fuchsia-600 text-shadow-cyan">Discórdia ícones criados por Hight Quality Icons - Flaticon</a>
                </p>
            </div>
        </div>
    );
}

export default Contact;

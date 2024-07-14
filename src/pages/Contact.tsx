import React from 'react';
import '../styles/Contact.css';
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

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contact-cards">
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
            <h2 className="credits-title">Créditos</h2>
            <div className="attributions">
                <p>
                    <img src={emailLogo} alt="Enviar Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/enviar" title="enviar ícones">Enviar ícones criados por Freepik - Flaticon</a>
                </p>
                <p>
                    <img src={githubLogo} alt="Github Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github ícones criados por Pixel perfect - Flaticon</a>
                </p>
                <p>
                    <img src={linkedinLogo} alt="LinkedIn Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones">Linkedin ícones criados por Freepik - Flaticon</a>
                </p>
                <p>
                    <img src={whatsappLogo} alt="Whatsapp Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/whatsapp" title="whatsapp ícones">Whatsapp ícones criados por Fathema Khanom - Flaticon</a>
                </p>
                <p>
                    <img src={youtubeLogo} alt="Youtube Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/youtube" title="youtube ícones">Youtube ícones criados por Md Tanvirul Haque - Flaticon</a>
                </p>
                <p>
                    <img src={facebookLogo} alt="Facebook Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/facebook" title="facebook ícones">Facebook ícones criados por Freepik - Flaticon</a>
                </p>
                <p>
                    <img src={instagramLogo} alt="Instagram Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/logotipo-do-instagram" title="logotipo do instagram ícones">Logotipo do instagram ícones criados por Laisa Islam Ani - Flaticon</a>
                </p>
                <p>
                    <img src={spotifyLogo} alt="Spotify Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/spotify" title="spotify ícones">Spotify ícones criados por Freepik - Flaticon</a>
                </p>
                <p>
                    <img src={discordLogo} alt="Discord Ícones" className="icon-thumbnail" />
                    <a href="https://www.flaticon.com/br/icones-gratis/discordia" title="discórdia ícones">Discórdia ícones criados por Hight Quality Icons - Flaticon</a>
                </p>
            </div>
        </div>
    );
}

export default Contact;
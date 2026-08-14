import React from 'react';
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
import ContactCard from '../components/ContactCard';
import PageLayout, { SectionHeading } from '../components/PageLayout';

const contactLinks = [
    { title: 'LinkedIn', image: linkedinLogo, link: 'https://www.linkedin.com/in/theHprogrammer' },
    { title: 'GitHub', image: githubLogo, link: 'https://github.com/theHprogrammer' },
    { title: 'Email', image: emailLogo, link: 'mailto:helder.hen.silva@gmail.com' },
    { title: 'WhatsApp', image: whatsappLogo, link: 'https://wa.me/+5517992288143' },
    { title: 'Lattes', image: lattesLogo, link: 'http://lattes.cnpq.br/2072583923430990' },
    { title: 'YouTube', image: youtubeLogo, link: 'https://www.youtube.com/channel/UC0oSqkRhIz82pcjx1WRIZnA' },
    { title: 'Facebook', image: facebookLogo, link: 'https://www.facebook.com/HHS.Helder' },
    { title: 'Instagram', image: instagramLogo, link: 'https://www.instagram.com/hhs_hen/' },
    { title: 'Spotify', image: spotifyLogo, link: 'https://open.spotify.com/user/31jogjcje3s3vtvk7ryqyhdr5hy4?si=537f69e9d8b745fb' },
    { title: 'Discord', image: discordLogo, link: 'https://discord.gg/reuHeBFQkd' },
];

const iconCredits = [
    { label: 'Email icon by Freepik', href: 'https://www.flaticon.com/br/icones-gratis/enviar' },
    { label: 'GitHub icon by Pixel perfect', href: 'https://www.flaticon.com/br/icones-gratis/github' },
    { label: 'LinkedIn icon by Freepik', href: 'https://www.flaticon.com/br/icones-gratis/linkedin' },
    { label: 'WhatsApp icon by Fathema Khanom', href: 'https://www.flaticon.com/br/icones-gratis/whatsapp' },
    { label: 'YouTube icon by Md Tanvirul Haque', href: 'https://www.flaticon.com/br/icones-gratis/youtube' },
    { label: 'Facebook icon by Freepik', href: 'https://www.flaticon.com/br/icones-gratis/facebook' },
    { label: 'Instagram icon by Laisa Islam Ani', href: 'https://www.flaticon.com/br/icones-gratis/logotipo-do-instagram' },
    { label: 'Spotify icon by Freepik', href: 'https://www.flaticon.com/br/icones-gratis/spotify' },
    { label: 'Discord icon by Hight Quality Icons', href: 'https://www.flaticon.com/br/icones-gratis/discordia' },
];

const Contact: React.FC = () => {
    return (
        <PageLayout
            eyebrow="Get in touch"
            title="Contact me"
            description="Choose the most convenient channel for professional opportunities, collaboration or a conversation about technology."
        >
            <section aria-label="Contact channels">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {contactLinks.map((contact) => <ContactCard key={contact.title} {...contact} />)}
                </div>
            </section>

            <section className="mt-16">
                <SectionHeading title="Credits" description="Attribution for third-party icons used on this page." />
                <details className="surface-card group p-5">
                    <summary className="cursor-pointer font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                        View icon attributions
                    </summary>
                    <ul className="mt-5 grid gap-3 border-t border-line pt-5 text-sm sm:grid-cols-2">
                        {iconCredits.map((credit) => (
                            <li key={credit.href}>
                                <a
                                    href={credit.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-link"
                                >
                                    {credit.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </details>
            </section>
        </PageLayout>
    );
};

export default Contact;

import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ContactCardProps {
    title: string;
    image: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, image, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group surface-card flex min-h-40 flex-col justify-between p-5 transition-transform hover:-translate-y-1 hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            aria-label={`${title}, opens in a new tab`}
        >
            <div className="flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-soft">
                    <img src={image} alt="" width="40" height="40" className="h-10 w-10 object-contain" loading="lazy" />
                </span>
                <FaArrowUpRightFromSquare className="text-sm text-muted transition-colors group-hover:text-brand" aria-hidden="true" />
            </div>
            <div>
                <h2 className="font-bold text-ink">{title}</h2>
                <p className="mt-1 text-sm text-muted">Open profile</p>
            </div>
        </a>
    );
};

export default ContactCard;

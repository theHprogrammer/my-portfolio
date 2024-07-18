import React from 'react';

interface ContactCardProps {
    title: string;
    image: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, image, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <div className="bg-gray-900 border-2 border-fuchsia-400 rounded-lg shadow-lg p-5 w-40 h-56 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between">
                <h2 className="text-fuchsia-600 text-xl mb-2 text-shadow-fuchsia">{title}</h2>
                <img src={image} alt={title} className="w-20 h-20 object-contain mb-2" />
                <p className="text-cyan-300 text-base text-shadow-cyan transition-transform duration-300 hover:scale-110">Clique aqui</p>
            </div>
        </a>
    );
}

export default ContactCard;

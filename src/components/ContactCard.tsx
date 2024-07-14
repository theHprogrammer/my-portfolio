import React from 'react';
import '../styles/ContactCard.css';

interface ContactCardProps {
    title: string;
    image: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, image, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            <div className="card">
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <p className="click-here">Clique aqui</p>
            </div>
        </a>
    );
}

export default ContactCard;

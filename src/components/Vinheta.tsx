// src/components/Vinheta.tsx

import React, { useState, useEffect } from 'react';
import './Vinheta.css';
import programmerImage from '../assets/THEHPROGRAMMER.png';
import secondImage from '../assets/me.jpg';

const Vinheta: React.FC = () => {
    const [isFirstImage, setIsFirstImage] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFirstImage(prev => !prev);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 500); // Delay for the loading effect
    }, []);

    return (
        <div className={`animated-background ${isLoaded ? 'loaded' : ''}`}>
            <div className="header">
                <h1 className="welcome-text">Welcome dear visitor</h1>
            </div>
            <div className="center-column">
                <svg className="circle-text" viewBox="0 0 300 300">
                    <path id="circlePath" d="M 150, 150 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
                    <text>
                        <textPath href="#circlePath" startOffset="0%">
                            -----#----- theHprogrammer -----#----- Helder -----#----- theHprogrammer -----#----- Helder --
                        </textPath>
                    </text>
                </svg>
                <div className={`content-circle ${isFirstImage ? 'flip' : ''}`}>
                    <img src={isFirstImage ? programmerImage : secondImage} alt="The H Programmer" />
                </div>
            </div>
            <div className="footer">
                <button className="portfolio-button">Access my Portfolio</button>
            </div>
        </div>
    );
}

export default Vinheta;

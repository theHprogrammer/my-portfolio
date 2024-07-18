import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import programmerImage from '../assets/THEHPROGRAMMER.png';
import secondImage from '../assets/me.jpg';

const Vinheta: React.FC = () => {
    const [isFirstImage, setIsFirstImage] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFirstImage(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
    }, []);

    const handlePortfolioClick = () => {
        navigate('/home');
    };

    return (
        <div className={`animated-background ${isLoaded ? 'loaded' : ''}`}>
            <h1 className="welcome-text">
                Welcome dear visitor
            </h1>
            <div className="center-column">
                <svg className="circle-text" viewBox="0 0 300 300">
                    <path id="circlePath" d="M 150, 150 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
                    <text>
                        <textPath href="#circlePath" startOffset="0%">
                            - - - - - theHprogrammer - - - - - - Helder - - - - - theHprogrammer - - - - - Helder
                        </textPath>
                    </text>
                </svg>
                <div className={`content-circle ${isFirstImage ? 'flip' : ''}`}>
                    <img src={isFirstImage ? programmerImage : secondImage} alt="The H Programmer" className="circle-img" />
                </div>
            </div>
            <div className="button-portfolio">
                <button className="portfolio-button" onClick={handlePortfolioClick}>
                    Access my Portfolio
                </button>
            </div>
        </div>
    );
}

export default Vinheta;

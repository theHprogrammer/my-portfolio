import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Academic from './pages/Academic';
import Professional from './pages/Professional';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Vinheta from './components/Vinheta';
import './App.css';
import './transitions.css';

const routesOrder = [
    '/',
    '/home',
    '/about',
    '/academic',
    '/professional',
    '/projects',
    '/certifications',
    '/contact'
];

const App: React.FC = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
}

const Main: React.FC = () => {
    const location = useLocation();
    const prevPathRef = useRef(location.pathname);
    const [transitionClass, setTransitionClass] = useState('');

    useEffect(() => {
        const currentPath = location.pathname;
        const currentIndex = routesOrder.indexOf(currentPath);
        const previousIndex = routesOrder.indexOf(prevPathRef.current);

        if (currentIndex > previousIndex) {
            setTransitionClass('slide-up');
        } else if (currentIndex < previousIndex) {
            setTransitionClass('slide-down');
        } else {
            setTransitionClass('');
        }

        prevPathRef.current = currentPath;
    }, [location.pathname]);

    return (
        <div className="app">
            {location.pathname !== '/' && <Sidebar />}
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    classNames={transitionClass}
                    timeout={500}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Vinheta />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/academic" element={<Academic />} />
                        <Route path="/professional" element={<Professional />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
            {location.pathname !== '/' && <Footer />}
        </div>
    );
}

export default App;

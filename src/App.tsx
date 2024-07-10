// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Vinheta from './components/Vinheta';
import './App.css';
import './transitions.css';

const App: React.FC = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
}

const Main: React.FC = () => {
    const location = useLocation();

    return (
        <div className="app">
            {location.pathname !== '/' && <Sidebar />}
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    classNames="slide"
                    timeout={500}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Vinheta />} />
                        <Route path="/home" element={<Home />} />
                        {/* Adicione mais rotas conforme necessário */}
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
            {location.pathname !== '/' && <Footer />}
        </div>
    );
}

export default App;

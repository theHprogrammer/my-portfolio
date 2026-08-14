import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Vinheta from './components/Vinheta';
import { ThemeProvider } from './context/ThemeContext';
import AboutMe from './pages/AboutMe';
import Academic from './pages/Academic';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Projects from './pages/Projects';

const PortfolioRoutes: React.FC = () => {
    const location = useLocation();
    const isIntroduction = location.pathname === '/';

    const routes = (
        <Routes location={location}>
            <Route path="/" element={<Vinheta />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );

    if (isIntroduction) {
        return (
            <main id="main-content" className="min-h-screen bg-canvas">
                <div key={location.pathname} className="route-enter min-h-screen">
                    {routes}
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen bg-canvas text-ink">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Sidebar />
            <div className="flex min-h-screen flex-col lg:pl-72">
                <main id="main-content" className="flex-1 pt-16 lg:pt-0">
                    <div key={location.pathname} className="route-enter">
                        {routes}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <PortfolioRoutes />
            </Router>
        </ThemeProvider>
    );
};

export default App;

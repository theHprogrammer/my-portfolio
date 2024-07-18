import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

const Sidebar: React.FC = () => {
    const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                if (!isSidebarOpen) toggleSidebar();
            } else {
                if (isSidebarOpen) closeSidebar();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarOpen, toggleSidebar, closeSidebar]);

    const handleNavLinkClick = () => {
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    };

    return (
        <>
            <button
                className={`fixed top-4 left-4 z-50 flex flex-col justify-around items-center w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none ${isSidebarOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            >
                <span className={`block w-full h-1 bg-fuchsia-400 rounded transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
                <span className={`block w-full h-1 bg-fuchsia-400 rounded transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-1 bg-fuchsia-400 rounded transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
            </button>
            <div
                className={`fixed top-0 left-0 sidebar bg-gray-950 text-white flex flex-col items-center pt-14 transform transition-transform duration-300 ease-in-out z-40 neon-border ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <h2 className="mb-10 text-fuchsia-600 font-orbitron text-3xl font-bold text-shadow-fuchsia">Menu</h2>
                <nav>
                    <ul className="list-none p-0">
                        <li className="mb-4">
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/academic"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Academic
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/professional"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Professional
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/certifications"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Certifications
                            </NavLink>
                        </li>
                        <li className="mb-4">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? 'text-fuchsia-600 text-shadow-fuchsia' : 'text-cyan-300 hover:text-fuchsia-600 text-shadow-cyan'
                                }
                                onClick={handleNavLinkClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;

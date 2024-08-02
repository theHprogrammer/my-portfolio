// src/components/Tabs.tsx

import React, { useState } from 'react';

interface TabContent {
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabContent[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            <div className="flex justify-center mb-5">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-2 font-semibold ${
                            activeTab === index ? 'text-4xl font-bold text-fuchsia-500 text-shadow-fuchsia mb-5' : 'text-4xl font-bold text-cyan-300 text-shadow-cyan mb-5'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="text-white text-lg transition-opacity duration-300 ease-in-out">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-500 ease-in-out ${
                            activeTab === index ? 'opacity-100' : 'opacity-0 absolute'
                        }`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;

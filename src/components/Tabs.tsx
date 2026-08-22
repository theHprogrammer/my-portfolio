import React, { useEffect, useId, useState } from 'react';

interface TabContent {
    title: string;
    content: React.ReactNode;
}

interface TabsProps {
    label: string;
    tabs: TabContent[];
}

const Tabs: React.FC<TabsProps> = ({ label, tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsId = useId();

    useEffect(() => {
        if (activeTab >= tabs.length) {
            setActiveTab(0);
        }
    }, [activeTab, tabs.length]);

    const selectTabFromKeyboard = (
        event: React.KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) => {
        const lastIndex = tabs.length - 1;
        let nextIndex = index;

        if (event.key === 'ArrowRight') {
            nextIndex = index === lastIndex ? 0 : index + 1;
        } else if (event.key === 'ArrowLeft') {
            nextIndex = index === 0 ? lastIndex : index - 1;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = lastIndex;
        } else {
            return;
        }

        event.preventDefault();
        setActiveTab(nextIndex);
        document.getElementById(`${tabsId}-tab-${nextIndex}`)?.focus();
    };

    const activeContent = tabs[activeTab];

    if (!activeContent) {
        return null;
    }

    return (
        <div className="surface-card overflow-hidden">
            <div className="overflow-x-auto border-b border-line p-2">
                <div
                    className="flex min-w-max gap-1"
                    role="tablist"
                    aria-label={label}
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.title}
                            id={`${tabsId}-tab-${index}`}
                            type="button"
                            role="tab"
                            className={`min-h-11 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                                activeTab === index
                                    ? 'bg-brand-soft text-brand-strong'
                                    : 'text-muted hover:bg-soft hover:text-ink'
                            }`}
                            aria-selected={activeTab === index}
                            aria-controls={`${tabsId}-panel-${index}`}
                            tabIndex={activeTab === index ? 0 : -1}
                            onClick={() => setActiveTab(index)}
                            onKeyDown={(event) =>
                                selectTabFromKeyboard(event, index)
                            }
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
            <div
                id={`${tabsId}-panel-${activeTab}`}
                className="p-5 text-base leading-7 text-muted sm:p-7"
                role="tabpanel"
                aria-labelledby={`${tabsId}-tab-${activeTab}`}
                tabIndex={0}
            >
                {activeContent.content}
            </div>
        </div>
    );
};

export default Tabs;

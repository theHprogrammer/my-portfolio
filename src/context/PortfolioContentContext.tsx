import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {defaultPortfolioContent} from '../content/defaultPortfolioContent';
import {fetchPortfolioContent, isSanityConfigured} from '../content/sanityClient';
import type {PortfolioContent} from '../content/types';

interface PortfolioContentContextValue {
    content: PortfolioContent;
    isLoading: boolean;
    isUsingFallback: boolean;
}

const PortfolioContentContext = createContext<PortfolioContentContextValue | undefined>(undefined);

const mergeWithDefaults = (remoteContent: PortfolioContent): PortfolioContent => ({
    ...remoteContent,
    settings: {
        ...defaultPortfolioContent.settings,
        ...(remoteContent.settings || {}),
        home: {
            ...defaultPortfolioContent.settings.home,
            ...remoteContent.settings?.home,
        },
        about: {
            ...defaultPortfolioContent.settings.about,
            ...remoteContent.settings?.about,
        },
        academicHeader: {
            ...defaultPortfolioContent.settings.academicHeader,
            ...remoteContent.settings?.academicHeader,
        },
        professionalHeader: {
            ...defaultPortfolioContent.settings.professionalHeader,
            ...remoteContent.settings?.professionalHeader,
        },
        projectsPage: {
            ...defaultPortfolioContent.settings.projectsPage,
            ...remoteContent.settings?.projectsPage,
        },
        certificationsPage: {
            ...defaultPortfolioContent.settings.certificationsPage,
            ...remoteContent.settings?.certificationsPage,
        },
        contactPage: {
            ...defaultPortfolioContent.settings.contactPage,
            ...remoteContent.settings?.contactPage,
        },
    },
});

export const PortfolioContentProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [content, setContent] = useState(defaultPortfolioContent);
    const [isLoading, setIsLoading] = useState(isSanityConfigured);
    const [isUsingFallback, setIsUsingFallback] = useState(!isSanityConfigured);

    useEffect(() => {
        let isActive = true;

        if (!isSanityConfigured) {
            return undefined;
        }

        fetchPortfolioContent()
            .then((remoteContent) => {
                if (!isActive || !remoteContent) {
                    return;
                }

                setContent(mergeWithDefaults(remoteContent));
                setIsUsingFallback(false);
            })
            .catch((error: unknown) => {
                console.error('Não foi possível carregar o conteúdo publicado do Sanity.', error);
                setIsUsingFallback(true);
            })
            .finally(() => {
                if (isActive) {
                    setIsLoading(false);
                }
            });

        return () => {
            isActive = false;
        };
    }, []);

    const value = useMemo(() => ({content, isLoading, isUsingFallback}), [content, isLoading, isUsingFallback]);

    return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
};

export const usePortfolioContent = (): PortfolioContentContextValue => {
    const context = useContext(PortfolioContentContext);

    if (!context) {
        throw new Error('usePortfolioContent deve ser usado dentro de PortfolioContentProvider.');
    }

    return context;
};

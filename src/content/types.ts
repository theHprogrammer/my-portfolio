export interface PageHeaderContent {
    eyebrow: string;
    title: string;
    description: string;
}

export interface LinkContent {
    label: string;
    href: string;
}

export interface FocusAreaContent {
    id: string;
    title: string;
    description: string;
    iconKey: string;
}

export interface HomeContent {
    eyebrow: string;
    title: string;
    introduction: string;
    primaryAction: LinkContent;
    secondaryAction: LinkContent;
    currentFocusEyebrow: string;
    currentFocus: string;
    focusDetails: Array<{ id: string; label: string; value: string }>;
    areasHeader: PageHeaderContent;
    focusAreas: FocusAreaContent[];
}

export interface AboutTabContent {
    id: string;
    title: string;
    paragraphs: string[];
    facts: Array<{ id: string; label: string; value: string }>;
}

export interface AboutContent {
    header: PageHeaderContent;
    greeting: string;
    fullName: string;
    role: string;
    biography: string[];
    profileImageUrl?: string;
    profileImageAlt: string;
    journeyTitle: string;
    tabs: AboutTabContent[];
    skillsHeader: PageHeaderContent;
}

export interface EmptyStateContent {
    badge: string;
    title: string;
    description: string;
    action: LinkContent;
}

export interface CollectionPageContent {
    header: PageHeaderContent;
    emptyState: EmptyStateContent;
}

export interface ContactPageContent {
    header: PageHeaderContent;
    cardActionLabel: string;
    creditsTitle: string;
    creditsDescription: string;
}

export interface PortfolioSettings {
    home: HomeContent;
    about: AboutContent;
    academicHeader: PageHeaderContent;
    professionalHeader: PageHeaderContent;
    projectsPage: CollectionPageContent;
    certificationsPage: CollectionPageContent;
    contactPage: ContactPageContent;
}

export interface TimelineContent {
    id: string;
    period: string;
    title: string;
    subtitle: string;
    location?: string;
    descriptions: string[];
    iconKey: string;
    order: number;
}

export interface SkillContent {
    id: string;
    name: string;
    level?: string;
    iconKey?: string;
}

export interface SkillGroupContent {
    id: string;
    title: string;
    skills: SkillContent[];
    order: number;
}

export interface ContactLinkContent {
    id: string;
    title: string;
    url: string;
    iconKey?: string;
    imageUrl?: string;
    order: number;
}

export interface IconCreditContent {
    id: string;
    label: string;
    url: string;
    order: number;
}

export interface ProjectContent {
    id: string;
    title: string;
    summary: string;
    technologies: string[];
    repositoryUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
    order: number;
}

export interface CertificationContent {
    id: string;
    title: string;
    issuer: string;
    date?: string;
    credentialUrl?: string;
    imageUrl?: string;
    order: number;
}

export interface PortfolioContent {
    settings: PortfolioSettings;
    academicEntries: TimelineContent[];
    professionalEntries: TimelineContent[];
    skillGroups: SkillGroupContent[];
    contactLinks: ContactLinkContent[];
    iconCredits: IconCreditContent[];
    projects: ProjectContent[];
    certifications: CertificationContent[];
}

import type {PortfolioContent} from './types';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId);

const portfolioQuery = `{
    "settings": *[_type == "portfolioSettings" && _id == "portfolioSettings"][0]{
        ...,
        "about": about{
            ...,
            "profileImageUrl": profileImage.asset->url
        }
    },
    "academicEntries": *[_type == "academicEntry"] | order(order asc){
        "id": _id,
        period,
        title,
        subtitle,
        location,
        descriptions,
        iconKey,
        order
    },
    "professionalEntries": *[_type == "professionalEntry"] | order(order asc){
        "id": _id,
        period,
        title,
        subtitle,
        location,
        descriptions,
        "iconKey": "briefcase",
        order
    },
    "skillGroups": *[_type == "skillGroup"] | order(order asc){
        "id": _id,
        title,
        skills[]{"id": _key, name, level, iconKey},
        order
    },
    "contactLinks": *[_type == "contactLink"] | order(order asc){
        "id": _id,
        title,
        url,
        iconKey,
        "imageUrl": image.asset->url,
        order
    },
    "iconCredits": *[_type == "iconCredit"] | order(order asc){
        "id": _id,
        label,
        url,
        order
    },
    "projects": *[_type == "project"] | order(order asc){
        "id": _id,
        title,
        summary,
        technologies,
        repositoryUrl,
        demoUrl,
        "imageUrl": image.asset->url,
        order
    },
    "certifications": *[_type == "certification"] | order(order asc){
        "id": _id,
        title,
        issuer,
        date,
        credentialUrl,
        "imageUrl": image.asset->url,
        order
    }
}`;

export const fetchPortfolioContent = async (): Promise<PortfolioContent | null> => {
    if (!projectId) {
        return null;
    }

    const queryUrl = new URL(`https://${projectId}.apicdn.sanity.io/v2026-08-15/data/query/${dataset}`);
    queryUrl.searchParams.set('query', portfolioQuery);

    const response = await fetch(queryUrl.toString(), {
        headers: {Accept: 'application/json'},
    });

    if (!response.ok) {
        throw new Error(`Sanity respondeu com HTTP ${response.status}.`);
    }

    const payload = await response.json() as {result: PortfolioContent};
    return payload.result;
};

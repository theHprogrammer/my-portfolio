const allowedExternalProtocols = new Set(['http:', 'https:', 'mailto:', 'tel:']);

export const getSafeExternalHref = (value: string | undefined): string | undefined => {
    if (!value) {
        return undefined;
    }

    try {
        const url = new URL(value);
        return allowedExternalProtocols.has(url.protocol) ? value : undefined;
    } catch {
        return undefined;
    }
};

export const getSafeInternalPath = (value: string): string => /^\/(?!\/)/.test(value) ? value : '/';

import { getSafeExternalHref, getSafeInternalPath } from './urlSafety';

test('accepts supported external links', () => {
    expect(getSafeExternalHref('https://example.com/profile')).toBe(
        'https://example.com/profile',
    );
    expect(getSafeExternalHref('mailto:contato@example.com')).toBe(
        'mailto:contato@example.com',
    );
});

test('rejects unsafe external links', () => {
    expect(getSafeExternalHref('javascript:alert(1)')).toBeUndefined();
    expect(getSafeExternalHref('/internal-route')).toBeUndefined();
});

test('accepts only absolute internal paths', () => {
    expect(getSafeInternalPath('/contact')).toBe('/contact');
    expect(getSafeInternalPath('//example.com')).toBe('/');
    expect(getSafeInternalPath('javascript:alert(1)')).toBe('/');
});

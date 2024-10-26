export const extractDomainFromUrl = (url) => {
    try {
        const urlObject = new URL(url);
        return urlObject.hostname.replace(/^www\./, '');
    } catch (e) {
        return null;
    }
};

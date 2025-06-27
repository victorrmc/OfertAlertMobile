import { URL } from '../components/ImageGallery'
export const extractDomainFromUrl = (url: URL): string | null => {
    try {
        const urlObject = new URL(url);
        return urlObject.hostname.replace(/^www\./, '');
    } catch (e) {
        return null;
    }
};

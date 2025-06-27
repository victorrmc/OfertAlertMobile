import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TextInputDefault from './TextInputDefault';
import { allowedDomains, URL } from './ImageGallery';
import { extractDomainFromUrl } from '../utils/urlValidationUtils';
import { useTranslation } from 'react-i18next';

interface UrlInputProps {
    url: URL,
    setUrl: (url: URL) => void;
}
const UrlInput = ({ url, setUrl }: UrlInputProps) => {
    const [error, setError] = useState<string>('');
    const { t } = useTranslation();

    const validateUrl = (url: URL): void => {
        setError('');

        if (!url) {
            setUrl(url);
            return;
        }

        const domain = extractDomainFromUrl(url);

        if (!domain) {
            setError(t('errors.urlFormat'));
            setUrl(url);
            return;
        }

        const isDomainAllowed: boolean = allowedDomains.some(
            allowedDomain => allowedDomain!=null && domain.includes(allowedDomain)
        );

        if (!isDomainAllowed) {
            setError(t('errors.unsupportedStore'));
        }

        setUrl(url);
    };

    return (
        <View className="w-full">
            <TextInputDefault
                placeholder={t('principal.urlPlaceholder')}
                value={url}
                onChangeText={(text) => validateUrl(text as URL)}
                className={`border-2 mb-4 p-3 rounded-2xl w-full h-14 ${error ? 'border-red-500' : 'border-orange-500'}`}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
            />
            {error && (
                <Text className="text-red-500 mb-3">
                    {error}
                </Text>
            )}
        </View>
    );
};

export default UrlInput;
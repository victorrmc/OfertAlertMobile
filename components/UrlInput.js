import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TextInputDefault from './TextInputDefault';
import { allowedDomains } from './ImageGallery';
import { extractDomainFromUrl } from '../utils/urlValidationUtils';

const UrlInput = ({ url, setUrl }) => {
    const [error, setError] = useState('');

    const validateUrl = (text) => {
        setError('');

        if (!text) {
            setUrl(text);
            return;
        }

        const domain = extractDomainFromUrl(formattedUrl);

        if (!domain) {
            setError('Por favor, introduce una URL válida');
            setUrl(text);
            return;
        }

        const isDomainAllowed = allowedDomains.some(
            allowedDomain => domain.includes(allowedDomain)
        );

        if (!isDomainAllowed) {
            setError('Esta tienda no está soportada actualmente');
        }

        setUrl(formattedUrl);
    };

    return (
        <View className="w-full">
            <TextInputDefault
                placeholder="https://www.asos.com/es/nike/zapatillas-123"
                value={url}
                onChangeText={validateUrl}
                className={`border-2 mb-4 p-3 rounded-2xl w-full h-14 ${error ? 'border-red-500' : 'border-orange-500'
                    }`}
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
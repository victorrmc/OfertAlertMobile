import React from 'react';
import { Alert, View } from 'react-native';
import TextInputDefault from './TextInputDefault';

const UrlInput = ({ url, setUrl }) => {
    const validateUrl = (url) => {
        const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}\/?.*$/;
        const allowedDomains = ['asos.com'];
        const isValidUrl = urlRegex.test(url);
        const domain = url.split('/')[2];
        const isAllowedDomain = allowedDomains.some(allowed => domain.includes(allowed));

        return isValidUrl && isAllowedDomain;
    };

    const handleUrlChange = (text) => {
        setUrl(text);
        if (!validateUrl(text)) {
            Alert.alert("Error", "Por favor, ingrese una URL válida.");
        }
    };

    return (
        <View className="w-full">
            <TextInputDefault
                placeholder="https://www.asos.com/es/jack-jones/item/324"
                value={url}
                onChangeText={handleUrlChange}
                className="border-orange-500 border-2 mb-4 p-3 rounded-2xl w-full h-14"
            />
        </View>
    );
};

export default UrlInput;

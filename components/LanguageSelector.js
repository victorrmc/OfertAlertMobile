import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View className="mb-6">
            <Text className="text-white text-xl font-title mb-4">{t('profile.language')}</Text>
            <View className="flex-row space-x-4">
                <TouchableOpacity
                    className={`p-3 rounded-xl ${i18n.language === 'en' ? 'bg-primary' : 'bg-secondary-800'}`}
                    onPress={() => changeLanguage('en')}
                >
                    <Text className="text-white font-medium">English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={`p-3 rounded-xl ${i18n.language === 'es' ? 'bg-primary' : 'bg-secondary-800'}`}
                    onPress={() => changeLanguage('es')}
                >
                    <Text className="text-white font-medium">Español</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LanguageSelector;
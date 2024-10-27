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
            <Text className="text-white text-lg font-bold mb-4">{t('profile.language')}</Text>
            <View className="flex-row space-x-4">
                <TouchableOpacity
                    className={`p-3 rounded-xl ${i18n.language === 'en' ? 'bg-orange-500' : 'bg-slate-800'}`}
                    onPress={() => changeLanguage('en')}
                >
                    <Text className="text-white font-bold">English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className={`p-3 rounded-xl ${i18n.language === 'es' ? 'bg-orange-500' : 'bg-slate-800'}`}
                    onPress={() => changeLanguage('es')}
                >
                    <Text className="text-white font-bold">Español</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LanguageSelector;
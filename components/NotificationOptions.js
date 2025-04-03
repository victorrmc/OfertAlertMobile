import React from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton';
import { useTranslation } from 'react-i18next';

const MUTED = "MUTED";
const ONLY_OFFERS = "ONLY_OFFERS";
const REMINDERS_OFFERS = "REMINDERS_OFFERS";

const NotificationOptions = ({ voice, handleSavePreferences }) => {
    const { t } = useTranslation();

    return (
        <View className="mb-6">
            <Text className="text-white text-xl font-title mb-4">{t('profile.notifications')}</Text>
            <RadioButton
                selected={voice === MUTED}
                value={MUTED}
                label={t('profile.notificationOptions.muted')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
            <RadioButton
                selected={voice === ONLY_OFFERS}
                value={ONLY_OFFERS}
                label={t('profile.notificationOptions.onlyOffers')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
            <RadioButton
                selected={voice === REMINDERS_OFFERS}
                value={REMINDERS_OFFERS}
                label={t('profile.notificationOptions.all')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
        </View>
    );
};

export default NotificationOptions;

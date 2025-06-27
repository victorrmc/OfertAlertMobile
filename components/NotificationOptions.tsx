import React, { ReactElement, useState} from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton';
import { useTranslation } from 'react-i18next';

export enum NotificationOptionsEnum {
    MUTED,
    ONLY_OFFERS,
    REMINDERS_OFFERS,
}

const NotificationOptions = (): ReactElement => {
    const { t } = useTranslation();
    const [voice, setVoice] = useState<NotificationOptionsEnum>(NotificationOptionsEnum.MUTED);
    const handleSavePreferences = (option: NotificationOptionsEnum): void => {
        setVoice(option);
    };

    return (
        <View className="mb-6">
            <Text className="text-white text-xl font-title mb-4">{t('profile.notifications')}</Text>
            <RadioButton
                selected={voice === NotificationOptionsEnum.MUTED}
                value={NotificationOptionsEnum.MUTED}
                label={t('profile.notificationOptions.muted')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
            <RadioButton
                selected={voice === NotificationOptionsEnum.ONLY_OFFERS}
                value={NotificationOptionsEnum.ONLY_OFFERS}
                label={t('profile.notificationOptions.onlyOffers')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
            <RadioButton
                selected={voice === NotificationOptionsEnum.REMINDERS_OFFERS}
                value={NotificationOptionsEnum.REMINDERS_OFFERS}
                label={t('profile.notificationOptions.all')}
                className="flex-row items-center mb-2"
                onPress={(value) => handleSavePreferences(value)}
            />
        </View>
    );
};

export default NotificationOptions;

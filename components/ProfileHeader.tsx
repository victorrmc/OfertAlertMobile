import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import AvatarUser from './AvatarUser';
import { useTranslation } from 'react-i18next';

const ProfileHeader = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <View className="flex-row items-center mb-6">
            <AvatarUser classNameParams="mr-4" />
            <View className="top-6">
                <Text className="text-white text-2xl font-title">{t('profile.title')}</Text>
                <Text className="text-gray-300 mb-6 font-medium">{t('profile.subtitle')}</Text>
            </View>
        </View>
    );
};

export default ProfileHeader;

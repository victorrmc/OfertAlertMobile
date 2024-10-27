import React from 'react';
import { View, Text } from 'react-native';
import AvatarUser from './AvatarUser';


const ProfileHeader = () => (
    <View className="flex-row items-center mb-6">
        <AvatarUser classNameParams="mr-4" />
        <View className="top-6">
            <Text className="text-white text-2xl font-bold">User Profile</Text>
            <Text className="text-gray-300 mb-6 font-bold">Manage the settings and plan</Text>
        </View>
    </View>
);

export default ProfileHeader;

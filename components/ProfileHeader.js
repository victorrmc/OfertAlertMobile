import React from 'react';
import { View, Text } from 'react-native';

const ProfileHeader = () => (
    <View className="flex-row items-center mb-6">
        <View className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
            <Text className="text-white text-2xl font-bold">V</Text>
        </View>
        <View className="ml-4 top-3">
            <Text className="text-white text-2xl font-bold">User Profile</Text>
            <Text className="text-gray-300 mb-6 font-bold">Manage the settings and plan</Text>
        </View>
    </View>
);

export default ProfileHeader;

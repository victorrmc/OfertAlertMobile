import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/authContext';


const AvatarUser = ({ classNameParams = '', textClassName = '' }) => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const handlePress = () => {
        navigation.navigate('UserProfile');
    };

    return (
        <TouchableOpacity onPress={handlePress} className={`bg-primary w-16 h-16 rounded-full flex items-center justify-center mt-10 ${classNameParams}`}>
            <Text className={`text-white text-2xl font-title ${textClassName}`}>{user?.email[0].toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

export default AvatarUser;

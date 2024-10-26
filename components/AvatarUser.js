import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/authContext';


const AvatarUser = ({ classNameParams = '', textClassName = '' }) => {
    const navigation = useNavigation();
    const { user } = useAuth();
    console.log(user)
    const handlePress = () => {
        navigation.navigate('UserProfile');
    };

    return (
        <TouchableOpacity onPress={handlePress} className={`bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center ${classNameParams}`}>
            <Text className={`text-white text-2xl font-bold ${textClassName}`}>{user?.email[0].toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

export default AvatarUser;
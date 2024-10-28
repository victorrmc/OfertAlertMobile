import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext';
import EmailInput from '../components/EmailInput';
import SubmitButton from '../components/SubmitButton';
import SocialButton from '../components/SocialButton';
import { useTranslation } from 'react-i18next';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const navigation = useNavigation();
    const { login } = useAuth();
    const { t } = useTranslation();

    const handleSignUp = () => {
        if (email.trim() === '') {
            Alert.alert('Error', t('errors.login.emailblank'));
            return;
        }
        if (!emailValido) {
            Alert.alert('Error', t('errors.login.emailFormat'));
            return;
        }
        try {
            login(email.trim());
            navigation.reset({
                index: 0,
                routes: [{ name: 'Principal' }],
            });
        } catch (error) {
            Alert.alert('Error', t('errors.login.generic'));
        }
    };

    return (
        <View className="flex-1 justify-center items-center">
            <ImageBackground
                source={require('../public/img/background.jpg')}
                className="flex-1 justify-center items-center w-full"
            >
                <View className="bg-gray-800 opacity-90 p-5 rounded-3xl w-11/12 items-center">
                    <View className="flex-row items-center justify-center mb-5">
                        <Image source={require('../public/img/logo.png')} className="w-12 h-16 mr-3" />
                        <Text className="text-white text-lg font-bold">
                            {t('login.title')}
                        </Text>
                    </View>
                    <EmailInput
                        email={email}
                        setEmail={setEmail}
                        emailValido={emailValido}
                        setEmailValido={setEmailValido}
                    />
                    <SubmitButton onSubmit={handleSignUp} text={t('login.continueButton')} />
                    <Text className="text-gray-200 text-center mb-4">{t('login.continueWith')}</Text>
                    <SocialButton
                        imagePath={require('../public/img/google.png')}
                        text={t('login.googleButton')}
                    />
                    <SocialButton
                        imagePath={require('../public/img/apple.png')}
                        text={t('login.appleButton')}
                    />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}
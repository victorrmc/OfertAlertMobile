import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext';
import EmailInput from '../components/EmailInput';
import SubmitButton from '../components/SubmitButton';
import SocialButton from '../components/SocialButton';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const navigation = useNavigation();
    const { login } = useAuth();

    const handleSignUp = () => {
        if (email.trim() === '') {
            Alert.alert('Error', 'Por favor, completa el campo de correo.');
            return;
        }

        if (!emailValido) {
            Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
            return;
        }

        try {
            // Realizar el inicio de sesión
            login(email.trim());
            navigation.reset({
                index: 0,
                routes: [{ name: 'Principal' }],
            });
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al iniciar sesión. Por favor, intente de nuevo.');
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
                        <Text className="text-white text-lg font-bold">Continue with email</Text>
                    </View>
                    <EmailInput
                        email={email}
                        setEmail={setEmail}
                        emailValido={emailValido}
                        setEmailValido={setEmailValido}
                    />
                    <SubmitButton onSubmit={handleSignUp} text="Continue" />
                    <Text className="text-gray-200 text-center mb-4">or Continue with</Text>
                    <SocialButton
                        imagePath={require('../public/img/google.png')}
                        text="Continue with Google"
                    />
                    <SocialButton
                        imagePath={require('../public/img/apple.png')}
                        text="Continue with Apple"
                    />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import EmailInput from '../components/EmailInput';
import SubmitButton from '../components/SubmitButton';
import TextInputDefault from '../components/TextInputDefault';
import SocialButton from '../components/SocialButton';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const navigation = useNavigation();

    const handleSignUp = () => {
        if (email === '' || password === '' || repeatPassword === '') {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
        } else if (password !== repeatPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
        } else {
            // Lógica para manejar el registro
            Alert.alert('Registro exitoso', `Bienvenido, ${email}`);
            navigation.navigate('Inicio');
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
                        <Text className="text-white text-lg font-bold">Continue with the email</Text>
                    </View>
                    <EmailInput
                        email={email}
                        setEmail={setEmail}
                        emailValido={emailValido}
                        setEmailValido={setEmailValido}
                    />
                    <SubmitButton onSubmit={handleSignUp} text="Continue" />
                    <Text className="text-gray-200 text-center mb-4">or Continue with</Text>
                    <SocialButton imagePath={require('../public/img/google.png')} text="Continue with Google" />
                    <SocialButton imagePath={require('../public/img/apple.png')} text="Continue with Apple" />
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}

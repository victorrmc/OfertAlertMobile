import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Alert, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/authContext';
import SubmitButton from '../components/SubmitButton';
import { useTranslation } from 'react-i18next';
import AuthService from '../service/authService';


const CODE_LENGTH = 6;

export default function VerificationScreen({ route, navigation }) {
    const { email } = route.params;
    const { t } = useTranslation();
    const { login } = useAuth();

    const [code, setCode] = useState('');
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
    const [canResend, setCanResend] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 240) { // Enable resend after 1 minute
            setCanResend(true);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleResend = async () => {
        try {
            setLoading(true);
            const result = await AuthService.sendVerificationCode(email);
            setTimeLeft(300);
            setCanResend(false);
            Alert.alert(t('verification.codeSent'));
        } catch (error) {
            Alert.alert(t('verification.error'), t('verification.sendError'));
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async () => {
        if (code.length !== CODE_LENGTH) {
            Alert.alert(t('verification.error'), t('verification.invalidCodeLength'));
            return;
        }

        setLoading(true);
        try {
            const result = await AuthService.verifyCode(email, code);

            if (result.success) {
                // Actualizar el contexto de autenticación
                login(email);

                // Navegar a la pantalla principal
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Principal' }],
                });
            } else {
                const errorMessage = result.error?.message || t('verification.verifyError');
                Alert.alert(t('verification.error'), errorMessage);
            }
        } catch (error) {
            Alert.alert(t('verification.error'), t('verification.verifyError'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center items-center">
            <ImageBackground
                source={require('../public/img/background.jpg')}
                className="flex-1 justify-center items-center w-full"
            >
                <View className="bg-gray-800 opacity-90 p-8 rounded-3xl w-11/12 items-center">
                    <Text className="text-white text-xl font-bold mb-8">
                        {t('verification.title')}
                    </Text>

                    <Text className="text-gray-300 text-center mb-6">
                        {t('verification.instructions', { email })}
                    </Text>

                    <View className="flex-row justify-center space-x-2 mb-6">
                        {[...Array(CODE_LENGTH)].map((_, index) => (
                            <TextInput
                                key={index}
                                ref={ref => inputRefs.current[index] = ref}
                                className="w-12 h-12 bg-white rounded-lg text-center text-xl font-bold"
                                maxLength={1}
                                keyboardType="number-pad"
                                onChangeText={(value) => {
                                    const newCode = code.split('');
                                    newCode[index] = value;
                                    setCode(newCode.join(''));

                                    if (value && index < CODE_LENGTH - 1) {
                                        inputRefs.current[index + 1].focus();
                                    }
                                }}
                            />
                        ))}
                    </View>

                    <Text className="text-orange-500 text-lg font-bold mb-6">
                        {formatTime(timeLeft)}
                    </Text>

                    <SubmitButton
                        onSubmit={handleVerify}
                        text={t('verification.verify')}
                        disabled={loading || code.length !== CODE_LENGTH}
                    />

                    {canResend && (
                        <SubmitButton
                            onSubmit={handleResend}
                            text={t('verification.resend')}
                            disabled={loading}
                        />
                    )}
                </View>
            </ImageBackground>
            <StatusBar style="light" />
        </View>
    );
}
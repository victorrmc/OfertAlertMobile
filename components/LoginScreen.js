import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Por favor, ingresa tu correo y contraseña.');
        } else {
            // Lógica para manejar el inicio de sesión
            Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${email}`);
            navigation.navigate('Inicio');
        }
    };

    const handleGoogleLogin = () => {
        // Lógica para el inicio de sesión con Google
    };

    const handleAppleLogin = () => {
        // Lógica para el inicio de sesión con Apple
    };

    return (
        <View className="flex-1 justify-center items-center">
            <ImageBackground
                source={require('../public/img/background.jpg')} // Cambia esto por el fondo que desees
                className="flex-1 justify-center items-center w-full"
            >
                <View className="bg-gray-800 opacity-90 p-5 rounded-3xl w-11/12 items-center">
                    <View className="flex-row items-center justify-center mb-5">
                        <Image source={require('../public/img/logo.png')} className="w-12 h-16 mr-3" />
                        <Text className="text-white text-lg font-bold">Log in to your account</Text>
                    </View>

                    {/* Email Input */}
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Altura predefinida
                        placeholder="Email address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#666"
                        onChangeText={setEmail}
                        value={email}
                    />

                    {/* Password Input */}
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Altura predefinida
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="#666"
                        onChangeText={setPassword}
                        value={password}
                    />

                    {/* Log In Button */}
                    <TouchableOpacity className="bg-orange-500 p-3 rounded-full mb-4 w-full h-14 justify-center" onPress={handleLogin}>
                        <Text className="text-white text-center font-bold">Log In</Text>
                    </TouchableOpacity>

                    {/* Divider Text */}
                    <Text className="text-gray-200 text-center mb-4">or Log in with</Text>

                    {/* Continue with Google */}
                    <TouchableOpacity className="bg-gray-800 p-3 rounded-full mb-4 flex-row items-center justify-center w-full h-14" onPress={handleGoogleLogin}>
                        <Image source={require('../public/img/google.png')} className="w-6 h-6 mr-3" />
                        <Text className="text-white text-center font-bold">Continue with Google</Text>
                    </TouchableOpacity>

                    {/* Continue with Apple */}
                    <TouchableOpacity className="bg-gray-800 p-3 rounded-full mb-4 flex-row items-center justify-center w-full h-14" onPress={handleAppleLogin}>
                        <Image source={require('../public/img/apple.png')} className="w-6 h-6 mr-3" />
                        <Text className="text-white text-center font-bold">Continue with Apple</Text>
                    </TouchableOpacity>

                    {/* Sign up and Forgot Password */}
                    <View className="flex-row justify-between w-full">
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className="text-white underline">Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text className="text-white underline">Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <StatusBar style="dark" />
        </View>
    );
}

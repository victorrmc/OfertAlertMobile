import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
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
                source={require('../public/img/background.jpg')} // Cambia esto por el fondo que desees
                className="flex-1 justify-center items-center w-full"
            >
                <View className="bg-gray-800 opacity-90 p-5 rounded-3xl w-11/12 items-center">
                    <View className="flex-row items-center justify-center mb-5">
                        <Image source={require('../public/img/logo.png')} className="w-12 h-16 mr-3" />
                        <Text className="text-white text-lg font-bold">Create new account</Text>
                    </View>

                    {/* Email Input */}
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Altura predefinida para hacerla consistente
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

                    {/* Repeat Password Input */}
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Altura predefinida
                        placeholder="Repeat password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="#666"
                        onChangeText={setRepeatPassword}
                        value={repeatPassword}
                    />

                    {/* Sign Up Button */}
                    <TouchableOpacity className="bg-orange-500 p-3 rounded-full mb-4 w-full h-14 justify-center" onPress={handleSignUp}>
                        <Text className="text-white text-center font-bold">Sign Up</Text>
                    </TouchableOpacity>

                    {/* Divider Text */}
                    <Text className="text-gray-200 text-center mb-4">or Sign up with</Text>

                    {/* Continue with Google */}
                    <TouchableOpacity className="bg-gray-800 p-3 rounded-full mb-4 flex-row items-center justify-center w-full h-14">
                        <Image source={require('../public/img/google.png')} className="w-6 h-6 mr-3" />
                        <Text className="text-white text-center font-bold">Google</Text>
                    </TouchableOpacity>

                    {/* Continue with Apple */}
                    <TouchableOpacity className="bg-gray-800 p-3 rounded-full mb-4 flex-row items-center justify-center w-full h-14">
                        <Image source={require('../public/img/apple.png')} className="w-6 h-6 mr-3" />
                        <Text className="text-white text-center font-bold">Apple</Text>
                    </TouchableOpacity>

                    {/* Already have an account */}
                    <View className="flex-row justify-between w-full">
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="text-white underline">Already have an account? Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <StatusBar style="dark" />
        </View>
    );
}

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TextInputDefault from '../components/TextInputDefault';
export default function CombinedScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [url, setUrl] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please enter your email and password.');
        } else {
            // Handle login logic here
            Alert.alert('Login successful', `Welcome, ${email}`);
            navigation.navigate('Home'); // Replace 'Home' with your actual home screen name
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic here
    };

    const handleAppleLogin = () => {
        // Handle Apple login logic here
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        Alert.alert('Form submitted', `Email: ${email}, URL: ${url}`);
    };

    return (
        <View className="flex-1 justify-center items-center">
            <ImageBackground
                source={require('../public/img/background.jpg')} // Change this to your desired background image
                className="flex-1 justify-center items-center w-full"
            >
                <View className="bg-gray-800 opacity-90 p-5 rounded-3xl w-11/12 items-center">
                    <View className="flex-row items-center justify-center mb-5">
                        <Image source={require('../public/img/logo.png')} className="w-12 h-16 mr-3" />
                        <Text className="text-white text-lg font-bold">Log in to your account</Text>
                    </View>
                    <TextInputDefault placeholder="Email address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#666"
                        onChangeText={setEmail}
                        value={email} />


                    {/* Password Input */}
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Predefined height
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

                    {/* Form Section */}
                    <Text className="font-bold text-lg text-white mb-4">
                        Introduce la url de los productos que quieres comprobar que esten en oferta
                    </Text>
                    <TextInput
                        className="bg-white p-3 rounded-2xl mb-4 w-full h-14" // Predefined height
                        placeholder="URL"
                        placeholderTextColor="#666"
                        onChangeText={(text) => setUrl(text)}
                        value={url}
                    />
                    <TouchableOpacity
                        className="bg-orange-500 p-3 rounded-full mb-4 w-full h-14 justify-center"
                        onPress={handleSubmit}
                    >
                        <Text className="text-white text-center font-bold">Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style="dark" />
        </View>
    );
}
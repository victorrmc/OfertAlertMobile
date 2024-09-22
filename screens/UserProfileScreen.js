import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Star, Zap, Crown, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RadioButton from '../components/RadioButton';

const MUTED = "MUTED";
const ONLY_OFFERS = "ONLY_OFFERS";
const REMINDERS_OFFERS = "REMINDERS_OFFERS";

export default function UserProfileScreen() {

    const navigation = useNavigation();
    const [selectedPlan, setSelectedPlan] = useState('free'); // Estado para el plan seleccionado
    const [voice, setVoice] = useState(REMINDERS_OFFERS);
    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };


    const handleSavePreferences = (option) => {
        setVoice(option);
    };


    return (
        <ScrollView className="flex-1 bg-slate-900 p-6">
            <View className="flex-row items-center mb-6">
                <View className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Text className="text-white text-2xl font-bold">V</Text>
                </View>
                <View className=" ml-4 top-3">
                    <Text className="text-white text-2xl font-bold">User Profile</Text>
                    <Text className="text-gray-300 mb-6 font-bold">Manage the settings and plan</Text>
                </View>
            </View>



            {/* Sección de Notificaciones */}
            <Text className="text-white text-lg font-bold mb-4">Notificaciones</Text>
            <View className="mb-6">
                <RadioButton selected={voice === MUTED} value={MUTED} label={"No notification 🤫"} className="flex-row items-center mb-2" onPress={(value) => handleSavePreferences(value)}>
                </RadioButton>
                <RadioButton selected={voice === ONLY_OFFERS} value={ONLY_OFFERS} label={"Product offers only 🎁"} className="flex-row items-center mb-2" onPress={(value) => handleSavePreferences(value)}>
                </RadioButton>
                <RadioButton selected={voice === REMINDERS_OFFERS} value={REMINDERS_OFFERS} label={"Reminders and offers 🤩"} className="flex-row items-center mb-2" onPress={(value) => handleSavePreferences(value)}>
                </RadioButton>

            </View>

            {/* Sección de Plan */}
            <Text className="text-white text-2xl font-bold mb-6">Choose Your Plan</Text>

            {/* Plan Free */}
            <View className="bg-slate-800 p-4 rounded-2xl mb-6 shadow-lg">
                <TouchableOpacity
                    className={`p-4 rounded-xl `}
                    onPress={() => handlePlanChange('free')}
                >

                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-white font-bold text-xl mb-2">Free</Text>
                        {selectedPlan === 'free' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2" >Selected</Text>}
                    </View>
                    <Text className="text-gray-300 text-3xl font-bold mb-4">0€</Text>
                    <View className="flex-row items-center mb-2">
                        <Check size={20} color="#a3e635" />
                        <Text className="text-gray-300 ml-2">Every 2 days check</Text>
                    </View>
                    <View className="flex-row items-center mb-2">
                        <Check size={20} color="#a3e635" />
                        <Text className="text-gray-300 ml-2">Maximum 10 products</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Check size={20} color="#a3e635" />
                        <Text className="text-gray-300 ml-2">Contains ads</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Plan Basic */}
            <View className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1 rounded-2xl mb-6 shadow-lg">
                <View className="bg-slate-800 rounded-2xl">
                    <TouchableOpacity
                        className={`p-6 rounded-xl ${selectedPlan === 'basic' ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600' : ''}`}
                        onPress={() => handlePlanChange('basic')}
                    >
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white font-bold text-2xl">Basic</Text>

                            <View className="flex-row items-center">
                                {selectedPlan === 'basic' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2" >Selected</Text>}
                                <Zap size={28} color="#60a5fa" fill="#60a5fa" />
                            </View>
                        </View>
                        <Text className="text-white text-xl font-bold mb-6">0.99€</Text>
                        <View className="bg-blue-500/20 p-4 rounded-lg mb-4">
                            <View className="flex-row items-center mb-2">
                                <Check size={24} color="#60a5fa" />
                                <Text className="text-white ml-2 text-lg">Daily offer check</Text>
                            </View>
                            <View className="flex-row items-center mb-2">
                                <Check size={24} color="#60a5fa" />
                                <Text className="text-white ml-2 text-lg">100 products max</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Check size={24} color="#60a5fa" />
                                <Text className="text-white ml-2 text-lg">Ad-free experience</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Plan Premium */}
            <LinearGradient colors={['#ffd700', '#5c4827', '#000000']} className="p-1 rounded-2xl mb-8 ">
                <View className="bg-slate-800 rounded-2xl">
                    <TouchableOpacity
                        className={`p-6 rounded-xl ${selectedPlan === 'premium' ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600' : ''}`}
                        onPress={() => handlePlanChange('premium')}
                    >
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white font-bold text-3xl">Premium</Text>
                            <View className="flex-row items-center">
                                {selectedPlan === 'premium' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2" >Selected</Text>}
                                <Crown size={32} color="#fbbf24" fill="#fbbf24" />
                            </View>
                        </View>
                        <Text className="text-white text-3xl font-bold mb-6">2.99€</Text>
                        <View className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                            <View className="flex-row items-center mb-3">
                                <Star size={28} color="#fbbf24" fill="#fbbf24" />
                                <Text className="text-white ml-2 text-xl">4x daily offer checks</Text>
                            </View>
                            <View className="flex-row items-center mb-3">
                                <Star size={28} color="#fbbf24" fill="#fbbf24" />
                                <Text className="text-white ml-2 text-xl">250 products max</Text>
                            </View>
                            <View className="flex-row items-center">
                                <Star size={28} color="#fbbf24" fill="#fbbf24" />
                                <Text className="text-white ml-2 text-xl">Ad-free experience</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            {/* Botón de Guardar Cambios */}
            <TouchableOpacity className="bg-orange-500 p-4 rounded-full mb-6">
                <Text className="text-white text-center font-bold text-lg">Save changes</Text>
            </TouchableOpacity>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity className="bg-slate-800 p-4 rounded-full mb-12">
                <Text className="text-white text-center font-bold text-lg">Log out</Text>
            </TouchableOpacity>

            <StatusBar style="light" />
        </ScrollView>
    );
}

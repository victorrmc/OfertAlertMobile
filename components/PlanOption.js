import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check, Zap, Crown, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PlanOption = ({ plan, selectedPlan, handlePlanChange }) => {
    const renderPlanContent = () => {
        switch (plan) {
            case 'free':
                return (
                    <View className="bg-slate-800 p-4 rounded-2xl mb-6 shadow-lg">
                        <TouchableOpacity
                            className="p-4 rounded-xl"
                            onPress={() => handlePlanChange('free')}
                        >
                            <View className="flex-row justify-between items-center mb-4">
                                <Text className="text-white font-bold text-xl mb-2">Free</Text>
                                {selectedPlan === 'free' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">Selected</Text>}
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
                );
            case 'basic':
                return (
                    <View className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1 rounded-2xl mb-6 shadow-lg">
                        <View className="bg-slate-800 rounded-2xl">
                            <TouchableOpacity
                                className={`p-6 rounded-xl ${selectedPlan === 'basic' ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600' : ''}`}
                                onPress={() => handlePlanChange('basic')}
                            >
                                <View className="flex-row justify-between items-center mb-4">
                                    <Text className="text-white font-bold text-2xl">Basic</Text>
                                    <View className="flex-row items-center">
                                        {selectedPlan === 'basic' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">Selected</Text>}
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
                );
            case 'premium':
                return (
                    <LinearGradient colors={['#ffd700', '#5c4827', '#000000']} className="p-1 rounded-2xl mb-8">
                        <View className="bg-slate-800 rounded-2xl">
                            <TouchableOpacity
                                className={`p-6 rounded-xl ${selectedPlan === 'premium' ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600' : ''}`}
                                onPress={() => handlePlanChange('premium')}
                            >
                                <View className="flex-row justify-between items-center mb-4">
                                    <Text className="text-white font-bold text-3xl">Premium</Text>
                                    <View className="flex-row items-center">
                                        {selectedPlan === 'premium' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">Selected</Text>}
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
                );
            default:
                return null;
        }
    };

    return renderPlanContent();
};

export default PlanOption;

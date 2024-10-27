import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check, Zap, Crown, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

const PlanOption = ({ plan, selectedPlan, handlePlanChange }) => {
    const { t } = useTranslation();

    const renderPlanContent = () => {
        switch (plan) {
            case 'basic':
                return (
                    <View className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1 rounded-2xl mb-6 shadow-lg">
                        <View className="bg-slate-800 rounded-2xl">
                            <TouchableOpacity
                                className={`p-6 rounded-xl ${selectedPlan === 'basic' ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600' : ''}`}
                                onPress={() => handlePlanChange('basic')}
                            >
                                <View className="flex-row justify-between items-center mb-4">
                                    <Text className="text-white font-bold text-2xl">{t('profile.plans.basic.title')}</Text>
                                    <View className="flex-row items-center">
                                        {selectedPlan === 'basic' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">{t('profile.plans.selected')}</Text>}
                                        <Zap size={28} color="#60a5fa" fill="#60a5fa" />
                                    </View>
                                </View>
                                <Text className="text-white text-xl font-bold mb-6">4.99€</Text>
                                <View className="bg-blue-500/20 p-4 rounded-lg mb-4">
                                    <View className="flex-row items-center mb-2">
                                        <Check size={24} color="#60a5fa" />
                                        <Text className="text-white ml-2 text-lg">Daily offer check</Text>
                                    </View>
                                    <View className="flex-row items-center mb-2">
                                        <Check size={24} color="#60a5fa" />
                                        <Text className="text-white ml-2 text-lg">100 products max</Text>
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
                                <Text className="text-white text-3xl font-bold mb-6">6.99€</Text>
                                <View className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                                    <View className="flex-row items-center mb-3">
                                        <Star size={28} color="#fbbf24" fill="#fbbf24" />
                                        <Text className="text-white ml-2 text-xl">4x daily offer checks</Text>
                                    </View>
                                    <View className="flex-row items-center mb-3">
                                        <Star size={28} color="#fbbf24" fill="#fbbf24" />
                                        <Text className="text-white ml-2 text-xl">250 products max</Text>
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

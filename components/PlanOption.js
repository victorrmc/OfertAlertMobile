import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                                        {selectedPlan === 'basic' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">{t('profile.selected')}</Text>}
                                    </View>
                                </View>
                                <Text className="text-white text-xl font-bold mb-6">{t('profile.plans.basic.price')}</Text>
                                <View className="bg-blue-500/20 p-4 rounded-lg mb-4">
                                    <View className="flex-row items-center mb-2">
                                        <Text className="text-white text-lg">{t('profile.plans.basic.features.check')}</Text>
                                    </View>
                                    <View className="flex-row items-center mb-2">
                                        <Text className="text-white text-lg">{t('profile.plans.basic.features.products')}</Text>
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
                                    <Text className="text-white font-bold text-3xl">{t('profile.plans.premium.title')}</Text>
                                    <View className="flex-row items-center">
                                        {selectedPlan === 'premium' && <Text className="text-white p-2 rounded-2xl bg-orange-400 mr-2">{t('profile.selected')}</Text>}
                                    </View>
                                </View>
                                <Text className="text-white text-3xl font-bold mb-6">{t('profile.plans.premium.price')}</Text>
                                <View className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                                    <View className="flex-row items-center mb-3">
                                        <Text className="text-white text-xl">{t('profile.plans.premium.features.check')}</Text>
                                    </View>
                                    <View className="flex-row items-center mb-3">
                                        <Text className="text-white text-xl">{t('profile.plans.premium.features.products')}</Text>
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

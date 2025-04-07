import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import Ionicons from '@expo/vector-icons/Ionicons';


const PlanOption = ({ plan, selectedPlan, handlePlanChange }) => {
    const { t } = useTranslation();
    const isBasic = plan === "basic";

    const getPlanGradient = () => {
        return isBasic
            ? ["#0a192f", "#1a365d"]
            : ["#334155", "#9333ea"];
    };

    const renderFeatureItem = (text) => (
        <View className="flex-row items-center space-x-2 mb-2">
            <Ionicons name="checkmark" size={24} color="orange" />
            <Text className="text-secondary-200 text-base">{text}</Text>
        </View>
    );

    return (
        <TouchableOpacity
            className={`mb-6 ${selectedPlan === plan ? "scale-105" : "scale-100"}`}
            onPress={() => handlePlanChange(plan)}
            activeOpacity={0.9}
        >
            <LinearGradient
                colors={getPlanGradient()}
                className="rounded-2xl p-6 shadow-lg"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                {/* Header */}
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white font-bold text-3xl">
                        {t(`profile.plans.${plan}.title`)}
                    </Text>
                    {selectedPlan === plan && (
                        <View className="bg-primary px-3 py-1 rounded-full">
                            <Text className="text-white font-medium">
                                {t("profile.selected")}
                            </Text>
                        </View>
                    )}
                </View>

                {/* Price */}
                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold">
                        {t(`profile.plans.${plan}.price`)}
                    </Text>
                    {!isBasic && (
                        <Text className="text-secondary-300 mt-1">per month</Text>
                    )}
                </View>

                {/* Features */}
                <View className="bg-navy-900/20 p-4 rounded-xl">
                    {renderFeatureItem(t(`profile.plans.${plan}.features.check`))}
                    {renderFeatureItem(t(`profile.plans.${plan}.features.products`))}
                    {!isBasic && renderFeatureItem(t(`profile.plans.${plan}.features.ads`))}
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default PlanOption;

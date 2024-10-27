import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext';
import ProfileHeader from '../components/ProfileHeader';
import NotificationOptions from '../components/NotificationOptions';
import PlanOption from '../components/PlanOption';
import SubmitButton from '../components/SubmitButton';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const REMINDERS_OFFERS = "REMINDERS_OFFERS";

export default function UserProfileScreen() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { logout, user } = useAuth();
    const [selectedPlan, setSelectedPlan] = useState('');
    const [voice, setVoice] = useState(REMINDERS_OFFERS);

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    const handleSavePreferences = (option) => {
        setVoice(option);
    };

    const handleSaveChanges = () => {
        Alert.alert('Success', 'Changes saved successfully');
    };

    const handleLogout = () => {
        logout();
        navigation.navigate('Welcome');
    };

    return (
        <ScrollView className="flex-1 bg-slate-900 p-6">
            <ProfileHeader email={user?.email} />
            <NotificationOptions voice={voice} handleSavePreferences={handleSavePreferences} />
            <LanguageSelector />
            <Text className="text-white text-2xl font-bold mb-6">{t('profile.title')}</Text>
            <PlanOption plan="basic" selectedPlan={selectedPlan} handlePlanChange={handlePlanChange} />
            <PlanOption plan="premium" selectedPlan={selectedPlan} handlePlanChange={handlePlanChange} />

            <SubmitButton onSubmit={handleSaveChanges} text={t('profile.saveButton')} />

            <TouchableOpacity className="bg-slate-800 p-4 rounded-full mb-12" onPress={handleLogout}>
                <Text className="text-white text-center font-bold text-lg">{t('profile.logoutButton')}</Text>
            </TouchableOpacity>

            <StatusBar style="light" />
        </ScrollView>
    );
}

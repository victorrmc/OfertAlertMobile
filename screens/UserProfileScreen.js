import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext'; // Ensure the casing matches the actual file name
import ProfileHeader from '../components/ProfileHeader';
import NotificationOptions from '../components/NotificationOptions';
import PlanOption from '../components/PlanOption';
import SubmitButton from '../components/SubmitButton';

const REMINDERS_OFFERS = "REMINDERS_OFFERS";

export default function UserProfileScreen() {
    const navigation = useNavigation();
    const { logout, user } = useAuth();
    const [selectedPlan, setSelectedPlan] = useState('free');
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

            <Text className="text-white text-2xl font-bold mb-6">Choose Your Plan</Text>
            <PlanOption plan="free" selectedPlan={selectedPlan} handlePlanChange={handlePlanChange} />
            <PlanOption plan="basic" selectedPlan={selectedPlan} handlePlanChange={handlePlanChange} />
            <PlanOption plan="premium" selectedPlan={selectedPlan} handlePlanChange={handlePlanChange} />

            <SubmitButton onSubmit={handleSaveChanges} text="Save changes" />

            <TouchableOpacity className="bg-slate-800 p-4 rounded-full mb-12" onPress={handleLogout}>
                <Text className="text-white text-center font-bold text-lg">Log out</Text>
            </TouchableOpacity>

            <StatusBar style="light" />
        </ScrollView>
    );
}

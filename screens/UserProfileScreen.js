import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ProfileHeader from '../components/ProfileHeader';
import NotificationOptions from '../components/NotificationOptions';
import PlanOption from '../components/PlanOption';
import SubmitButton from '../components/SubmitButton';

const REMINDERS_OFFERS = "REMINDERS_OFFERS";

export default function UserProfileScreen() {
    const navigation = useNavigation();
    const [selectedPlan, setSelectedPlan] = useState('free');
    const [voice, setVoice] = useState(REMINDERS_OFFERS);

    const handlePlanChange = (plan) => {
        setSelectedPlan(plan);
    };

    const handleSavePreferences = (option) => {
        setVoice(option);
    };

    const handleSaveChanges = () => {
        // Implementar lógica para guardar cambios
        console.log('Cambios guardados');
    };

    const handleLogout = () => {
        // Implementar lógica para cerrar sesión
        console.log('Sesión cerrada');
        navigation.navigate('Login');
    };

    return (
        <ScrollView className="flex-1 bg-slate-900 p-6">
            <ProfileHeader />
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

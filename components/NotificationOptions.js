import React from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton';

const MUTED = "MUTED";
const ONLY_OFFERS = "ONLY_OFFERS";
const REMINDERS_OFFERS = "REMINDERS_OFFERS";

const NotificationOptions = ({ voice, handleSavePreferences }) => (
    <View className="mb-6">
        <Text className="text-white text-lg font-bold mb-4">Notificaciones</Text>
        <RadioButton
            selected={voice === MUTED}
            value={MUTED}
            label="No notification 🤫"
            className="flex-row items-center mb-2"
            onPress={(value) => handleSavePreferences(value)}
        />
        <RadioButton
            selected={voice === ONLY_OFFERS}
            value={ONLY_OFFERS}
            label="Product offers only 🎁"
            className="flex-row items-center mb-2"
            onPress={(value) => handleSavePreferences(value)}
        />
        <RadioButton
            selected={voice === REMINDERS_OFFERS}
            value={REMINDERS_OFFERS}
            label="Reminders and offers 🤩"
            className="flex-row items-center mb-2"
            onPress={(value) => handleSavePreferences(value)}
        />
    </View>
);

export default NotificationOptions;

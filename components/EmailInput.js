import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import TextInputDefault from './TextInputDefault';
import { debounce } from '../utils/debounce';

const EmailInput = ({ email, setEmail, emailValido, setEmailValido }) => {
    const [localEmail, setLocalEmail] = useState(email);
    const [showError, setShowError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const debouncedValidation = useCallback(
        debounce((text) => {
            const isValid = validateEmail(text);
            setEmailValido(isValid);
            setEmail(text);
            setShowError(!isValid && text !== '');
        }, 2000),
        []
    );

    useEffect(() => {
        // Reset showError when the input is cleared
        if (localEmail === '') {
            setShowError(false);
        }
    }, [localEmail]);

    const handleEmailChange = (text) => {
        setLocalEmail(text);
        setShowError(false); // Hide error message while typing
        debouncedValidation(text);
    };

    return (
        <View className="w-full">
            <TextInputDefault
                placeholder="victor@gmail.com"
                value={localEmail}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                className={`bg-white p-3 rounded-2xl mb-4 w-full h-14 ${showError ? 'border-red-500' : 'border-gray-300'}`}
            />
            {showError && (
                <Text className="text-red-500 mb-3">
                    El formato del correo no es correcto.
                </Text>
            )}
        </View>
    );
};

export default EmailInput;

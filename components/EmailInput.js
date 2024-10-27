import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TextInputDefault from './TextInputDefault';


const EmailInput = ({ email, setEmail, emailValido, setEmailValido }) => {

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        const isValid = validateEmail(text);
        setEmailValido(isValid);
    };

    useEffect(() => {
        if (email === '') {
            setEmailValido(true);
        }
    }, [email]);

    return (
        <View className="w-full">
            <TextInputDefault
                placeholder="victor@gmail.com"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                className={`bg-white p-3 rounded-2xl mb-4 w-full h-14 `}
            />
        </View>
    );
};

export default EmailInput;
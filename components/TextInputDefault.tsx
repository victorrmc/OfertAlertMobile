import React, { ReactElement } from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native';
import { URL } from './ImageGallery';


const TextInputDefault = ({ placeholder, secureTextEntry, value, onChangeText, className, ...props }: TextInputProps): ReactElement => (
    <TextInput
        className={`bg-white p-3 rounded-2xl mb-4 w-full h-14 ${className}`}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        placeholderTextColor="#666"
        onChangeText={onChangeText}
        value={value}
        {...props}
    />
);

export default TextInputDefault;

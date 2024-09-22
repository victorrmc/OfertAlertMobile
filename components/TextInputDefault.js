import { TextInput } from 'react-native';
export default function TextInputDefault({ placeholder, placeholderTextColor, type, handleChange, value }) {
    return (
        <TextInput
            className={`bg-white p-3 rounded-2xl mb-4 w-full h-14`}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={type}
            onChangeText={handleChange}
            value={value}
        />
    );
}
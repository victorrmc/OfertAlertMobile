import { TouchableOpacity, Text } from 'react-native';

const SubmitButton = ({ onSubmit, text }) => (
    <TouchableOpacity
        className="bg-primary p-3 rounded-full mb-6 w-full h-14 justify-center"
        onPress={onSubmit}
    >
        <Text className="text-white text-xl font-title text-center">{text}</Text>
    </TouchableOpacity>
);

export default SubmitButton;

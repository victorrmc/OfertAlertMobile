import { TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';

interface SocialButtonProps {
    imagePath: ImageSourcePropType; 
    text: string;
}

const SocialButton = ({ imagePath, text }: SocialButtonProps) => (
    <TouchableOpacity className="bg-gray-800 p-3 rounded-full mb-4 flex-row items-center justify-center w-full h-14">
        <Image source={imagePath} className="w-6 h-6 mr-3" />
        <Text className="text-white text-center font-medium">{text}</Text>
    </TouchableOpacity>
);

export default SocialButton;
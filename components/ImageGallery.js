import { View, Image } from 'react-native';

const ImageGallery = () => (
    <View className="mt-4 justify-center flex-row flex-wrap gap-2">
        {Array(6).fill().map((_, index) => (
            <Image key={index} className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')} />
        ))}
    </View>
);

export default ImageGallery;

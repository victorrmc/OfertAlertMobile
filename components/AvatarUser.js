import { View, Text } from 'react-native';

const AvatarUser = ({ inicial, classNameParams = '', textClassName = '' }) => (
    <View className={`bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center ${classNameParams}`}>
        <Text className={`text-white text-2xl font-bold ${textClassName}`}>{inicial}</Text>
    </View>
);

export default AvatarUser;

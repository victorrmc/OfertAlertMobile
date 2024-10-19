import React from 'react';
import { View, Image } from 'react-native';

const ImageGallery = () => {
    const logos = [
        require('../public/img/ASOS_logo.jpg'),
        require('../public/img/BSTN_logo.png'),
        require('../public/img/bohoman_logo.jpg'),
        require('../public/img/ASOS_logo.jpg'),
        require('../public/img/ASOS_logo.jpg'),
        require('../public/img/ASOS_logo.jpg'),
    ];

    return (
        <View className="mt-4 w-full flex-row justify-between overflow-hidden ">
            <View className="space-y-2">
                <Image source={logos[0]} className="w-28 h-28 rounded-3xl " />
                <Image source={logos[1]} className="w-28 h-28 rounded-3xl " />
                <Image source={logos[4]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[4]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
            </View>
            <View className="space-y-2 -mt-12">
                <Image source={logos[1]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl " />
                <Image source={logos[3]} className="w-28 h-28 rounded-3xl " />
                <Image source={logos[1]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[3]} className="w-28 h-28 rounded-3xl" />
            </View>
            <View className="space-y-2">
                <Image source={logos[4]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[4]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[4]} className="w-28 h-28 rounded-3xl" />
                <Image source={logos[2]} className="w-28 h-28 rounded-3xl" />
            </View>
        </View>
    );
};

export default ImageGallery;

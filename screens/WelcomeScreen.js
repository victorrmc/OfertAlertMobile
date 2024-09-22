import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ArrowSVG from '../public/img/ArrorwSVG';
import SemicircleSVG from '../public/img/SemicircleSVG';
import * as Device from 'expo-device';
export default function WelcomeScreen() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    console.log(width)
    console.log(Device.manufacturer)
    console.log(Device.modelName)
    console.log(Device.brand)
    console.log(Device.deviceType)


    return (
        <View className="flex-1 bg-slate-800 justify-center items-center">
            <SemicircleSVG width={width + 200} height={height / 2} style={{ position: 'absolute', top: 0, left: -width / 4 }} />
            <Text className="text-4xl font-bold text-orange-500  top-14 self-center">OfferAlert</Text>
            <View className="flex-1 justify-center items-center w-full">

                <Image source={require('../public/img/logo.png')} style={{ transform: [{ rotate: '20deg' }] }} className={` w-40 h-56  relative ${Device.deviceType === 2 ? 'bottom-60 ' : 'bottom-16 self-start ml-4'}  `} />
                <Text className="text-3xl font-bold text-white text-center mb-4">
                    Your Favorite <Text className="text-orange-500 ">Deals</Text>,
                    {Device.deviceType === 2 ? '' : '\n'} All in One Place.
                </Text>
                <Text className={`text-white mx-4 mb-8 ${Device.deviceType === 2 ? 'text-xl mx-10' : 'text-sm'}`}>
                    Discover the best deals and discounts effortlessly. Stay updated with the latest offers and never miss a great deal again!
                </Text>
                <TouchableOpacity
                    className={`bg-orange-500 w-screen rounded-full flex-row items-center justify-center absolute -bottom-4 `}
                    onPress={() => navigation.navigate('UserProfile')}
                    style={{ marginBottom: 20 }}
                >
                    <Text className={`text-slate-900 text-3xl font-bold absolute top-4 ${Device.deviceType === 2 ? 'right-40 text-5xl top-8' : 'right-12'} `}>Let's go</Text>
                    <ArrowSVG width={`${Device.deviceType === 2 ? 800 : width} `} height={`${Device.deviceType === 2 ? 150 : 100} `} />
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View >
    );
}

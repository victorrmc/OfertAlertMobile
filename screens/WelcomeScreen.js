import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ArrowSVG from '../public/img/ArrorwSVG';
import SemicircleSVG from '../public/img/SemicircleSVG';
import * as Device from 'expo-device';
import { useTranslation } from 'react-i18next';

export default function WelcomeScreen() {
    const { t } = useTranslation();
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
            <Text className="text-5xl font-title text-orange-500 top-14 self-center">
                {t('welcome.title')}
            </Text>
            <View className="flex-1 justify-center items-center w-full">
                <Image source={require('../public/img/logo.png')} style={{ transform: [{ rotate: '20deg' }] }} className={`w-44 h-60 relative ${Device.deviceType === Device.DeviceType.TABLET ? 'bottom-60' : 'bottom-24 self-start ml-6'}`} />
                <Text className="text-4xl font-medium text-white text-center mb-4 mt-10">
                    {t('welcome.subtitle1')}<Text className="text-orange-500">{t('welcome.deals')}</Text>{t('welcome.subtitle2')}
                </Text>
                <Text className={`text-white font-regular mx-8 mb-8 ${Device.deviceType === 2 ? 'text-xl mx-10' : 'text-xl'}`}>
                    {t('welcome.description')}
                </Text>
                <TouchableOpacity
                    className={`bg-orange-500 w-screen rounded-full flex-row items-center justify-center absolute -bottom-4 `}
                    onPress={() => navigation.navigate('Principal')}
                    style={{ marginBottom: 20 }}
                >
                    <Text className={`text-slate-900 text-4xl font-title absolute top-4 ${Device.deviceType === Device.DeviceType.TABLET ? 'right-36 text-5xl top-8' : 'right-14'}`}>
                        {t('welcome.button')}
                    </Text>
                    <ArrowSVG width={Device.deviceType === 2 ? 800 : width} height={Device.deviceType === 2 ? 150 : 100} />
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

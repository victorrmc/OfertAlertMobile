import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ArrowSVG from '../public/img/ArrorwSVG';
import * as Device from 'expo-device';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window");
    const isTablet = Device.deviceType === Device.DeviceType.TABLET;

    return (
        <LinearGradient
            colors={["#1e293b", "#0f172a"]}
            className="flex-1 justify-between"
        >

            {/* Contenido principal */}
            <View className="flex-1 px-6 pt-16">
                <Text className="text-5xl font-title text-orange-500 mb-8">
                    {t("welcome.title")}
                </Text>

                <View className="flex-1 justify-center items-center">
                    <Image
                        source={require("../public/img/logo.png")}
                        style={{ transform: [{ rotate: "15deg" }] }}
                        className={`w-44 h-60 ${isTablet ? "scale-125" : ""}`}
                    />

                    <View className="mt-12 mb-4">
                        <Text className="text-4xl font-medium text-white text-center">
                            {t("welcome.subtitle1")}
                            <Text className="text-orange-500">{t("welcome.deals")}</Text>
                            {t("welcome.subtitle2")}
                        </Text>

                    </View>

                    <Text
                        className={`text-slate-300 text-center ${isTablet ? "text-xl px-20" : "text-lg px-4"
                            }`}
                    >
                        {t("welcome.description")}
                    </Text>
                </View>
            </View>

            {/* Botón Vamos actualizado  */}
            <View className="w-full mt-8">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    className="w-full"
                >
                    <View className="bg-orange-500 rounded-full h-[100px] w-full items-center justify-center">
                        <View className="absolute w-full h-full">
                            <ArrowSVG width={width} height={100} />
                        </View>
                        <Text
                            className="text-slate-900 text-4xl font-title absolute mb-14"
                            style={{
                                transform: [{ translateX: width * 0.20 }], // Ajusta este valor según necesites
                            }}
                        >
                            {t("welcome.button")}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            <StatusBar style="light" />
        </LinearGradient>
    );
}

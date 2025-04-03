import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ArrowSVG from '../public/img/ArrorwSVG';
import * as Device from 'expo-device';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WelcomeScreen() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window");
    const isTablet = Device.deviceType === Device.DeviceType.TABLET;

    return (
        <LinearGradient
            colors={["#0d1321", "#1a1b4b", "#c45c24"]}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
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
                    <View className="bg-orange-500 rounded-t-[60px] h-[100px] w-full items-center justify-center flex-row">
                        <Text
                            className="text-slate-900 text-4xl font-title mr-4"
                        >
                            {t("welcome.button")}
                        </Text>
                        <FontAwesome
                            name="angle-double-right"
                            size={36}
                            color="#0f172a"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <StatusBar style="light" />
        </LinearGradient>
    );
}

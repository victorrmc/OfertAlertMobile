import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  ScrollView,
} from "react-native";
import scrapingOfert from "../service/ScrapingWeb";
import { useNavigation } from '@react-navigation/native';
import UrlInput from '../components/UrlInput';
import SubmitButton from '../components/SubmitButton';
import ImageGallery from '../components/ImageGallery';
import AvatarUser from '../components/AvatarUser';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/authContext';

export default function PrincipalScreen() {
  const { user } = useAuth();
  const [url, setUrl] = useState("");
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (!url) {
      Alert.alert(
        t('alerts.error.title'),
        t('alerts.error.invalidUrl'),
        [{ text: t('buttons.ok') }]
      );
      return;
    }

    scrapingOfert({ url, email: user.email })
      .then(() => {
        setUrl("");
        Alert.alert(
          t('alerts.success.title'),
          t('alerts.success.dataSent'),
          [{ text: t('buttons.ok') }]
        );
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        Alert.alert(
          t('alerts.error.title'),
          t('alerts.error.sendingData'),
          [{ text: t('buttons.ok') }]
        );
      });
  };

  return (
    <ScrollView className="flex-1 px-5 w-full bg-slate-900">
      <View className="items-center w-full">
        <View className="items-center w-full">
          <AvatarUser classNameParams="self-start mb-10" />
          <UrlInput url={url} setUrl={setUrl} />
          <SubmitButton onSubmit={handleSubmit} text={"Send"} />
          <ImageGallery />
          <StatusBar style="light" />
        </View>
      </View>
    </ScrollView>
  );
}
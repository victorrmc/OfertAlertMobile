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

export default function PrincipalScreen() {
  const [url, setUrl] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!url) {
      Alert.alert("Error", "Por favor, ingrese una URL válida.");
      return;
    }

    scrapingOfert({ url, email: user.email })
      .then(() => {
        setUrl("");
        Alert.alert("Éxito", "Los datos se han enviado correctamente.");
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        Alert.alert("Error", "Hubo un problema al enviar los datos. Por favor, intente de nuevo.");
      });
  };

  return (
    <ScrollView className="flex-1 px-5 w-full bg-slate-900">
      <View className="items-center w-full">
        <View className="items-center w-full">
          <AvatarUser classNameParams="justify-center items-center self-start my-10" />
          <UrlInput url={url} setUrl={setUrl} />
          <SubmitButton onSubmit={handleSubmit} text={"Send"} />
          <ImageGallery />
          <StatusBar style="light" />
        </View>
      </View>
    </ScrollView>
  );
}
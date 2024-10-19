import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Alert,
  ScrollView,
} from "react-native";
import scrapingOfert from "../service/ScrapingWeb";
import { useNavigation } from '@react-navigation/native';
import EmailInput from '../components/EmailInput';
import UrlInput from '../components/UrlInput';
import SubmitButton from '../components/SubmitButton';
import ImageGallery from '../components/ImageGallery';

export default function PrincipalScreen() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [url, setUrl] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!emailValido) {
      Alert.alert("Error", "Por favor, ingrese un correo electrónico válido.");
      return;
    }

    scrapingOfert({ url, email })
      .then(() => {
        setEmail("");
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
          <View className="bg-orange-500 w-16 h-16 rounded-full flex justify-center items-center self-start mt-10">
            <Text className="text-white text-2xl font-bold">V</Text>
          </View>
          <EmailInput
            email={email}
            setEmail={setEmail}
            emailValido={emailValido}
            setEmailValido={setEmailValido}
          />
          <SubmitButton onSubmit={handleSubmit} />
          <UrlInput url={url} setUrl={setUrl} />
          <ImageGallery />
          <StatusBar style="light" />
        </View>
      </View>
    </ScrollView>
  );
}

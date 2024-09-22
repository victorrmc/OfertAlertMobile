import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import scrapingOfert from "../service/ScrapingWeb";
import { useNavigation } from '@react-navigation/native';
import TextInputDefault from '../components/TextInputDefault';

export default function PrincipalScreen() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [url, setUrl] = useState("");
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValido(validateEmail(text));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
    <ScrollView
      className="flex-1 px-5 w-full bg-slate-900"
    >
      <View className="items-center w-full">
        <View className="items-center w-full">
          <View className="bg-orange-500 w-16 h-16 rounded-full flex justify-center items-center self-start mt-6">
            <Text className="text-white text-2xl font-bold">V</Text>
          </View>


          <TextInput
            className={`bg-white p-3 rounded-3xl mb-4 w-full mt-4 h-14 ${emailValido ? 'border-gray-300' : 'border-red-500'
              } `}
            placeholder="https://www.asos.com/es/jack-jones/item/324"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#666"
            onChangeText={handleEmailChange}
            value={email}
          />
          {!emailValido && (
            <Text className="text-red-500 mb-3">
              El formato del correo no es correcto.
            </Text>
          )}

          <TouchableOpacity
            className="bg-orange-500 p-3 rounded-full mb-12 w-full h-14 justify-center"
            onPress={handleSubmit}
          >
            <Text className="text-white text-xl font-bold text-center">Enviar</Text>
          </TouchableOpacity>
          <TextInput
            className="border-orange-500 border-2 mb-4  p-3 rounded-3xl 
           w-full h-14"
            placeholderTextColor="white"
            placeholder="URL"
            onChangeText={(text) => setUrl(text)}
            value={url}
          />
          <View className=" mt-4 justify-center flex-row flex-wrap gap-2">
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
            <Image className="w-32 h-32 rounded-3xl" source={require('../public/img/ASOS_logo.jpg')}></Image>
          </View>


        </View>
      </View>
    </ScrollView>
  );
}

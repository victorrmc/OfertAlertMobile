import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Alert,
  ScrollView,
} from "react-native";
import scrapingOfert from "../service/ScrapingWeb";
import { useNavigation } from '@react-navigation/native';

export function Inicio() {
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
    <View className="flex-1 items-center justify-center mt-10 px-5">
      <ScrollView>
        <View className="items-center">
          <Text className="text-xl text-white">
            <Text className="text-orange-500">OfertAlert</Text> Encuentra las mejores ofertas sin esfuerzo
          </Text>
          <Text className="text-wh text-center">
            Hola cuchi te aaamooo ♥ ♥ ♥ ♥ ♥
          </Text>
          <Text className="font-bold text-lg text-white mb-4">Email</Text>
          <TextInput
            className={`w-48 h-10 border ${emailValido ? 'border-gray-300' : 'border-red-500'
              } rounded px-2 text-white mb-3`}
            placeholder="Correo electrónico"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            value={email}
          />
          {!emailValido && (
            <Text className="text-red-500 mb-3">
              El formato del correo no es correcto.
            </Text>
          )}
          <Text className="font-bold text-lg text-white mb-4">
            Introduce la url de los productos que quieres comprobar que esten en oferta
          </Text>
          <TextInput
            className="w-48 h-10 border border-gray-300 rounded px-2 text-white mb-3"
            placeholderTextColor="white"
            placeholder="URL"
            onChangeText={(text) => setUrl(text)}
            value={url}
          />
          <TouchableOpacity
            className="bg-orange-500 py-2 px-5 rounded"
            onPress={handleSubmit}
          >
            <Text className="text-white font-bold">Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-blue-500 py-2 px-5 rounded mt-4"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-white font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

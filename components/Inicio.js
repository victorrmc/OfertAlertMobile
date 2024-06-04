import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
  ScrollView,
} from "react-native";

export function Inicio() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true); // Estado para verificar si el correo es válido
  const [url, setUrl] = useState("");

  // Función para actualizar el estado del correo electrónico y verificar su validez
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValido(validateEmail(text)); // Validar el correo electrónico cuando se cambia
  };

  // Función para validar el formato del correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    // Verificar si el correo electrónico es válido antes de continuar
    if (!emailValido) {
      Alert.alert("Error", "Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Aquí puedes realizar alguna acción con los valores de email y url, como enviarlos a un servidor, etc.
    console.log("Email:", email);
    console.log("URL:", url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.titulo, styles.TextContainer]}>
          <Text style={styles.naranja}t>OfertAlert</Text> Encuentra las mejores ofertas sin esfuerzo
        </Text>
        <Text style={styles.TextContainer}>
          Esta aplicación te permite seguir el precio de productos online y
          recibir alertas cuando haya ofertas. Sólo tienes que agregar los enlaces
          de los productos que te interesen separados por comas. La aplicación
          revisará los precios cada 30 minutos y te enviará un email si detecta un
          descuento o promoción. Así podrás estar al tanto de las mejores ofertas
          sin tener que buscar manualmente.
        </Text>
        <Text style={[styles.label, styles.TextContainer]}>Email</Text>
        <TextInput
          style={[styles.input, styles.TextContainer, !emailValido && styles.inputInvalid]} // Aplicar un estilo diferente si el correo no es válido
          placeholder="Correo electrónico"
          placeholderTextColor="white"
          keyboardType="email-address"
          onChangeText={handleEmailChange} // Usar la función handleEmailChange en lugar de setEmail
          value={email}
        />
        {!emailValido && (
          <Text style={styles.errorText}>
            El formato del correo no es correcto.
          </Text>
        )}
        <Text style={[styles.label, styles.TextContainer]}>
          Introduce la url de los productos que quieres comprobar que esten en
          oferta
        </Text>
        <TextInput
          style={[styles.input, styles.TextContainer]}
          placeholderTextColor="white"
          placeholder="URL"
          onChangeText={(text) => setUrl(text)}
          value={url}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.img}
          source={require("../public/img/ASOS_logo.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../public/img/bohoman_logo.jpg")}
        />
        <Image
          style={styles.img}
          source={require("../public/img/BSTN_logo.png")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    color: '#fff',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  TextContainer: {
    color: '#fff',
  },
  content: {
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputInvalid: {
    borderColor: "red", // Establecer un borde rojo si el correo no es válido
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  img: {
    width: 110,
    height: 110,
    marginTop: 20,
  },
  naranja: {
    fontSize: 22,
    color: "orange",
  },
  titulo: {
    fontSize: 20,
  },
  label: {
    fontWeight: "bold",
  }
});

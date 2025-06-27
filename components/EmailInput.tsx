import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import TextInputDefault from "./TextInputDefault";
import { useTranslation } from "react-i18next";
import { debounce } from "../utils/debounce";
interface emailInputProps {
  email: string;
  setEmail: (email: string) => void;
  emailValido: boolean;
  setEmailValido: (emailValido: boolean) => void;
}

const EmailInput = ({
  email,
  setEmail,
  emailValido,
  setEmailValido,
}: emailInputProps) => {
  const { t }: { t: (key: string) => string } = useTranslation();

  const validateEmail = (e: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const debouncedValidate = useRef(
    debounce((text: string) => {
      setEmailValido(validateEmail(text));
    }, 500)
  ).current;

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailValido(true);
    debouncedValidate(text);
  };

  return (
    <View className="w-full">
      <TextInputDefault
        secureTextEntry={false}
        placeholder={t("login.emailPlaceholder")}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        className={`bg-white p-3 rounded-2xl mb-4 w-full h-14 `}
      />
      {!emailValido && email !== "" && email !== null && (
        <Text className="text-red-500 mb-2">
          {t("errors.login.emailFormat")}
        </Text>
      )}
    </View>
  );
};

export default EmailInput;

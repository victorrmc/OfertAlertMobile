import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import PrincipalScreen from './screens/PrincipalScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { AuthProvider, useAuth } from './context/authContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations/i18n';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();
  const [loaded, error] = useFonts({
    'Outfit-Bold': require('./public/Fonts/Outfit-Bold.ttf'),
    'Outfit-Medium': require('./public/Fonts/Outfit-Medium.ttf'),
    'Outfit-Regular': require('./public/Fonts/Outfit-Regular.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={user ? "Principal" : "Welcome"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false // Deshabilita el gesto de retroceso
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Principal" component={PrincipalScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </AuthProvider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3C',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

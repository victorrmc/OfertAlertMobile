import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import PrincipalScreen from './screens/PrincipalScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { AuthProvider, useAuth } from './context/authContext';

const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();

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
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
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
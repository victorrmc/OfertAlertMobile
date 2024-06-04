import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Inicio } from './components/Inicio';  
export default function App() {
  return (
    <View style={styles.container}>
      <Inicio/>
      <StatusBar style="auto" />
    </View>
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

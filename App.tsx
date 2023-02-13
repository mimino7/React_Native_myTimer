import Navigation from './app/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from '@/providers/AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const queryClient = new QueryClient



export default function App() {

  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  })
  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          {/* <View style={styles.container} > */}
          {/* <Text style={styles.text} >Open up App.tsx to start working on !</Text> */}
          <Navigation />
          <StatusBar style="light" />
          {/* </View > */}
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0D1716',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {

    color: 'white'
  },
});

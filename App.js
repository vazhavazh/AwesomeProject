import { useCallback } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'
import BgPicture from './assets/img/bg.png'
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto 400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto 500': require('./assets/fonts/Roboto-Medium.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={BgPicture} resizeMode="cover" style={styles.image}>
        <RegistrationScreen />
      </ImageBackground>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});





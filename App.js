import { useCallback } from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import BgPicture from './assets/img/bg.png'
import { useFonts } from 'expo-font';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'
import PostsScreen from './screens/PostsScreen/PostsScreen'
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto 400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto 500': require('./assets/fonts/Roboto-Medium.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={styles.container}>
          <ImageBackground source={BgPicture} resizeMode="cover" style={styles.image}>
            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            {/* <PostsScreen /> */}
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>


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





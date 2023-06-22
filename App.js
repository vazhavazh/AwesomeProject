import { useCallback } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen'
import BgPicture from './assets/img/bg.png'

export default function App() {
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
    justifyContent: 'center',
  },
});





// import React from 'react';
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// const image = { uri: 'https://reactjs.org/logo-og.png' };

// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>

//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },

// });

// export default App;
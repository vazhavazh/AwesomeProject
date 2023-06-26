
import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


const PostsScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.createPostContainer}>
      {image ? (
        <ImageBackground source={{ uri: image }} style={styles.photoContainer}>
          <TouchableOpacity style={styles.iconFrame} onPress={pickImage}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/camera_alt-black-24.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.iconFrame} onPress={pickImage}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/camera_alt-black-24.png')}
            />
          </TouchableOpacity>
        </View>
      )}
      {image ? (
        <Text style={styles.editTitle}>Редагувати фото</Text>
      ) : (
          <Text style={styles.editTitle}>Завантажте фото </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          // value={email}
          // onChangeText={setEmail}
          style={styles.input}
          placeholder='Назва...'
        />
        <TextInput
          // value={password}
//           onChangeText={setPassword}
          style={styles.input}
          placeholder='Пароль'
          secureTextEntry />
      </View>
      <TouchableOpacity
        style={styles.button}
        // onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  createPostContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 34,
    backgroundColor: '#FFFF',
  },
  photoContainer: {
    width: '100%',
    minHeight: 240,
    maxHeight: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconFrame: {
    minWidth: 60,
    minHeight: 60,
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 60,
    backgroundColor: '#FFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  editTitle: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: 32,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginBottom: 32,
  },
  input: {
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Roboto 400',
    backgroundColor: 'transparent',
    // borderRadius: 16,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: '#E8E8E8',
    // paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  button: {
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    fontSize: 16,
    fontFamily: 'Roboto 400',
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PostsScreen;

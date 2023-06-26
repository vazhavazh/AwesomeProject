
import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
});

export default PostsScreen;

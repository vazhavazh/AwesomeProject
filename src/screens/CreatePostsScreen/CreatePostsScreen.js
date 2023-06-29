import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const CreatePostsScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState(null);

  const handleLocationInputClick = () => {
    Linking.openURL('https://www.google.com/maps');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
        <Text style={styles.editTitle}>Завантажте фото</Text>
      )}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.locationInputContainer} onPress={handleLocationInputClick}>
          <Image
            source={require('../../../assets/icons/map-pin.png')}
            style={styles.locationIcon}
          />
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.locationInput}
            placeholder="Місцевість..."
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  createPostContainer: {
    flex: 1,
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
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#E8E8E8',
    paddingTop: 13,
    paddingBottom: 13,
  },
  locationIcon: {
    width: 24,
    height: 24,
  },
  locationInput: {
    flex: 1,
    color: '#BDBDBD',
    fontSize: 16,
    fontFamily: 'Roboto 400',
  },
  button: {
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    fontSize: 16,
    fontFamily: 'Roboto 400',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
  },
  buttonText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
});

export default CreatePostsScreen;

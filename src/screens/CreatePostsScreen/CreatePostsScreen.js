import React, { useState, useEffect, useRef } from "react";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native';
import MapScreen from "../MapScreen/MapScreen";
import { useNavigation } from '@react-navigation/native';



const CreatePostsScreen = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const goToMapScreen = () => {
    
    navigation.navigate("MapScreen")
    console.log(`icon pressed`)
  }
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.createPostContainer}>
      <Camera
        style={styles.photoContainer}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 0, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconFrame,
          {
            backgroundColor: image ? "rgba(255, 255, 255, 0.3)" : "#ffff",
            alignSelf: 'center'
          }
          ]}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setImage(uri)
              }
            }}>
            <Image
              style={styles.icon}
              source={require('../../../assets/icons/camera_alt-black-24.png')}
            />
          </TouchableOpacity>
        </View>
      </Camera>
      <Text style={styles.editTitle}>{image ? "Редагувати фото" : "Завантажте фото"}</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.locationInputContainer}
          onPress={goToMapScreen}
        >
          <Image
            source={require('../../../assets/icons/map-pin.png')}
            style={styles.locationIcon}
            
          />
          <TextInput
            // value={location}
            // onChangeText={setLocation}
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
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  iconFrame: {
    minWidth: 60,
    minHeight: 60,
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 60,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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


  photoView: {

    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",

  },

  flipContainer: {
    position: "absolute",
    bottom: 12,
    alignSelf: 'flex-end',


  },


});

export default CreatePostsScreen;



import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import BgPicture from '../../../assets/img/bg.png'
const ProfileScreen = () => {
    return (
        <ImageBackground source={BgPicture} resizeMode="cover" style={styles.image}>
            
        </ImageBackground>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
})
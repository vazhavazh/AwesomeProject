import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text,  ImageBackground, } from 'react-native';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useNavigation } from '@react-navigation/native';
import BgPicture from '../../../assets/img/bg.png';

const RegistrationScreen = () => {
    const navigation = useNavigation();

    const handleEditPhoto = () => {
        console.log('edit Button pressed!');
    };
    const handleAlreadyRegisterLink = () => {
        navigation.navigate("Login")
    }
    return (
        
                 <ImageBackground source={BgPicture} resizeMode="cover" style={styles.image}>
                    <View style={styles.contentContainer}>
                    <View style={styles.registerContainer}>
                        <View style={styles.avatarContainer}>
                            <TouchableOpacity
                                style={styles.editAvatarButton}
                                onPress={handleEditPhoto}
                            >
                                <View style={styles.horizontalLine} />
                                <View style={styles.verticalLine} />
                            </TouchableOpacity>
                        </View>
                        <RegistrationForm />
                        <Text onPress={handleAlreadyRegisterLink} style={styles.alreadyRegisterLink}>Вже є акаунт? Увійти</Text>
                        </View>
               </View>
                </ImageBackground>
   
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    registerContainer: {
        paddingTop: 92,
        paddingRight: 16,
        paddingBottom: 78,
        paddingLeft: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        
    },
    avatarContainer: {
        position: 'absolute',
        left: 128,
        top: -50,
        maxWidth: 120,
        maxHeight: 120,
        minWidth: 120,
        minHeight: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    editAvatarButton: {
        position: 'absolute',
        width: 25,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        left: 107,
        top: 85,
        borderWidth: 1,
        borderColor: '#FF6C00'
    },
    horizontalLine: {
        position: 'absolute',
        width: 1,
        height: 13,
        backgroundColor: '#FF6C00',
        transform: [{ rotate: '-90deg' }],
    },
    verticalLine: {
        position: 'absolute',
        width: 1,
        height: 13,
        backgroundColor: '#FF6C00',
    },

    alreadyRegisterLink: {
        marginTop: 16,

        color: '#1B4371',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto 400',
    }
});
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from 'react-native';

const RegistrationScreen = () => {
    const handleEditPhoto = () => {
        console.log('edit Button pressed!');
    };

    const handleRegistration = () => {
        console.log('register button pressed')
    }

    const handleAlreadyRegisterLink = () => {
        console.log('link pressed')
    }

    
    return (
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
            <Text style={styles.registerTitle}>Реєстрація</Text>
            <View style={styles.registerInputContainer}>
                <TextInput
                    style={styles.registerInput}
                    placeholder='Логін'

                />
                <TextInput style={styles.registerInput} placeholder='Адреса електронної пошти' />
                <TextInput style={styles.registerInput} placeholder='Пароль' />
            </View>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegistration}
            >
                <Text style={styles.registerButtonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text onPress={handleAlreadyRegisterLink} style={styles.alreadyRegisterLink}>Вже є акаунт? Увійти</Text>
        </View>
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    registerContainer: {
        paddingTop: 92,
        paddingRight: 16,
        paddingBottom: 78,
        paddingLeft: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
    registerTitle: {
        marginBottom: 33,

        color: '#212121',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        fontSize: 30,
        fontFamily: 'Roboto 500',
        letterSpacing: 0.3,
    },
    registerInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginBottom: 43,
    },
    registerInput: {
        fontSize: 16,
        fontFamily: 'Roboto 400',
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    registerButton: {
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
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    alreadyRegisterLink: {
        marginTop: 16,

        color: '#1B4371',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto 400',
    }
});
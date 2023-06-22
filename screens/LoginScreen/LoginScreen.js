import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, } from 'react-native';

const LoginScreen = () => {


    const handleLogin = () => {
        console.log('login button pressed')
    }

    const handleNonRegister = () => {
        console.log('link pressed')
    }


    return (
        <View style={styles.loginContainer}>

            <Text style={styles.loginTitle}>Увійти</Text>
            <View style={styles.loginInputContainer}>
                <TextInput style={styles.loginInput} placeholder='Адреса електронної пошти' />
                <TextInput style={styles.loginInput} placeholder='Пароль' />
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.nonRegisterText}>Немає акаунту? <Text onPress={handleNonRegister} style={styles.nonRegisterLink}>Зареєструватися</Text></Text>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 32,
        paddingRight: 16,
        paddingBottom: 144,
        paddingLeft: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    loginTitle: {
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
    loginInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginBottom: 43,
    },
    loginInput: {
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
    loginButton: {
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
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    nonRegisterText: {
        marginTop: 16,

        color: '#1B4371',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto 400',
    },
    nonRegisterLink: {
        textDecorationLine: 'underline'
    }
});
import React from 'react';
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginScreen = () => {
    const handleNonRegister = () => {
        console.log('link pressed')
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.loginContainer}>
                    <LoginForm />
                    <Text style={styles.nonRegisterText}>Немає акаунту? <Text onPress={handleNonRegister} style={styles.nonRegisterLink}>Зареєструватися</Text></Text>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
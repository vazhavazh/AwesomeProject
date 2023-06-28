import React from 'react';
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, Platform } from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';
import BgPicture from '../../../assets/img/bg.png';

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleNonRegister = () => {
        navigation.navigate('Registration');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.container}
            // keyboardVerticalOffset={-244}
            >
                <ImageBackground source={BgPicture} resizeMode="cover" style={styles.image}>
                    <View style={styles.contentContainer}>
                        <View style={styles.loginContainer}>
                            <LoginForm />
                            <View style={styles.wrapper}>
                                <Text style={styles.nonRegisterText}>
                                    Немає акаунту? <Text onPress={handleNonRegister} style={styles.nonRegisterLink}>Зареєструватися</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;

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
    loginContainer: {
        paddingTop: 32,
        paddingHorizontal: 16,
        paddingBottom: 144,
        backgroundColor: '#FFFF',
        borderRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    nonRegisterText: {
        marginTop: 16,
        color: '#1B4371',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto 400',
    },
    nonRegisterLink: {
        textDecorationLine: 'underline',
    },
});

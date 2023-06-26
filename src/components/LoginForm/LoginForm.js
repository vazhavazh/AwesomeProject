import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = () => {
        if (!email || !password) {
            console.log(`Please fill all fields`)
            return
        }
        console.log(`
        email - ${email} 
        password - ${password}`)
    }
    return (
        <>
            <Text style={styles.loginTitle}>Увійти</Text>
            <View style={styles.loginInputContainer}>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.loginInput}
                    placeholder='Адреса електронної пошти'
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.loginInput}
                    placeholder='Пароль'
                    secureTextEntry />
            </View>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.loginButtonText}>Увійти</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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

});

export default LoginForm

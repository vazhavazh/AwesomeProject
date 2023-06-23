import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegistrationForm = () => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistration = () => {
        if (!login || !email || !password) {
            console.log(`Please fill all fields`)
            return
        }
        console.log(`
        login - ${login} 
        email - ${email} 
        password - ${password}`)
    }
    return (
        <>
            <Text style={styles.registerTitle}>Реєстрація</Text>
            <View style={styles.registerInputContainer}>
                <TextInput style={styles.registerInput}
                    value={login}
                    onChangeText={setLogin}
                    placeholder='Логін' />
                <TextInput style={styles.registerInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Адреса електронної пошти' />
                <TextInput style={styles.registerInput}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder='Пароль' />
            </View>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegistration}
            >
                <Text style={styles.registerButtonText}>Зареєстуватися</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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
});

export default RegistrationForm

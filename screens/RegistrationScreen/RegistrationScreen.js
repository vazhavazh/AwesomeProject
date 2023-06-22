import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const RegistrationScreen = () => {
    const handlePress = () => {
        console.log('Button pressed!');
    };

    return (
        <View style={styles.registerContainer}>
            <View style={styles.avatarContainer}>
                {/* <Image /> */}
                <TouchableOpacity
                    style={styles.avatarButton}
                    onPress={handlePress}
                >
                    <View style={styles.horizontalLine} />
                    <View style={styles.verticalLine} />
                </TouchableOpacity>
            </View>
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
    avatarButton: {
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
});
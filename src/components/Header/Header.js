import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import LogoutIconComponent from '../../../assets/icons/LogoutIconComponent';

const CustomHeaderComponent = ({ title }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => alert("This is LogOutButton")}
                style={styles.logoutButton}
            >
                <LogoutIconComponent size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#FF6C00',
    },
    headerContainer: {
         position: 'relative',
    paddingTop: 57,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
    
  },
    headerText: {
        color: '#212121',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Roboto 500',
        letterSpacing: -0.408,
        textAlign: 'center',
    },
    logoutButton: {
        position: 'absolute',
        bottom: 10,
        right: 16,
    },
});

export default CustomHeaderComponent;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoutIconComponent from '../../../assets/icons/LogoutIconComponent';
import BackIconComponent from '../../../assets/icons/ArrowLeftIconComponent';

const CustomHeaderComponent = ({ title, hideBackButton, hideLogoutButton }) => {
    const navigation = useNavigation();

    const handleBackButtonPress = () => {
        navigation.goBack();
    };

    return (

            <View style={styles.headerContainer}>
                {!hideBackButton && (
                    <TouchableOpacity
                        onPress={handleBackButtonPress}
                    >
                        <BackIconComponent size={24} color="black" />
                    </TouchableOpacity>
                )}
                <Text style={styles.headerText}>{title}</Text>
            {!hideLogoutButton && (
                <TouchableOpacity
                    onPress={() => alert("This is LogOutButton")}
                >
                    <LogoutIconComponent size={24} color="black" />
                </TouchableOpacity>
               )}
            </View>
       
    );
};

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row', // Добавлено для размещения кнопки назад и заголовка на одном уровне
        alignItems: 'center', // Добавлено для выравнивания элементов по вертикали
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
        flex: 1, 
        color: '#212121',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto 500',
        letterSpacing: -0.408,
        textAlign: 'center',
    },

});

export default CustomHeaderComponent;

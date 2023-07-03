import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import testPhoto from '../../../assets/img/testPhoto.png'
import CommentIconComponent from '../../../assets/icons/CommentIconComponent'
import MapPinIconComponent from '../../../assets/icons/MapPinIconComponent'
import ThumbUpIconComponent from '../../../assets/icons/ThumbUpIconComponent'

const PublicationCard = () => {


    const navigation = useNavigation();
    const goToMapScreen = () => {
        navigation.navigate("MapScreen");
    };
    const goToCommentsScreen = () => {
        navigation.navigate("CommentsScreen");
    };

    return (
        <View
            style={styles.container}>
            <Image
                source={testPhoto}
                style={styles.photo}
                alt='Publication photo'
            />
            <Text
                style={styles.name}
            >Ліс</Text>
            <View
                style={styles.bottomCardContainer}
            >
                <View
                    style={styles.leftSideWrapper}
                >
                    <TouchableOpacity
                        style={styles.commentWrapper}
                        onPress={goToCommentsScreen}
                    >
                        <CommentIconComponent />
                        <Text
                            style={styles.commentQuantity}
                        >0</Text>
                    </TouchableOpacity>
                    <View
                        style={styles.likeWrapper}
                    >
                        <ThumbUpIconComponent />
                        <Text
                            style={styles.likeQuantity}
                        >85</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={goToMapScreen}
                    style={styles.rightSideWrapper}
                >
                    <MapPinIconComponent />
                    <Text
                        style={styles.locationName}
                    >Ukraine</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    photo: {
        width: '100%',
        minHeight: 240,
        maxHeight: 240,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        color: '#212121',
        fontSize: 16,
        fontFamily: 'Roboto 500',
        marginBottom: 8,
    },
    bottomCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftSideWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 24,
    },
    rightSideWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
    },
    commentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
    },
    likeWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
    },
    commentQuantity: {
        color: '#BDBDBD',
        fontSize: 16,
        fontFamily: 'Roboto 400',
        marginBottom: 8,
    },
    likeQuantity: {
        color: '#212121',
        fontSize: 16,
        fontFamily: 'Roboto 400',
      
    },
    locationName: {
        color: '#212121',
        fontSize: 16,
        fontFamily: 'Roboto 400',
        textDecorationLine: 'underline'
    }

})

export default PublicationCard

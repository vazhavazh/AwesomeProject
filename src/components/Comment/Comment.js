import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import UserPhoto from '../../../assets/img/userPhoto.png'

const Comment = () => {
  return (
    <View style={styles.commentCardContainer}>
          <Image alt='user photo' source={UserPhoto} style={styles.userPhoto} />
          <View style={styles.commentTextContainer}>
              <Text style={styles.commentText}>Thank you! That was very helpful!</Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 09:20</Text>
          </View>
    </View>
  )
}



const styles = StyleSheet.create({
    commentCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        maxWidth: '100%',
    },
    userPhoto: {

        borderRadius: 28,
        width: 28,
        height: 28,
       
    },
    commentTextContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 6,
        flex: 1,
        
    },
    commentText: {
        color: '#212121',
        fontSize: 13,
        fontFamily: 'Roboto 400',
        lineHeight: 18,
        marginBottom: 8,
    },
    commentDate: {
        color: '#BDBDBD',
        fontSize: 10,
        fontFamily: 'Roboto 400',
        alignSelf: 'flex-end'

    }
});

export default Comment
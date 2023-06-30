import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import UserPhoto from '../../../assets/img/userPhoto.png'
import PublicationList from '../../components/PublicationList/PublicationList'
import PublicationCard from '../../components/PublicationList/PublicationCard'

const PostsScreen = () => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.userContainer}>

        <Image alt='user photo' source={UserPhoto} style={styles.userPhoto} />
        <View style={styles.userInfoWrapper}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>

      </View>
     
      {/* <PublicationList /> */}
      {/* <PublicationCard /> */}
    </View>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 0,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  userPhoto: {

    borderRadius: 16,
    width: 60,
    height: 60,
  },
  userName: {
    color: '#212121',
    fontSize: 13,
    fontFamily: 'Roboto 700',
    
  },
  userEmail: {
    color: 'rgba(33, 33, 33, 0.80)',
    fontSize: 11,
    fontFamily: 'Roboto 400'
  }
})
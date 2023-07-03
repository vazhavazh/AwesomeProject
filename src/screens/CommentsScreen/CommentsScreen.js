import React, { useEffect, useState } from 'react'
import {
    Image,
  TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomHeaderComponent from '../../components/Header/Header';
import testPhoto from '../../../assets/img/testPhoto.png'
import Comment from '../../components/Comment/Comment';

import SendIconComponent from '../../../assets/icons/SendIconComponent';



const CommentsScreen = () => {
    const [comment, setComment] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        setIsButtonActive(comment !== '');
    }, [comment]);

    const handleAddComment = () => {
        console.log('add new comment pressed');
    };

    return (
        <>
            <CustomHeaderComponent title={'Коментарі'} hideLogoutButton={true} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.commentsContainer}>
                        <Image
                            source={testPhoto}
                            style={styles.photo}
                            alt='Publication photo'
                        />
                        <View>
                            <Comment
                            // key={}
                            // authorId={}
                            // avatar={}
                            // text={}
                            // date={}
                            // time={}
                            />
                        </View>
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.inputWrapper}
                    >
                        <TextInput
                            value={comment}
                            style={styles.newCommentInput}
                            placeholder='Коментувати...'
                            onChangeText={(value) => setComment(value)}
                        />
                        <TouchableOpacity
                            onPress={handleAddComment}
                            style={[
                                styles.sendButton,
                                { backgroundColor: isButtonActive ? '#FF6C00' : '#BDBDBD' },
                            ]}
                            disabled={!isButtonActive}
                        >
                            <SendIconComponent />
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commentsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
        paddingBottom: 16,
        backgroundColor: '#FFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.3,
        shadowRadius: 0,
        elevation: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
        backgroundColor: '#ffff',
        paddingLeft: 16,
        paddingRight: 8,
    },
    photo: {
        width: '100%',
        minHeight: 240,
        maxHeight: 240,
        borderRadius: 8,
        marginBottom: 32,
    },
    newCommentInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto 400',
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
        marginRight: 8,
    },
    sendButton: {
        
        position: 'absolute',
        right: 16,
        width: 34,
        height: 34,
        borderRadius: 34,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommentsScreen;

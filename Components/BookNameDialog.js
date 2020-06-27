import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dialog from 'react-native-dialog'

const BookNameDialog = ({ isBookNameInputVisible, setIsBookNameInputVisible, bookNameInputValue, setBookNameInputValue, setIsBookRatingInputVisible }) => {
    return (
        <View>
            <Dialog.Container visible={isBookNameInputVisible}>
                <Dialog.Title>Add A New Book</Dialog.Title>
                <Dialog.Description>Book Name:</Dialog.Description>
                <Dialog.Input 
                    onChangeText={text => {setBookNameInputValue(text)}} 
                    value={bookNameInputValue} 
                    wrapperStyle={styles.BookNameInputWrapper} 
                    autoFocus 
                />
                <Dialog.Button label="Cancel" onPress={() => {setIsBookNameInputVisible(false)}}/>
                <Dialog.Button label="Next" onPress={() => {
                    setIsBookNameInputVisible(false)
                    if (bookNameInputValue === '') {
                        alert('Name field cannot be left empty!')
                    } else if (bookNameInputValue.length > 30) {
                        alert('Name cannot exceed 30 characters!')
                    } else {
                        setIsBookRatingInputVisible(true)
                    }
                }}/>
            </Dialog.Container>
        </View>
    )
}

export default BookNameDialog

const styles = StyleSheet.create({
    BookNameInputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    }
})

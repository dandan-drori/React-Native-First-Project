import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'

const BookRatingDialog = ({ isBookRatingInputVisible, bookRatingInputValue, setIsBookRatingInputVisible, setBookRatingInputValue, setBookNameInputValue, addBook, bookNameInputValue }) => {
    return (
        <View>
            <Dialog.Container visible={isBookRatingInputVisible}>
                <Dialog.Title>Add A New Book</Dialog.Title>
                <Dialog.Description>Book Rating:</Dialog.Description>
                <Dialog.Input 
                    onChangeText={text => {setBookRatingInputValue(text)}} 
                    value={bookRatingInputValue} 
                    wrapperStyle={styles.BookRatingInputWrapper} 
                    autoFocus 
                />
                <Dialog.Button label="Cancel" onPress={() => {setIsBookRatingInputVisible(false)}}/>
                <Dialog.Button label="Submit" onPress={() => {
                    setIsBookRatingInputVisible(false)
                    setBookRatingInputValue('')
                    setBookNameInputValue('')
                    if (bookRatingInputValue === '') {
                        alert('Rating input field cannot be left empty!')
                    } else if (bookRatingInputValue.length > 3) {
                        alert('Rating cannot exceed 3 characters!')
                    } else {
                        addBook(bookNameInputValue, bookRatingInputValue)
                    }
                }}/>
            </Dialog.Container>
        </View>
    )
}

export default BookRatingDialog

const styles = StyleSheet.create({
    BookRatingInputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    }
})

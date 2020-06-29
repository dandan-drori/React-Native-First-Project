import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'

const BookAuthorDialog = ({ isBookAuthorInputVisible, setIsBookAuthorInputVisible, bookAuthorInputValue, setBookAuthorInputValue, setIsBookRatingInputVisible, isAddBookDialog, isEditBookAuthorInputVisible, setEditBookAuthorInputValue, editBookAuthorInputValue, setIsEditBookAuthorInputVisible, setIsEditBookRatingInputVisible, setIsAddBookDialog }) => {
    return (
        <View>
            <Dialog.Container visible={isAddBookDialog ? isBookAuthorInputVisible : isEditBookAuthorInputVisible}>
                <Dialog.Title>{isAddBookDialog ? 'Add A New Book' : 'Edit Book'}</Dialog.Title>
                <Dialog.Description>Book Author:</Dialog.Description>
                <Dialog.Input 
                    onChangeText={text => {isAddBookDialog ? setBookAuthorInputValue(text) : setEditBookAuthorInputValue(text)}} 
                    value={isAddBookDialog ? bookAuthorInputValue : editBookAuthorInputValue} 
                    wrapperStyle={styles.BookNameInputWrapper} 
                    autoFocus 
                    autoCapitalize="words"
                />
                <Dialog.Button label="Cancel" onPress={() => {
                    if (isAddBookDialog) {
                        setIsBookAuthorInputVisible(false)
                    } else {
                        setIsEditBookAuthorInputVisible(false)
                        setIsAddBookDialog(true)
                    }
                }}/>
                <Dialog.Button label="Next" onPress={() => {
                    if (isAddBookDialog) {
                        if (bookAuthorInputValue === '') {
                            alert('Author field cannot be left empty!')
                        } else if (bookAuthorInputValue.length > 60) {
                            alert('Author cannot exceed 60 characters!')
                        } else {
                            setIsBookAuthorInputVisible(false)
                            setIsBookRatingInputVisible(true)
                        }
                    } else {
                        if (editBookAuthorInputValue === '') {
                            alert('Author field cannot be left empty!')
                        } else if (editBookAuthorInputValue.length > 60) {
                            alert('Author cannot exceed 60 characters!')
                        } else {
                            setIsEditBookAuthorInputVisible(false)
                            setIsEditBookRatingInputVisible(true)
                        }
                    }
                }}/>
            </Dialog.Container>
        </View>
    )
}

export default BookAuthorDialog

const styles = StyleSheet.create({
    BookNameInputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    }
})

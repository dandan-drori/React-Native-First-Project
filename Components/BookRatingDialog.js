import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'

const BookRatingDialog = ({ isBookRatingInputVisible, bookRatingInputValue, setIsBookRatingInputVisible, setBookRatingInputValue, setBookNameInputValue, addBook, bookNameInputValue, isAddBookDialog, isEditBookRatingInputVisible, setEditBookRatingInputValue, editBookRatingInputValue, setIsEditBookRatingInputVisible, setEditBookNameInputValue, editBookNameInputValue, setIsAddBookDialog, bookAuthorInputValue, editBookAuthorInputValue, setBookAuthorInputValue, setEditBookAuthorInputValue }) => {

    const regExp = /^[1-5]\.[0-9]$/;

    return (
        <View>
            <Dialog.Container visible={isAddBookDialog ? isBookRatingInputVisible : isEditBookRatingInputVisible}>
                <Dialog.Title>{isAddBookDialog ? 'Add A New Book' : 'Edit Book'}</Dialog.Title>
                <Dialog.Description>Book Rating:</Dialog.Description>
                <Dialog.Input 
                    onChangeText={text => {isAddBookDialog ? setBookRatingInputValue(text) : setEditBookRatingInputValue(text)}} 
                    value={isAddBookDialog ? bookRatingInputValue : editBookRatingInputValue} 
                    wrapperStyle={styles.BookRatingInputWrapper} 
                    autoFocus 
                />
                <Dialog.Button label="Cancel" onPress={() => {
                    isAddBookDialog ? setIsBookRatingInputVisible(false) : setIsEditBookRatingInputVisible(false)}
                }/>
                <Dialog.Button label="Submit" onPress={() => {
                    isAddBookDialog ? setIsBookRatingInputVisible(false) : setIsEditBookRatingInputVisible(false);
                    isAddBookDialog ? setBookRatingInputValue('') : setEditBookRatingInputValue('');
                    if (isAddBookDialog) {setBookNameInputValue(''); setBookAuthorInputValue('')} else {setEditBookNameInputValue(''); setEditBookAuthorInputValue('')};
                    if (isAddBookDialog) {
                        if (bookRatingInputValue === '') {
                            alert('Rating input field cannot be left empty!')
                        } else if (bookRatingInputValue.search(regExp) === -1) {
                            alert('Rating must be in the format of "1-5" "." "0-9" like 4.8')
                        } else {
                            addBook(bookNameInputValue, bookRatingInputValue, bookAuthorInputValue)
                            setIsAddBookDialog(true)
                        }
                    } else {
                        if (editBookRatingInputValue === '') {
                            alert('Rating input field cannot be left empty!')
                        } else if (editBookRatingInputValue.search(regExp) === -1) {
                            alert('Rating must be in the format of "1-5" "." "0-9" like 4.8')
                        } else {
                            addBook(editBookNameInputValue, editBookRatingInputValue, editBookAuthorInputValue)
                            setIsAddBookDialog(true)
                        }
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

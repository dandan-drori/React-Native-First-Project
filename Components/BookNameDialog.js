import React from 'react'
import { StyleSheet, View } from 'react-native'
import Dialog from 'react-native-dialog'

const BookNameDialog = ({ isBookNameInputVisible, setIsBookNameInputVisible, bookNameInputValue, setBookNameInputValue, setIsBookAuthorInputVisible, isAddBookDialog, isEditBookNameInputVisible, setEditBookNameInputValue, editBookNameInputValue, setIsEditBookNameInputVisible, setIsEditBookAuthorInputVisible, setIsAddBookDialog }) => {
    return (
        // if add book is true - display add book dialog, else - display edit book dialog
        <View>
            <Dialog.Container visible={isAddBookDialog ? isBookNameInputVisible : isEditBookNameInputVisible}>
                <Dialog.Title>{isAddBookDialog ? 'Add A New Book' : 'Edit Book'}</Dialog.Title>
                <Dialog.Description>Book Name:</Dialog.Description>
                <Dialog.Input 
                    onChangeText={text => {isAddBookDialog ? setBookNameInputValue(text) : setEditBookNameInputValue(text)}} 
                    value={isAddBookDialog ? bookNameInputValue : editBookNameInputValue} 
                    wrapperStyle={styles.BookNameInputWrapper} 
                    autoFocus 
                    autoCapitalize="words"
                />
                <Dialog.Button label="Cancel" onPress={() => {
                    if (isAddBookDialog) {
                        setIsBookNameInputVisible(false) 
                    } else {
                        setIsEditBookNameInputVisible(false)
                        setIsAddBookDialog(true)
                    }
                }}/>
                <Dialog.Button label="Next" onPress={() => {
                    if (isAddBookDialog) {
                        if (bookNameInputValue === '') {
                            alert('Name field cannot be left empty!')
                        } else if (bookNameInputValue.length > 60) {
                            alert('Name cannot exceed 60 characters!')
                        } else {
                            setIsBookNameInputVisible(false)
                            setIsBookAuthorInputVisible(true)
                        }
                    } else {
                        if (editBookNameInputValue === '') {
                            alert('Name field cannot be left empty!')
                        } else if (editBookNameInputValue.length > 60) {
                            alert('Name cannot exceed 60 characters!')
                        } else {
                            setIsEditBookNameInputVisible(false)
                            setIsEditBookAuthorInputVisible(true)
                        }
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

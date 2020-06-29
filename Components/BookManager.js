import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import RedHeader from './RedHeader'
import BooksFilter from './BooksFilter'
import BooksList from './BooksList'
import BookNameDialog from './BookNameDialog'
import BookAuthorDialog from './BookAuthorDialog'
import BookRatingDialog from './BookRatingDialog'
import cloneDeep from 'lodash/cloneDeep'

const BookManager = () => {

    // define initial empty array to hold book items

    const [books, setBooks] = useState([])

    // handle change of id for each book added to array
    const [changingId, setChangingId] = useState(1)

    // handle change of search input value
    const [value, setValue] = useState('')

    const [booksClone, setBooksClone] = useState(null)

    // handle logic for switching between add and edit dialogs
    const [isAddBookDialog, setIsAddBookDialog] = useState(true)

    // handle add book dialog
    const [isBookNameInputVisible, setIsBookNameInputVisible] = useState(false)

    const [bookNameInputValue, setBookNameInputValue] = useState('')

    const [isBookAuthorInputVisible, setIsBookAuthorInputVisible] = useState(false)

    const [bookAuthorInputValue, setBookAuthorInputValue] = useState('')
    
    const [isBookRatingInputVisible, setIsBookRatingInputVisible] = useState(false)

    const [bookRatingInputValue, setBookRatingInputValue] = useState('')

    // handle edit book dialog
    const [isEditBookRatingInputVisible, setIsEditBookRatingInputVisible] = useState(false)

    const [editBookRatingInputValue, setEditBookRatingInputValue] = useState('')
    
    const [isEditBookNameInputVisible, setIsEditBookNameInputVisible] = useState(false)

    const [editBookNameInputValue, setEditBookNameInputValue] = useState('')

    const [isEditBookAuthorInputVisible, setIsEditBookAuthorInputVisible] = useState(false)

    const [editBookAuthorInputValue, setEditBookAuthorInputValue] = useState('')

    // handle actions
    const addBook = (name, rating, author) => {
        // add all books data from dialog to the books array
        setBooks([...books, {id: changingId, name, rating, author}])
        setBooksClone([...booksClone, {id: changingId, name, rating, author}])
    }

    const deleteBook = (name) => {
        // keep only the items that are not being deleted in the books array
        const filteredBooks = books.filter(book => book.name !== name)
        setBooks(filteredBooks)
        setBooksClone(filteredBooks)
    }

    const editBook = (name, author, rating) => {
        // make the edit dialog visible for user interaction
        setIsEditBookNameInputVisible(true)
        // delete the book so that another one can be created to replace it
        deleteBook(name)
        // make sure item's data is available in the inputs for better UX
        setEditBookNameInputValue(name)
        setEditBookAuthorInputValue(author)
        setEditBookRatingInputValue(rating)
    }

    const handleSubmit = () => {
        setValue('')
    }

    const handleOnChangeText = text => {
        // keep only the items that their names include the letters specified in the search query
        const filteredBooks = booksClone.filter(book => book.name.toLowerCase().includes(text.toLowerCase()))
        setBooks(filteredBooks) 
    }

    // initialize the booksClone for future reference in useEffect
    let toBooksClone = null

    useEffect(() => {
        // copy books array and put it into booksClone array for filtering with search
        toBooksClone = cloneDeep(books)
        setBooksClone(toBooksClone)
    },[])

    useEffect(() => {
        // increment the id for each book added to the list
        setChangingId(changingId + 1)
    },[books])

    return (
        <View style={styles.BooksPageContainer}>
            <RedHeader headerText="Books Manager"/>
            <View style={styles.ContentContainer}>
                <BooksFilter handleSubmit={handleSubmit} value={value} setValue={setValue} handleOnChangeText={handleOnChangeText} />
                <ScrollView style={{maxHeight: 290}}>
                    <BooksList books={books} deleteBook={deleteBook} editBook={editBook} setIsAddBookDialog={setIsAddBookDialog} />
                </ScrollView>
            </View>
            <View style={styles.AddBookButton}>
                <Button title="Add A New Book" onPress={() => {setIsBookNameInputVisible(true)}}/>
            </View>
            <BookNameDialog isBookNameInputVisible={isBookNameInputVisible} setIsBookNameInputVisible={setIsBookNameInputVisible} bookNameInputValue={bookNameInputValue} setBookNameInputValue={setBookNameInputValue} setIsBookAuthorInputVisible={setIsBookAuthorInputVisible} isAddBookDialog={isAddBookDialog} isEditBookNameInputVisible={isEditBookNameInputVisible} setEditBookNameInputValue={setEditBookNameInputValue} editBookNameInputValue={editBookNameInputValue} setIsEditBookNameInputVisible={setIsEditBookNameInputVisible} setIsEditBookAuthorInputVisible={setIsEditBookAuthorInputVisible} setIsAddBookDialog={setIsAddBookDialog} />
            <BookRatingDialog isBookRatingInputVisible={isBookRatingInputVisible} bookRatingInputValue={bookRatingInputValue} setIsBookRatingInputVisible={setIsBookRatingInputVisible} setBookRatingInputValue={setBookRatingInputValue} setBookNameInputValue={setBookNameInputValue} addBook={addBook} bookNameInputValue={bookNameInputValue} bookAuthorInputValue={bookAuthorInputValue} setBookAuthorInputValue={setBookAuthorInputValue} isAddBookDialog={isAddBookDialog} setIsAddBookDialog={setIsAddBookDialog} isEditBookRatingInputVisible={isEditBookRatingInputVisible} setEditBookRatingInputValue={setEditBookRatingInputValue} editBookRatingInputValue={editBookRatingInputValue} setIsEditBookRatingInputVisible={setIsEditBookRatingInputVisible} setEditBookNameInputValue={setEditBookNameInputValue} editBookNameInputValue={editBookNameInputValue} editBookAuthorInputValue={editBookAuthorInputValue} setEditBookAuthorInputValue={setEditBookAuthorInputValue} />
            <BookAuthorDialog isBookAuthorInputVisible={isBookAuthorInputVisible} setIsBookAuthorInputVisible={setIsBookAuthorInputVisible} bookAuthorInputValue={bookAuthorInputValue} setBookAuthorInputValue={setBookAuthorInputValue} setIsBookRatingInputVisible={setIsBookRatingInputVisible} isAddBookDialog={isAddBookDialog} isEditBookAuthorInputVisible={isEditBookAuthorInputVisible} setEditBookAuthorInputValue={setEditBookAuthorInputValue} editBookAuthorInputValue={editBookAuthorInputValue} setIsEditBookAuthorInputVisible={setIsEditBookAuthorInputVisible} setIsEditBookRatingInputVisible={setIsEditBookRatingInputVisible} setIsAddBookDialog={setIsAddBookDialog}/>
        </View>
    )
}

export default BookManager

const styles = StyleSheet.create({
    BooksPageContainer: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    ContentContainer: {
        padding: 48,
    },
    AddBookButton: {
        paddingHorizontal: 100,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10
    },
    BookNameInputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
})

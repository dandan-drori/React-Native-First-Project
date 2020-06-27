import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import BooksFilter from './BooksFilter'
import BooksList from './BooksList'
import RedHeader from './RedHeader'
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import BookNameDialog from './BookNameDialog'
import BookRatingDialog from './BookRatingDialog'
import cloneDeep from 'lodash/cloneDeep'

const BookManager = () => {

    const [books, setBooks] = useState([])

    const [isBookNameInputVisible, setIsBookNameInputVisible] = useState(false)

    const [bookNameInputValue, setBookNameInputValue] = useState('')
    
    const [isBookRatingInputVisible, setIsBookRatingInputVisible] = useState(false)

    const [bookRatingInputValue, setBookRatingInputValue] = useState('')

    const [changingId, setChangingId] = useState(1)

    const [value, setValue] = useState('')

    const [booksClone, setBooksClone] = useState(null)

    const addBook = (name, rating) => {
        setBooks([...books, {id: changingId, name, rating}])
    }

    const deleteBook = (name) => {
        const filteredBooks = books.filter(book => book.name !== name)
        setBooks(filteredBooks)
    }

    const editBook = (name, rating) => {
        
    }

    const handleSubmit = value => {
        // filter books to show only those of which their names include value
        // const filteredBooks = books.filter(book => {
            
        // })
        // setBooks([filteredBooks])
        setValue('')
    }

    let toBooksClone = null


    const handleOnChangeText = text => {
        const filteredBooks = booksClone.filter(book => book.name.toLowerCase().includes(text.toLowerCase()))
        if (!value || value==='') {
            null
        }
        setBooks(filteredBooks) 
    }

    useEffect(() => {
        setChangingId(changingId + 1)
        toBooksClone = cloneDeep(books)
        setBooksClone(toBooksClone)
    },[books])

    return (
        <View style={styles.BooksPageContainer}>
            <RedHeader headerText="Books Manager"/>
            <View style={styles.ContentContainer}>
                <BooksFilter handleSubmit={handleSubmit} value={value} setValue={setValue} handleOnChangeText={handleOnChangeText} />
                <ScrollView style={{maxHeight: 290}}>
                    <BooksList books={books} deleteBook={deleteBook} editBook={editBook}/>
                </ScrollView>
            </View>
            <View style={styles.AddBookButton}>
                <Button title="Add A New Book" onPress={() => {setIsBookNameInputVisible(true)}}/>
            </View>
            <BookNameDialog 
                isBookNameInputVisible={isBookNameInputVisible}
                setIsBookNameInputVisible={setIsBookNameInputVisible}
                bookNameInputValue={bookNameInputValue} 
                setBookNameInputValue={setBookNameInputValue} 
                setIsBookRatingInputVisible={setIsBookRatingInputVisible}
            />
            <BookRatingDialog 
                isBookRatingInputVisible={isBookRatingInputVisible}
                bookRatingInputValue={bookRatingInputValue}
                setIsBookRatingInputVisible={setIsBookRatingInputVisible}
                setBookRatingInputValue={setBookRatingInputValue}
                setBookNameInputValue={setBookNameInputValue}
                addBook={addBook}
                bookNameInputValue={bookNameInputValue}
            />
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

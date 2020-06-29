import React from 'react'
import { View, FlatList } from 'react-native'
import BookItem from './BookItem'

const BooksList = ({ books, deleteBook, editBook, setIsAddBookDialog }) => {
    return (
        <View>
            <FlatList
                data={books}
                keyExtractor={book => book.id} 
                renderItem={({ item }) => 
                    <BookItem
                        name={item.name}
                        rating={item.rating}
                        author={item.author}
                        deleteBook={deleteBook}
                        editBook={editBook} 
                        setIsAddBookDialog={setIsAddBookDialog}
                    />
                }
            />
        </View>
    )
}

export default BooksList

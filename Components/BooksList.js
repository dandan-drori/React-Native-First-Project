import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import BookItem from './BookItem'

const BooksList = ({ books, deleteBook, editBook }) => {

    return (
        <View>
            <FlatList 
                data={books} 
                renderItem={ ({ item }) => 
                    <BookItem 
                        name={item.name} 
                        rating={item.rating} 
                        deleteBook={deleteBook}
                        editBook={editBook}
                    /> 
                }
                keyExtractor={book => book.id}
            />
        </View>
    )
}

export default BooksList

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements';

const BookItem = ( { name, rating, deleteBook, editBook, setIsAddBookDialog, author } ) => {

    return (
        <View style={styles.BookItemContainer}>
            <View>
                <Text style={styles.BookItemName}>
                    {name}
                </Text>
                <Text style={styles.BookItemAuthor}>
                    {author}
                </Text>
            </View>    
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.BookItemRating}>
                    {rating}
                </Text>
                <Text style={{position: 'relative', top: 5}}>
                    <Icon size={20} name="star" color="#F9C72D" />
                </Text>
            </View>
            <Button 
                title="" 
                icon={ <Icon size={20} name="pencil" color="#baff83" /> }
                onPress={() => { 
                    setIsAddBookDialog(false)
                    editBook(name, author, rating) 
                }}
            />
            <Button 
                title="" 
                icon={ <MaterialIcon size={20} name="delete" color="#ff0000" /> }
                onPress={() => { deleteBook(name) }}
            />
        </View>
    )
}

export default BookItem

const styles = StyleSheet.create({
    BookItemContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#ff6655',
        elevation: 4
    },
    BookItemName: {
        fontSize: 20,
        maxWidth: 130,
    },
    BookItemRating: {
        fontSize: 20,
    },
    BookItemAuthor: {
        fontSize: 16,
        maxWidth: 130,
    }
})
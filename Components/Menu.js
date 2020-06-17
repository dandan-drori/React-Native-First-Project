import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Link } from 'react-router-native'

const NavMenu = ({ isOpen, handleClick }) => {

    return (
        <View style={isOpen ? styles.Open : styles.Menu}>
            <FlatList 
                data={[
                    {key: 'Home', link: '/'},
                    {key: 'About', link: '/about'},
                    {key: 'ChatBot', link: '/chat-bot'},
                    {key: 'Store', link: '/store'}
                ]}
            renderItem={({item}) => <Link to={item.link} onPress={handleClick}>
                    <Text style={styles.ListItem}>{item.key}</Text>
                </Link>}>

            </FlatList>
        </View>
    )
}

export default NavMenu

const styles = StyleSheet.create({
    Menu: {
        position: 'absolute',
        height: '100%',
        transform: [{scale: 0}]
    },
    Open: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#aa9f3a',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 200
    },
    ListItem: {
        color: '#fff',
        marginBottom: 15,
        fontSize: 30,
        textAlign: 'center'
    }
})

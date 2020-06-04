import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Typography/Header'

const DefaultPage = ({headerText}) => {

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={headerText} />
            </View> 
        </View>
    )
}

export default DefaultPage

const styles = StyleSheet.create({
    Page: {
        width: '100%',
        height: '100%',
    },
    HeaderContainer: {
        backgroundColor: 'turquoise',
        width: '100%',
        height: '30%',
        paddingTop: 60,
        paddingLeft: 50
    }
})


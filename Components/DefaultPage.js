import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Header } from './Typography'

const DefaultPage = ({headerText, bodyText}) => {

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={headerText} />
            </View> 
            <ScrollView style={styles.BodyContainer}>
                <Image source={require('../assets/rediso.jpg')} style={styles.Isometric}/>
            </ScrollView>
            <View style={styles.Circle}></View>
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
        backgroundColor: '#ff6655',
        width: '100%',
        height: '30%',
        paddingTop: 50,
        paddingLeft: 35
    },
    BodyContainer: {
        padding: 0
    },
    Isometric: {
        height: 300,
        width: '100%'
    },
    Circle: {
        width: 70,
        height: 70,
        backgroundColor: '#ff8888',
        borderRadius: 35
    }
})


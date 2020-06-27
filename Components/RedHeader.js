import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './Typography'

const RedHeader = ({ headerText }) => {
    return (
        <View style={styles.RedHeaderContainer}>
            <Header headerText={headerText} />
        </View>
    )
}

export default RedHeader

const styles = StyleSheet.create({
    RedHeaderContainer: {
        backgroundColor: '#ff6655',
        width: '100%',
        height: '30%',
        paddingTop: 50,
        paddingLeft: 35,
        justifyContent: 'center'
    },
})

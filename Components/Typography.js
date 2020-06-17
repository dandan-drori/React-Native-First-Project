import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = ({ headerText }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>{headerText}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Container: {
        margin: 10,
        padding: 0
    },
    Text: {
        fontSize: 50,
        fontWeight: '500',
    }
})

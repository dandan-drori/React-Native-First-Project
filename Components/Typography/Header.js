import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    Header: {
        fontSize: 40,
        fontWeight: '600'
    }
})

const Header = ({headerText}) => {
    return (
        <View>
            <Text style={styles.Header}>{headerText}</Text>
        </View>
    )
}

export default Header


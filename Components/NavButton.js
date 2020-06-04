import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const NavButton = ({handleNavClick, isOpen}) => {

    const onPressNav = () => {
        handleNavClick()
    }

    return (
        <View style={styles.NavContainer}>
            <TouchableOpacity onPress={onPressNav} style={styles.Button}>
                <View>
                    <Text style={styles.Text}>{isOpen ? 'X' : '< >'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NavButton

const styles = StyleSheet.create({
    NavContainer: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    Button: {
        borderRadius: 35,
        width: 70,
        height: 70,
        backgroundColor: '#202046',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    Text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})

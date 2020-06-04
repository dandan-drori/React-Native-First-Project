import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const UserButtons = () => {
    return (
        <View style={styles.ButtonsContainer}>
            <TouchableOpacity style={styles.UserButton}>
                <Text style={styles.UserButtonText}>
                    Yes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.UserButton}>
                <Text style={styles.UserButtonText}>
                    No
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserButtons

const styles = StyleSheet.create({
    UserButton: {
        borderRadius: 25,
        maxWidth: 50,
        minWidth: 50,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        backgroundColor: '#00ccff'
    },
    UserButtonText: {
        fontSize: 20
    },
    ButtonsContainer: {
        flexDirection: 'row',
        marginLeft: 255
    }
})

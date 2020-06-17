import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StoreItem = ({ item }) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    )
}

export default StoreItem

const styles = StyleSheet.create({})

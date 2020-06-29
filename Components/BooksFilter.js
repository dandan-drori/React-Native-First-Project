import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

const BooksFilter = ({ handleSubmit, value, setValue, handleOnChangeText }) => {

    const onSubmit = value => handleSubmit(value)

    const onChangeText = text => {
        setValue(text)
        handleOnChangeText(text)
    }

    return (
        <View style={styles.FilterContainer}>
            <TextInput 
                value={value} 
                onChangeText={(text) => onChangeText(text)} 
                autoCapitalize="words" 
                placeholder="Search Books..."
                style={styles.Input}
            />
            <Button
                icon={{ name: 'search' }}
                title=""
                onPress={() => { onSubmit(value) }}
            />
        </View>
    )
}

export default BooksFilter

const styles = StyleSheet.create({
    FilterContainer: {
        flexDirection: 'row'
    },
    Input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        width: 265,
        marginBottom: 20,
        borderRadius: 5
    }
})

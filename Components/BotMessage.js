import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BotMessage = ({messageText}) => {

    const [fadeStyle, setFadeStyle] = useState({})

    useEffect(() => {
        setFadeStyle({
            opacity: 1,
            transform: {scale: 1}
        })
    },[])

    return (
        <View style={styles.BotMessage}>
            <Text style={styles.BotMessageText}>
                {messageText}
            </Text>
        </View>
    )
}

export default BotMessage

const styles = StyleSheet.create({
    BotMessage: {
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-start',
    maxWidth: '50%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center'
    },
    BotMessageText: {
        fontSize: 20
    }
})

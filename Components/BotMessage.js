import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const BotMessage = ({messageText, fadeDelay}) => {

    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
    const fadeAnimScale = useRef(new Animated.Value(0)).current;
    const fadeAnimTranslate = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(
                fadeAnimOpacity,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    delay: fadeDelay,
                }
            ),
            Animated.timing(
                fadeAnimTranslate,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                    delay: fadeDelay,
                }
            ),
            Animated.timing(
                fadeAnimScale,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    delay: fadeDelay,
                }
            )
        ]).start()
      }, [])

    return (
        <Animated.View style={{...styles.BotMessage, opacity: fadeAnimOpacity, transform: [{scale: fadeAnimScale}, {translateX: fadeAnimTranslate}]}}>
            <Text style={styles.BotMessageText}>
                {messageText}
            </Text>
        </Animated.View>
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
        alignItems: 'center',
    },
    BotMessageText: {
        fontSize: 20
    }
})

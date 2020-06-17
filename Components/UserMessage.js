import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const UserMessage = ({messageText, fadeDelay}) => {

    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
    const fadeAnimScale = useRef(new Animated.Value(0)).current;
    const fadeAnimTranslate = useRef(new Animated.Value(100)).current;

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
        <Animated.View style={{...styles.UserMessage, opacity: fadeAnimOpacity, transform: [{scale: fadeAnimScale}, {translateX: fadeAnimTranslate}]}}>
            <Text style={styles.BotMessageText}>
                {messageText}
            </Text>
        </Animated.View>
    )
}

export default UserMessage

const styles = StyleSheet.create({
    UserMessage: {
        backgroundColor: '#00ccff',
        alignSelf: 'flex-end',
        maxWidth: '50%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginLeft: 200,
    },
    BotMessageText: {
        fontSize: 20
    }
})

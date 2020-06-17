import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import { Button } from 'react-native-material-ui'

const UserButtons = ({ fadeDelay, handlePressNo, handlePressYes, isButtonActive }) => {

    const fadeAnimScale = useRef(new Animated.Value(0)).current;
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(
                fadeAnimScale,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    delay: fadeDelay,
                }
            ),
            Animated.timing(
                fadeAnimOpacity,
                {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    delay: fadeDelay,
                }
            )
        ]).start()
    }, [])

    const onPressYes = () => {
        handlePressYes()
    }

    const onPressNo = () => {
        handlePressNo()
    }

    return (
        <Animated.View style={{...styles.ButtonsContainer, opacity: fadeAnimOpacity, transform: [{scale: fadeAnimScale}], display: isButtonActive}}>
            <Button accent raised text="yes" style={{container: {...styles.UserButton, display: isButtonActive}}} onPress={onPressYes}/>
            <Button accent raised text="no" style={{container: {...styles.UserButton, display: isButtonActive}}} onPress={onPressNo}/>
        </Animated.View>
    )
}

export default UserButtons

const styles = StyleSheet.create({
    UserButton: {
        maxWidth: 150,
        minWidth: 150,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    ButtonsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        left: 25,
        justifyContent: 'space-around',
    }
})

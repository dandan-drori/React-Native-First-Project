import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import { Navigation } from 'react-native-navigation'

// Navigation.push(props.componentId, {
//     component: {
//         name: 'Home',
//         options: {
//             topBar: {
//                 visible: false
//             }
//         }
//     }
// })

const BottomNav = (props) => {

    const [active, setActive] = useState('home');

    return (
        <View style={styles.Container}>
           <BottomNavigation active={active}>
                <BottomNavigation.Action key="home" icon="home" label="Home" value="" onPress={() => {
                    setActive('home')
                }} />
                <BottomNavigation.Action key="chatbot" icon="computer" label="ChatBot" onPress={() => {
                    setActive('chatbot')
                }} />
                <BottomNavigation.Action key="store" icon="store" label="Store" onPress={() => {
                    setActive('store')
                }} />
           </BottomNavigation>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignSelf: 'stretch',
        position: 'relative',
        bottom: -487
    }
})

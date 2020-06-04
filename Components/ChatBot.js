import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Header from './Typography/Header'
import BotMessage from './BotMessage'
import UserButtons from './UserButtons'

const ChatBot = ({headerText}) => {

    const [isUserActive, setIsUserActive] = useState(false);

    useEffect(() => {
        setIsUserActive(true);
    },[])

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={headerText} />
            </View> 
            <ScrollView style={styles.ChatBox}>
                {isUserActive && <BotMessage messageText={'Hello!'}/>}
                {isUserActive && <BotMessage messageText={'My name is Jacky.'} />}
                {isUserActive && <BotMessage messageText={'Are you interested in my advice?'} />}
                {isUserActive && <UserButtons />}
            </ScrollView>
        </View>
    )
}

export default ChatBot

const styles = StyleSheet.create({
    Page: {
        width: '100%',
        height: '100%',
    },
    HeaderContainer: {
        backgroundColor: 'turquoise',
        width: '100%',
        height: '30%',
        paddingTop: 60,
        paddingLeft: 50
    },
    ChatBox: {
        padding: 20
    },
    UserMessage: {
        backgroundColor: '#47cccf',
        maxWidth: 150,
        padding: 5,
        marginBottom: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginLeft: 220
    },
    UserMessageText: {
        fontSize: 25,
    }
})
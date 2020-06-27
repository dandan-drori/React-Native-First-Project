import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header } from './Typography'
import BotMessage from './BotMessage'
import UserButtons from './UserButtons'
import UserMessage from './UserMessage'
import LottieView from 'lottie-react-native'

const ChatBot = () => {

    const [isUserActive, setIsUserActive] = useState(false);
    const [userResponse, setUserResponse] = useState(null);
    const [userResponseTwo, setUserResponseTwo] = useState(null);
    const [isButtonActive, setIsButtonActive] = useState('none');

    const Scroller = useRef(null)

    useEffect(() => {
        setIsUserActive(true);
    },[])

    useEffect(() => {
        setTimeout(() => setIsButtonActive('flex'), 5000)
    },[])

    const handlePressNo = () => {
        setUserResponse(false)
        setIsButtonActive('none')
    }

    const handlePressYes = () => {
        setUserResponse(true)
        setIsButtonActive('none')
    }

    const handlePressNoTwo = () => {
        setUserResponseTwo(false)
        setIsButtonActive('none')
    }

    const handlePressYesTwo = () => {
        setUserResponseTwo(true)
        setIsButtonActive('none')
    }

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={'Chat-Bot'} />
                <LottieView source={require('../assets/chat.json')} autoPlay loop style={{height: 100}}/>
            </View> 
            <ScrollView style={styles.ChatBox} contentContainerStyle={{minHeight: 550}} ref={Scroller} onContentSizeChange={(contentWidth, contentHeight) => {
                Scroller.current.scrollToEnd({animated: true})
            }}>
                {isUserActive && <BotMessage messageText={'Hello!'} fadeDelay={1000} />}
                {isUserActive && <BotMessage messageText={'My name is Jacky.'}  fadeDelay={2500}/>}
                {isUserActive && <BotMessage messageText={'Do you wanna hear a joke?'} fadeDelay={4000}/>}
                {userResponse===false && <UserMessage messageText={'No'} fadeDelay={0}/>}
                {userResponse && <UserMessage messageText={'Yes'} fadeDelay={500}/>}
                {userResponse && <BotMessage messageText={'Knock knock'} fadeDelay={1500}/>}
                {userResponse && <UserMessage messageText={"Who's there?"} fadeDelay={2500}/>}
                {userResponse && <BotMessage messageText={'Tank'} fadeDelay={4000}/>}
                {userResponse && <UserMessage messageText={"Tank who?"} fadeDelay={5500}/>}
                {userResponse && <BotMessage messageText={"Your'e welcome"} fadeDelay={7000}/>}
                {userResponse && <BotMessage messageText={"Did you like my joke?"} fadeDelay={8500}/>}
                {userResponseTwo && <BotMessage messageText={"Yayyyy"} fadeDelay={1500}/>}
                {userResponse===false && <BotMessage messageText={'Oh man :('} fadeDelay={1500}/>}
            </ScrollView>
            <View>
                {isUserActive && <UserButtons fadeDelay={0} handlePressNo={handlePressNo} handlePressYes={handlePressYes} isButtonActive={isButtonActive}/>}
                {userResponse && <UserButtons fadeDelay={0} handlePressNo={handlePressNoTwo} handlePressYes={handlePressYesTwo} isButtonActive={isButtonActive}/>}
            </View>
        </View>
    )
}

export default ChatBot

const styles = StyleSheet.create({
    Page: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    HeaderContainer: {
        flexDirection: 'row',
        backgroundColor: '#ff6655',
        width: '100%',
        height: '30%',
        paddingTop: 50,
        paddingLeft: 35
    },
    ChatBox: {
        padding: 20,
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
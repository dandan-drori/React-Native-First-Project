import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native'
import { Header } from './Typography'
import LottieView from 'lottie-react-native';

const DefaultPage = ({headerText, bodyText}) => {

    const createAlert = () => {
        Alert.alert(
            "Action Successful",
            "It's gweat",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={headerText} />
            </View> 
            <ScrollView style={styles.BodyContainer}>
                <Image source={require('../assets/rediso.jpg')} style={styles.Isometric}/>
                {/* <LottieView source={require('../assets/services.json')} autoPlay loop style={{height: 250}}/> */}
            </ScrollView>
        </View>
    )
}

export default DefaultPage

const styles = StyleSheet.create({
    Page: {
        width: '100%',
        height: '100%',
    },
    HeaderContainer: {
        backgroundColor: '#ff6655',
        width: '100%',
        height: '30%',
        paddingTop: 50,
        paddingLeft: 35
    },
    BodyContainer: {
        padding: 0
    },
    Isometric: {
        height: 300,
        width: '100%'
    }
})


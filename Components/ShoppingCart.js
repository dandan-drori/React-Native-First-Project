import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-material-ui'

const ShoppingCart = ({ cartItems, deleteItem, totalCartPrice, subtractQuantity, addQuantity }) => {

    const [scaleDown, setScaleDown] = useState(1)

    const handleDelete = (item) => {
        deleteItem(item)
    }

    const handleAddQuantity = (item, index) => {
        addQuantity(item, index)
    }

    const handleSubtractQuantity = (item, index) => {
        subtractQuantity(item, index)
    }

    const render = cartItems.map((item, index) => {
        return (
        <View style={{...styles.ShoppingCartItem, transform: [{scale: scaleDown}]}} key={index}>
            <Image source={item.image} style={styles.Image}/>
            <View style={styles.ContentWrapper}>
                <View style={styles.TextWrapper}>
                    <Text style={styles.ShoppingCartItemName}>
                        {item.name}
                    </Text>
                    <Text style={styles.ShoppingCartItemPrice}>
                    {item.price+'$'}
                    </Text>
                    <View style={styles.QuantityContainer}>
                        <Button primary raised text="-" onPress={() => {handleSubtractQuantity({name: item.name, price: item.price}, index)}}/>
                        <Text>
                            {`Quantity: ${item.quantity}`}
                        </Text>
                        <Button primary raised text="+" onPress={() => {handleAddQuantity({name: item.name, price: item.price, quantity: item.quantity}, index)}}/>
                    </View>
                </View>
                <View style={styles.Actions}>
                    <Button accent raised text="" icon='delete' onPress={() => handleDelete({name: item.name, price: item.price})}/>
                </View>
            </View>
        </View>
        )
    }) 

    return (
        <View>
            <ScrollView style={styles.ShoppingCartContainer}>
                {render=='' ? <View><Text style={styles.EmptyCartMessage}>Your cart is empty! {'\n'}</Text><Text style={styles.Suggestion}>Go to the store and purchase some items!</Text></View> : render}
            </ScrollView>
            <View style={styles.TotalPrice}>
                {render==''? null : <Text style={styles.TotalPriceText}>Total Price: {`${totalCartPrice}$`}</Text>}
            </View>
        </View>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    ShoppingCartContainer: {
        padding: 30,
        flex: 1,
        minHeight: 300
    },
    ShoppingCartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        marginBottom: 25,
        borderRadius: 20,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        // set shadow for android
        elevation: 3,
        // set shadow for IOS
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    ContentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TextWrapper: {
        alignItems: 'center',
        flex: 1,
    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    ShoppingCartItemName: {
        fontSize: 16,
        marginBottom: 7,
    },
    ShoppingCartItemPrice: {
        fontSize: 16
    },
    Actions: {
        minWidth: 60,
        maxWidth: 60,
        flex: 1,
        marginRight: 110
    },
    EmptyCartMessage: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff3333',
        textAlign: 'center'
    },
    Suggestion: {
        textAlign: 'center',
        fontSize: 30
    },
    TotalPrice: {
        alignItems: 'center'
    },
    TotalPriceText: {
        fontSize: 20
    },
    QuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'

const ItemPage = ( { route, saveForLater, addToCart } ) => {

    const { image } = route.params
    const { name } = route.params
    const { price } = route.params
    const { stars } = route.params

    const handleAddToCart = (item) => {
        // saveForLater(item)
    }

    const handleSaveForLater = (item) => {
        // addToCart(item)
    }

    return (
        <View style={styles.ItemPage}>
            <View style={styles.Item}>
                <View style={styles.Top}>
                    <Image source={image} style={styles.Image}/>
                </View>
                <View style={styles.Bottom}>
                    <View style={styles.NameContainer}> 
                        <Text style={styles.NameText}>{name}</Text>
                    </View>
                    <View style={styles.TextStarsContainer}>
                        <Text style={styles.PriceText}>{price}</Text>
                        <View>
                            {
                    stars===1 &&
                    <View style={styles.StarsContainer}>
                        <Text style={styles.Stars}>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                            <Icon size={20} name="star-0" color="#ccc"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                        </Text>
                    </View>
                    }
                    {
                    stars===2 &&
                    <View style={styles.StarsContainer}>
                        <Text style={styles.Stars}>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                        </Text>
                    </View>
                    }
                    {
                    stars===3 &&
                    <View style={styles.StarsContainer}>
                        <Text style={styles.Stars}>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                        </Text>
                    </View>
                    }
                    {
                    stars===4 &&
                    <View style={styles.StarsContainer}>
                        <Text style={styles.Stars}>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star-o" color="#ccc"></Icon>
                        </Text>
                    </View>
                    }
                    {
                    stars===5 &&
                    <View style={styles.StarsContainer}>
                        <Text style={styles.Stars}>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                            <Icon size={20} name="star" color="#F9C72D"></Icon>
                        </Text>
                    </View>
                    }
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Actions}>
                <Button accent raised text="Add To Cart" icon='shopping-cart' onPress={() => {}} style={styles.AddToCart}/>
            </View>
        </View>
    )
}

export default ItemPage

const styles = StyleSheet.create({
    ItemPage: {
        width: '100%',
        height: '100%',
        padding: 0
    },
    Item: {
        width: '100%',
        alignItems: 'center',
    },
    Top: {
        height: '60%',
        width: '100%',
        backgroundColor: '#ff6655',
        alignItems: 'center',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30
    },
    Bottom: {
        height: '33%',
        width: '100%',
        paddingTop: 50,
    },
    Actions: {
        width: '85%',
        justifyContent: 'center',
        paddingLeft: 57
    },
    Image: {
        width: 300,
        height: 300,
        marginTop: 35
    },
    NameContainer: {
        marginBottom: 50
    },
    TextStarsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    NameText: {
        fontSize: 30,
        color: '#ff6655',
        textAlign: 'center'
    },
    PriceText: {
        fontSize: 20,
    },
    Stars: {
        position: 'relative',
        top: 5
    },
})

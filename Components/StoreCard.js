import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import { useNavigation } from '@react-navigation/native';

const StoreCard = ({ name, price, image, stars, addToCart }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.CardsContainer}>
            <Image style={styles.Image} source={image} accessibilityLabel="product image"/>
            <View style={styles.TextSection}>
                <View>
                    <Text style={styles.Text}>{name}</Text>
                    <Text style={styles.Text}>{price}</Text>
                </View>
                <View style={styles.StarsContainer}>
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
                            <Icon size={20} name="star-0" color="#ccc"></Icon>
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
                    <Button accent raised text="Buy Now" style={{container: styles.BuyButton}} onPress={() => navigation.navigate('ItemPage', {image: image, name: name, price: price, stars: stars})} />
                </View>
            </View>
        </View>
    )
}

export default StoreCard

const styles = StyleSheet.create({
    CardsContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    Image: {
        height: 300,
        width: '100%',
        backgroundColor: 'blue',
    },
    TextSection: {
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Text: {
        fontSize: 20,
        marginVertical: 15
    },
    StarsContainer: {
        justifyContent: 'space-around'
    },
    Stars: {
        position: 'relative',
        top: 4
    },
    BuyButton: {
        position: 'relative',
        top: 4,
        backgroundColor: '#ff6655',
    },
})

import React, { useState } from 'react'
import { StyleSheet, View, Image, TouchableNativeFeedback } from 'react-native'
import { Header } from './Typography'
import StoreItems from './StoreItems'
import { createStackNavigator } from '@react-navigation/stack'
import ItemPage from './ItemPage'
import ShoppingCart from './ShoppingCart'

const Store = () => {

    const [storeItemsShoes, setStoreItemsShoes] = useState([
        {
            key: 1,
            name: 'Nike Air A365',
            dateCreated: '01.06.2020',
            img: require('../Images/Nike_Air_A365.jpg'),
            price: 99.99,
            stars: 4,
            quantity: 1
        },
        {
            key: 2,
            name: 'Nike Air Jordan',
            dateCreated: '31.05.2020',
            img: require('../Images/Nike_Air_Jordan.jpg'),
            price: 79.99,
            stars: 5,
            quantity: 1
        },
        {
            key: 3,
            name: 'Nike Air Max 720',
            dateCreated: '01.05.2020',
            img: require('../Images/Nike_Air_Max_720.jpg'),
            price: 69.99,
            stars: 4,
            quantity: 1
        },
        {
            key: 4,
            name: 'Nike Air Max',
            dateCreated: '13.05.2020',
            img: require('../Images/Nike_Air_Max.jpg'),
            price: 89.99,
            stars: 3,
            quantity: 1
        },
        {
            key: 5,
            name: 'Nike Air Plus',
            dateCreated: '16.05.2020',
            img: require('../Images/Nike_Air_Plus.jpg'),
            price: 99.99,
            stars: 4,
            quantity: 1
        }
    ])

    const [storeItemsShirts, setStoreItemsShirts] = useState([
        {
            key: 1,
            name: 'Pull & Bear',
            dateCreated: '01.06.2020',
            img: require('../Images/Pull_And_Bear.jpg'),
            price: 19.99,
            stars: 4,
            quantity: 1
        },
        {
            key: 2,
            name: 'American Eagle',
            dateCreated: '31.05.2020',
            img: require('../Images/American_Eagle.jpg'),
            price: 19.99,
            stars: 5,
            quantity: 1
        },
        {
            key: 3,
            name: 'Billabong',
            dateCreated: '01.05.2020',
            img: require('../Images/Billabong.jpg'),
            price: 39.99,
            stars: 4,
            quantity: 1
        },
        {
            key: 4,
            name: 'Fox',
            dateCreated: '13.05.2020',
            img: require('../Images/Fox.jpg'),
            price: 19.99,
            stars: 3,
            quantity: 1
        },
        {
            key: 5,
            name: 'S.Wear',
            dateCreated: '16.05.2020',
            img: require('../Images/S_Wear.jpg'),
            price: 99.99,
            stars: 4,
            quantity: 1
        }
    ])

    const [ActiveIconContainer, setActiveIconContainer] = useState([
        {backgroundColor: '#ff6655'},
        {backgroundColor: 'transparent'}
    ])

    const [activeCategory, setActiveCategory] = useState('Shoes')

    const [cartItems, setCartItems] = useState([])

    const [totalCartPrice, setTotalCartPrice] = useState(0)

    const handleShoes = () => {
        setActiveIconContainer([
            {backgroundColor: '#ff6655'},
            {backgroundColor: 'transparent'},
            {backgroundColor: 'transparent'}
        ])
        setActiveCategory('Shoes')
    }

    const handleShirts = () => {
        setActiveIconContainer([
            {backgroundColor: 'transparent'},
            {backgroundColor: '#ff6655'},
            {backgroundColor: 'transparent'},
        ])
        setActiveCategory('Shirts')
    }

    const handleShoppingCart = () => {
        setActiveIconContainer([
            {backgroundColor: 'transparent'},
            {backgroundColor: 'transparent'},
            {backgroundColor: '#ff6655'},
        ])
        setActiveCategory('ShoppingCart')
    }

    const handleAddQuantity = (item, index) => {
        setCartItems(prevState => {
            prevState[index].quantity = prevState[index].quantity + 1;
            return ([...prevState])
        })
        setTotalCartPrice(prevState => {
            prevState = prevState + item.price
            return (+prevState.toFixed(2))
        })
    }   

    const handleSubtractQuantity = (item, index) => {
        if (cartItems[index].quantity > 1) {
            setCartItems(prevState => {
                prevState[index].quantity = prevState[index].quantity - 1;
                return ([...prevState])
            })
            setTotalCartPrice(prevState => {
                prevState = prevState - item.price
                return (+prevState.toFixed(2))
            })
        } else {
            handleDeleteItem(item)
        }
    }

    const handleAddToCart = (item) => {  
        const isItemInCart = cartItems.some(cartItem => item.name === cartItem.name)
        if (isItemInCart) {
            null
        } else {
            setCartItems([...cartItems, item])
        }  
        setTotalCartPrice(+(totalCartPrice + item.price).toFixed(2))
        setCartItems(prevState => {
            cartItems.forEach((cartItem, index) => {
                if (item.name === prevState[index].name) {
                    prevState[index].quantity = prevState[index].quantity + 1
                }
            })
            return [...prevState]
        })
    }

    const handleDeleteItem = (item) => {
        cartItems.some(cartItem => {
            if (cartItem.name === item.name) {
                setTotalCartPrice(+(totalCartPrice - (item.price*cartItem.quantity)).toFixed(2))
        }})
        const filteredCart = cartItems.filter(cartItem => cartItem.name!==item.name)
        setCartItems(filteredCart)
    }

    return (
        <View style={styles.Page}>
            <View style={styles.HeaderContainer}>
                <Header headerText={'Store'} />
            </View>
            <View style={styles.FilterContainer}>
                <View style={styles.Categories}>
                    <TouchableNativeFeedback onPress={handleShoes}>
                        <View style={{...styles.IconContainer, ...ActiveIconContainer[0]}}>
                            <Image source={require("../Images/Shoes.png")}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={handleShirts}>
                        <View style={{...styles.IconContainer, ...ActiveIconContainer[1]}}>
                            <Image source={require("../Images/Shirt.png")} />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={handleShoppingCart}>
                        <View style={{...styles.IconContainer, ...ActiveIconContainer[2]}}>
                            <Image source={require("../Images/ShoppingCart.png")} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            {
            activeCategory==='Shoes' &&
            <View style={{flex: 1}}>
                <View>
                    <StoreItems storeItems={storeItemsShoes} addToCart={handleAddToCart} />
                </View>
            </View>
            }
            {
            activeCategory==='Shirts' &&
            <View style={{flex: 1}}>
                <StoreItems storeItems={storeItemsShirts} addToCart={handleAddToCart} />
            </View>
            }
            {
            activeCategory==='ShoppingCart' &&
            <View>
                <ShoppingCart cartItems={cartItems} deleteItem={handleDeleteItem} totalCartPrice={totalCartPrice} addQuantity={handleAddQuantity} subtractQuantity={handleSubtractQuantity}/>
            </View>
            }
        </View>
    )
}

const StoreStack = createStackNavigator();

export function StoreStackScreen() {
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen name="Store" component={Store} options={{headerShown: false}}/>
        <StoreStack.Screen name="ItemPage" component={ItemPage} options={{headerShown: false}}/>
      </StoreStack.Navigator>
    );
  }

export default Store

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
    FilterContainer: {
        width: '100%',
        padding: 20,
    },
    Categories: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    IconContainer: {
        padding: 10,
        borderRadius: 50,
        marginHorizontal: 10
    },
})

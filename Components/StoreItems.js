import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import StoreCard from './StoreCard'

const StoreItems = ({ storeItems, addToCart }) => {

    const names = storeItems.map(item => item.name)
    const prices = storeItems.map(item => item.price)
    const images = storeItems.map(item => item.img)
    const stars = storeItems.map(item => item.stars)
    const quantity = storeItems.map(item => item.quantity)

    return (
         <ScrollView style={styles.StoreItemsContainer} >
             <StoreCard name={names[1]} price={prices[1]} image={images[1]} stars={stars[1]} quantity={quantity[0]} addToCart={addToCart}/>
             <StoreCard name={names[0]} price={prices[0]} image={images[0]} stars={stars[0]} quantity={quantity[1]} addToCart={addToCart} />
             <StoreCard name={names[2]} price={prices[2]} image={images[2]} stars={stars[2]} quantity={quantity[2]} addToCart={addToCart} />
             <StoreCard name={names[3]} price={prices[3]} image={images[3]} stars={stars[3]} quantity={quantity[3]} addToCart={addToCart} />
             <StoreCard name={names[4]} price={prices[4]} image={images[4]} stars={stars[4]} quantity={quantity[4]} addToCart={addToCart} />
         </ScrollView>
        
    )
}

export default StoreItems

const styles = StyleSheet.create({
    StoreItemsContainer: {
        padding: 20,
    }
})

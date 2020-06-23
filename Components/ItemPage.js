import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, List, ListItem, FlatList, Modal, Animated, Easing, Alert } from 'react-native'
import { Button } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import Dialog from "react-native-dialog";
import LottieView from 'lottie-react-native';

const ItemPage = ( { route } ) => {

    const { image } = route.params
    const { name } = route.params
    const { price } = route.params
    const { stars } = route.params
    const { addToCart } = route.params

    const [isDialogVisible, setIsDialogVisible] = useState(false)

    const [reviewsList, setReviewsList] = useState([])

    const [dialogInputValue, setDialogInputValue] = useState('')

    const [isReviewsDialogVisible, setIsReviewsDialogVisible] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false)

    const [pageStylesModalOpen, setPageStylesModalOpen] = useState({opacity: 1, backgroundColor: '#eee'})

    const [topSectionBackground, setTopSectionBackground] = useState({backgroundColor: '#ff6655'})

    const [isClickedTwice, setIsClickedTwice] = useState(false)

    const handleAddToCart = (item) => {
        if (!isClickedTwice) {
            addToCart(item)
            //handle Modal animation
            setPageStylesModalOpen({opacity: 0.3, backgroundColor: 'rgba(0,0,0,0.8)'})
            setTopSectionBackground({backgroundColor: '#555'})
            setIsModalVisible(true)
            setTimeout(() => {
                setIsModalVisible(false)
                setPageStylesModalOpen({opacity: 1, backgroundColor: '#eee'})
                setTopSectionBackground({backgroundColor: '#ff6655'})
            }, 1292)
            setIsClickedTwice(true)
        } else {
            Alert.alert(
                "Limit Reached!",
                "You can't purchase the same item more than once.",
                [
                  { text: "OK", onPress: () => {} }
                ],
                { cancelable: true }
              );
          
        }
    }

    return (
        <View style={{...styles.ItemPage, ...pageStylesModalOpen}}>
            <View style={styles.Item}>
                <View style={{...styles.Top, ...topSectionBackground}}>
                    <Image source={image} style={styles.Image}/>
                </View>
                <View style={styles.Bottom}>
                    <View style={styles.NameContainer}> 
                        <Text style={styles.NameText}>{name}</Text>
                    </View>
                    <View style={styles.TextStarsContainer}>
                        <Text style={styles.PriceText}>{`${price}$`}</Text>
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
                    <View style={styles.ReviewsContainer}>
                        <TouchableOpacity onPress={() => setIsReviewsDialogVisible(true)}>
                            <View style={styles.Reviews}>
                                <Text>Reviews </Text>
                                <Text>({reviewsList.length})</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.Actions}>
                <Button accent={!isModalVisible} raised text="Add To Cart" icon='shopping-cart' onPress={() => handleAddToCart({name: name, image: image, price: price})} style={styles.AddToCart}/>
            </View>
            <View>
        <Dialog.Container visible={isDialogVisible}>
          <Dialog.Title>Write A Review:</Dialog.Title>
          <Dialog.Input onChangeText={text => {setDialogInputValue(text)}} value={dialogInputValue} wrapperStyle={styles.DialogInputWrapper} autoFocus />
          <Dialog.Button label="Cancel" onPress={() => {setIsDialogVisible(false)}}/>
          <Dialog.Button label="Submit" onPress={() => {
              setIsDialogVisible(false)
              setDialogInputValue('')
              if (dialogInputValue === '') {
                  alert('Review input field cannot be left empty!')
              } else if (dialogInputValue.length > 50) {
                alert('Reviews cannot exceed 50 characters!')
              } else {
                setReviewsList([...reviewsList, dialogInputValue])
              }
          }}/>
        </Dialog.Container>
        <Dialog.Container visible={isReviewsDialogVisible}>
          <Dialog.Title>Reviews:</Dialog.Title>
          <Dialog.Description>
            {reviewsList.map(review => "\n" + review + "\n" + "______________________________" + "\n")}
          </Dialog.Description>
          <Dialog.Button label="Back" onPress={() => {setIsReviewsDialogVisible(false)}}/>
          <Dialog.Button label="Write A Review" onPress={() => {
              setIsReviewsDialogVisible(false)
              setIsDialogVisible(true)
          }}/>
        </Dialog.Container>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
            setIsModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView source={require('../assets/checkTwo.json')} autoPlay style={{width: 200, height: 200}} />
          </View>
        </View>
      </Modal>
        </View>
    )
}

export default ItemPage

const styles = StyleSheet.create({
    ItemPage: {
        width: '100%',
        height: '100%',
    },
    Item: {
        width: '100%',
        alignItems: 'center',
    },
    Top: {
        height: '60%',
        width: '100%',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    Bottom: {
        height: '33%',
        width: '100%',
        paddingTop: 30,
    },
    Actions: {
        width: '85%',
        justifyContent: 'center',
        paddingLeft: 57
    },
    Image: {
        width: 300,
        height: 300,
        marginTop: 35,
    },
    NameContainer: {
        marginBottom: 40
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
    ReviewsContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    },
    Reviews: {
        flexDirection: 'row'
    },
    DialogInputWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 0,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

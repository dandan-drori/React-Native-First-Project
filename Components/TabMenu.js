import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const TabMenu = ({ handleClick, currentTab }) => {

    const [color, setColor] = useState('#300')
    const [backgroundColor, setBackgroundColor] = useState('#fff')
    const [active, setActive] = useState('Home')

    return (
        <View style={styles.TabMenu}>
            <FlatList 
                horizontal
                style={styles.List}
                data={[
                    {key: 'Home', link: '/'},
                    {key: 'ChatBot', link: '/chat-bot'},
                    {key: 'Store', link: '/store'}
                ]}
            renderItem={({item}) => <Link to={item.link} onPress={handleClick}>
                    <View>
                        <Text style={styles.ListItem}>
                            <Icon name="home" size={30} color="#300" style={{...styles.Icon, color: color}}/>
                        </Text>
                        <Text style={styles.ItemText}>
                            {item.key}
                        </Text>
                    </View>
                </Link>
            }>
            </FlatList>
        </View>
    )
}

export default TabMenu

const styles = StyleSheet.create({
    TabMenu: {
        position: 'absolute',
        bottom: 0,
    },
    ListItem: {
        fontSize: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 53,
        paddingVertical: 0,
    },
    ItemText: {
        textAlign: 'center',    
    }
})

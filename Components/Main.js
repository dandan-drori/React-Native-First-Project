import React from 'react'
import Home from './Home'
import ChatBot from './ChatBot'
import Store from './Store'
import { StoreStackScreen } from './Store'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator();

const Main = () => {

    // menu logic:
    // const [isOpen, setIsOpen] = useState(false);
    // const handleNavClick = () => {
    //     isOpen ? setIsOpen(false) : setIsOpen(true)
    // }
    // const handleLinkClick = () => {
    //     setIsOpen(false)
    // }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home'
                          : 'home';
                      } else if (route.name === 'Chat-Bot') {
                        iconName = focused ? 'computer' : 'computer';
                      } else if (route.name === 'Store') {
                          iconName = focused ? 'store' : 'store';
                      }
          
                      // You can return any component that you like here!
                      return <MaterialIcon name={iconName} size={size} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#ff6655',
                    inactiveTintColor: 'gray',
                  }}
                  >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Chat-Bot" component={ChatBot} />
                <Tab.Screen name="Store" component={StoreStackScreen} />
            </Tab.Navigator>        
        </NavigationContainer>
    )
}

export default Main

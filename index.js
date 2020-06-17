/**
 * @format
 */
import {AppRegistry} from 'react-native';
// import Main from './Components/Main'
import Home from './Components/Home'
import Main from './Components/Main'
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";

// AppRegistry.registerComponent(appName, () => Main);

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Main);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen'
             }
           }  
         ]
       }
     }
  });
});
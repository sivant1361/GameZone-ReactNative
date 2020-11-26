import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

import React from 'react';
import Header from '../shared/header'

const screens = {
    Home:{
        screen : Home,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Game Zone" />
            }
        }
    },
    ReviewDetails:{
        screen : ReviewDetails,
        navigationOptions: {
            title:'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#4f4f4f',
        headerStyle:{
            backgroundColor:'#d9d9d9' 
        }
    }
});

export default HomeStack;
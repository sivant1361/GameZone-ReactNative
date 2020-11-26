import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

import React from 'react';
import Header from '../shared/header'

const screens = {
    About:{
        screen : About,
        navigationOptions: ({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="About Game Zone" />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#4f4f4f',
        headerStyle:{
            backgroundColor:'#d9d9d9'
        }
    }
});

export default AboutStack;
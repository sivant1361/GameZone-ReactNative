import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}){

    const openMenu = ()=>{
        navigation.openDrawer()
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} size={28} style={styles.icon} />
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left:16
    },
    headerImage:{
        width:30,
        height:30,
        marginHorizontal:10
    }
})
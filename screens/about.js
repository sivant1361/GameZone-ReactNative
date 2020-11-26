import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25,fontWeight:'bold',marginBottom:15}}>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding :24
    }
})
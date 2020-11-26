import React from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'
import { globalStyles,images } from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){
    const rating = navigation.getParam('rating')
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
                {/* <Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text> */}
                <View style={[styles.rating]}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection:'row',
        marginTop:16,
        paddingTop:16,
        justifyContent:'center',
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})
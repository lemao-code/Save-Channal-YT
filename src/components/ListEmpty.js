import React from 'react'
import {View, Text} from 'react-native'

export default function Empty () {
    return (
        <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100}}>
            <Text style={{color: "black", fontSize: 15}}>Empty List</Text>
        </View>
    )
}
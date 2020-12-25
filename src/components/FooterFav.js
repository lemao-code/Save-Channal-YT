import React from 'react'
import { TouchableOpacity, View, Text} from 'react-native'


export default function Footer ({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SearchChannel')}>
                <View style={{backgroundColor: "black", width: "100%", alignItems: "center", justifyContent: "center", height: 60}}>
                    <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>back</Text>
                </View>
        </TouchableOpacity>
    )
}
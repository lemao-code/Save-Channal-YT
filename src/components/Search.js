import React, {useState} from 'react'
import Empty from './ListEmpty'
import ListChannels from './ListChannels'
import {InputSearch} from './style'
import {View,Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import axios from 'axios'

export default function Search () {
    const [channels, setChannels] = useState(null)
    const [namechannel, setNameChannel] = useState('')


    async function handleSearchChannel (namechannel) {
        const response = await axios.get(` https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyARva_h2jTmeJG-trdODbngWErlDxL8a18&type=channel&q=${namechannel}`)
        setChannels(response)
    }
    return (
        <View style={{display: "flex", flexDirection: "column"}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <InputSearch value={namechannel} onChangeText={(text) => setNameChannel(text)} placeholder="Channels"/>
                <View style={{backgroundColor: "black", width: 50, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 5,
                        marginLeft: 10, marginTop: 15}}>
                    <TouchableOpacity onPress={() => handleSearchChannel(namechannel)}>
                        <Icon name="search1" color="#FFFFFF" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                {channels == null ? (
                    <Empty />
                ) : (
                    <ListChannels channels={channels} />
                )}
            </View>
        </View>
    )
}
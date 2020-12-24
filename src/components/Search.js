import React, {useState} from 'react'
import Empty from './ListEmpty'
import ListChannels from './ListChannels'
import {InputSearch} from './style'
import {View, TouchableOpacity, Keyboard} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import axios from 'axios'

const data = [{
    name: "Lemao chaveiro",
    img: "image",
    id: 1
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 2
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 3
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 4
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 5
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 6
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 7
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 8
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 9
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 10
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 11
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 12
},{
    name: "Lemao chaveiro",
    img: "image",
    id: 13
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 14
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 15
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 16
},{
    name: "Lemao chaveiro",
    img: "image",
    id: 17
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 18
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 19
},
{
    name: "Lemao chaveiro",
    img: "image",
    id: 20
},
]

export default function Search () {
    const [channels, setChannels] = useState(null)
    const [namechannel, setNameChannel] = useState('')


    async function handleSearchChannel (namechannel) {
        Keyboard.dismiss()
        
        try {
            
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyARva_h2jTmeJG-trdODbngWErlDxL8a18&type=channel&q=${namechannel}`)
            setChannels(response)
        }catch(err) {
            console.log(`errrorr:::: ${err}`)
        }
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
                {channels || data == null ? (
                    <Empty />
                ) : (
                    <ListChannels channels={data} />
                )}
            </View>
        </View>
    )
}
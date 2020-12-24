import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../Context/AuthContext'
import {TouchableOpacity, Text, View} from 'react-native'
import {ContainerSearchChannel, HeaderUser} from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorageStatic from '@react-native-async-storage/async-storage'
import Search from './Search'


export default function SearchChannel ({navigation}) {

    const {searchVisibleHeader} = useContext(Context)
  
    const [name, setName] = useState('')
    
    useEffect(() => {
        async function getName() {
            searchVisibleHeader()
            const name = await AsyncStorageStatic.getItem('name')
            setName(name)
        }
        getName()
    },[])

    return (
        <ContainerSearchChannel>
            <HeaderUser>
                <Icon name="user" size={30} color="#FFFF"/>
                <Text style={{color: "white", fontSize: 25}}>{name}</Text>
                <View style={{display: "flex", flexDirection: "row", marginLeft: 180}}>
                    <Icon name="star" size={30} color="#FFFF"/>
                    <TouchableOpacity style={{marginLeft: 20}} onPress={async () => {
                        try {
                            await AsyncStorageStatic.removeItem('token')
                            navigation.navigate('Home')
                        }catch(err) {
                            alert(`errror: ${err}`)
                        }
                    }}>
                        <Icon name="logout" size={30} color="#FFFF"/>
                    </TouchableOpacity>
                </View>
            </HeaderUser>
            <Search />
        </ContainerSearchChannel>
    )
}
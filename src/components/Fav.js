import React,{useEffect, useContext, useState} from 'react'
import { Context } from '../Context/AuthContext'
import { View, Text, FlatList , TouchableOpacity, Image, StyleSheet} from 'react-native'
import Footer from './FooterFav'
import AsyncStorageStatic from '@react-native-async-storage/async-storage'
import { ContainerList, HeaderUser } from './style'
import getRealm from '../services/realm'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Fav ({navigation}) {
    const { deleteFav } = useContext(Context)
    const [fav, setFav] = useState(null)
    const [name, setName] = useState('')

    useEffect(() => {
        async function getFav () {
            const realm = await getRealm()
            const fav = realm.objects('fav')
            setFav(fav)
        

        }
        async function getName() {
            const name = await AsyncStorageStatic.getItem('name')
            setName(name)
        }
        getName()
        getFav()
    }, [])


    const renderItem = ({item}) => {
        return  (
            <View style={{display: "flex",flexDirection: "row"}}>
                <ContainerList  >
                    <Image style={styles.img} source={{ uri: item.img }} />
                    <Text style={{color: "black", fontSize: 20, marginLeft: 20, marginTop: 15}}>{item.name }</Text>           
                </ContainerList>
            <TouchableOpacity onPress={() => deleteFav(item.idChannel)}>
                <View style={{marginLeft: 30, marginTop: 20}}><Icon name="star" color="#000000" size={30} /></View>
            </TouchableOpacity>
        </View>
        )
    }
 
    return (
        <View style={{display: "flex", flexDirection: "column"}}>
            <HeaderUser>
                <Icon name="user" size={30} color="#FFFF"/>
                <Text style={{color: "white", fontSize: 25, marginLeft: 15}}>{name}</Text>
                <TouchableOpacity style={{marginLeft: 200}} onPress={async () => {
                        try {
                            await AsyncStorageStatic.removeItem('token')
                            navigation.navigate('Home')
                        }catch(err) {
                            alert(`errror: ${err}`)
                        }
                    }}>
                        <Icon name="logout" size={30} color="#FFFF"/>
                    </TouchableOpacity>
            </HeaderUser>
            <View style={{display: "flex", flexDirection: "row", borderBottomColor: "#DCDCDC", borderBottomWidth: 1}}>
                <Icon name="star" color="#000000" size={60} />
                <Text style={{color: "#000000", fontSize: 30, fontWeight: "bold", marginTop: 10, marginLeft: 10, marginBottom: 15}}>My Favourites</Text>
            </View>

            {fav == null ? (
                <View style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 150}}>
                    <Text style={{color: "black"}}>
                        List fav empty
                    </Text>
                </View>
            ) : (
                <View style={{paddingBottom: 450}}>
                <FlatList data={fav} renderItem={renderItem}  keyExtractor={(item) => item.idChannel } />
                <Footer navigation={navigation}/>
                </View>
            )}
            
        </View>
        
    )
}


const styles = StyleSheet.create({
    img: {
        width: 46,
        height: 46,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 5
        
    }
})

import React, {useState, useContext , useEffect} from 'react'
import { Context } from '../Context/AuthContext'
import {Text, View, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { ContainerList } from './style'




export default function ListChannels ({channels}) {
    const { saveFav } = useContext(Context)
    const totalResults = channels.data.pageInfo.resultsPerPage
    const [perPage, setPerPage ] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(Math.ceil(totalResults/perPage))
    const [nextButton, setNextButton] = useState("flex")
    const [previousButton, setPreviousButton] = useState("none")

    useEffect(() => {
        if(page > 1 ) {
            setPreviousButton("flex")
        }else {
            setPreviousButton("none")
        }
       if(page == totalPage) {
        setNextButton("none")
       }else {
           setNextButton("flex")
       }
       list.update()
    }, [page])

    const controls = {
        next () {
            setPage((prevState) => prevState + 1)
            
            
        },
        prev () {
            setPage((prevState) => prevState - 1 )
            
            
        }
        
    }


    const renderItem = ({item}) => {
        return (
        <View style={{display: "flex", flexDirection: "row"}}>
            <ContainerList  >
                 <Image style={styles.img} source={{ uri: item.snippet.thumbnails.default.url }} />
                <Text style={{color: "black", fontSize: 20, marginLeft: 20, marginTop: 15}}>{item.snippet.title }</Text>           
            </ContainerList>
            <TouchableOpacity onPress={() => saveFav(item.snippet.title, item.snippet.thumbnails.default.url, item.snippet.channelId)}>
                <View style={{marginLeft: 30, marginTop: 20}}><Icon name="star" color="#DCDCDC" size={30} /></View>
            </TouchableOpacity>
        </View>
        )
    }

    
    const list = {
        update() {

            let _page = page - 1
            let start = _page * perPage
            let end = start + perPage
            const paginatedItems = channels.data.items.slice(start,end)
            return  (
                   <FlatList 
                    getItemLayout={(data,index) => {
                        return {length: 50,
                            offset: 50 * index, index}
                    }} initialScrollIndex={1} data={paginatedItems} renderItem={renderItem} keyExtractor={(item) => item.snippet.channelId} />
            )
        }
    }
    return (
     
        <View style={{display: "flex", flexDirection: "column",paddingBottom: 450}}>
              {list.update()}
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderTopColor: "#DCDCDC", borderTopWidth: 1}}>
                <TouchableOpacity style={{display: `${previousButton}`}}  onPress={() => controls.prev()}>
                    <Text style={{fontSize: 20, color: "red"}}> Previous </Text>
                </TouchableOpacity>
                <Text style={{color: "black", fontSize: 30, marginLeft: 20, marginRight: 20}}>{page}</Text>
                <TouchableOpacity  style={{display: `${nextButton}`}} onPress={() => controls.next()}>
                    <Text style={{fontSize: 20, color: "green"}}>Next</Text>
                </TouchableOpacity>
            </View>
                <View >
                    <Text style={{marginLeft: 5, marginTop: 10, fontSize: 20}}>Total de paginas {totalPage}</Text>
                </View>
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
